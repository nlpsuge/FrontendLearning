'use strict';

// gjs frontend-gnome/frontend-gjs/src/dbus/endSessionDialogDBusClient.js

const { Gio, GLib } = imports.gi;

const ByteArray = imports.byteArray;

const ifaceXml = `
<node>
  <interface name="org.gnome.SessionManager.EndSessionDialog">
    <method name="Open">
      <arg type="u" direction="in"/>
      <arg type="u" direction="in"/>
      <arg type="u" direction="in"/>
      <arg type="ao" direction="in"/>
    </method>
    <method name="Close"/>
    <signal name="ConfirmedLogout"/>
    <signal name="ConfirmedReboot"/>
    <signal name="ConfirmedShutdown"/>
    <signal name="Canceled"/>
    <signal name="Closed"/>
  </interface>
</node>
`;

const EndSessionDialogProxy = Gio.DBusProxy.makeProxyWrapper(ifaceXml);

var OpenWindowsInfoTracker = class {

    constructor() {
        let busWatchId = Gio.bus_watch_name(
            Gio.BusType.SESSION,
            'org.gnome.Shell',
            Gio.BusNameWatcherFlags.NONE,
            this._onNameAppeared.bind(this),
            this._onNameVanished.bind(this)
        );
        
    }

    // Watching a name on DBus. Another option is to create a proxy with the
    // `Gio.DBusProxyFlags.DO_NOT_AUTO_START` flag and watch the `g-name-owner`
    // property.
    _onNameAppeared(connection, name, _owner) {
        print(`"${name}" appeared on the session bus`);

        this._endSessionProxy = new EndSessionDialogProxy(Gio.DBus.session,
            'org.gnome.Shell',
            '/org/gnome/SessionManager/EndSessionDialog');

        this._endSessionProxy.connectSignal('ConfirmedLogout', this._resetWindowsMapping.bind(this));
        this._endSessionProxy.connectSignal('ConfirmedReboot', this._resetWindowsMapping.bind(this));
        this._endSessionProxy.connectSignal('ConfirmedShutdown', this._resetWindowsMapping.bind(this));
        this._closedSignalId = this._endSessionProxy.connectSignal('Closed', this._close.bind(this));
        this._endSessionProxy.connectSignal('Canceled', this._close.bind(this));

    }

    _onNameVanished(connection, name) {
        print(`"${name}" vanished from the session bus`);

        if (this._endSessionProxy !== null) {
            this._endSessionProxy.disconnect(this._closedSignalId);
            this._endSessionProxy = null;
        }
    }

    _close() {
        log(`_close`);
    }

    _resetWindowsMapping(proxy, sender, [aboutToShutdown]) {
        log(`Resetting windows-mapping before logout / shutdown / reboot. ${aboutToShutdown}`);
    }
}

new OpenWindowsInfoTracker();

// Start an event loop
let loop = GLib.MainLoop.new(null, false);
loop.run();

