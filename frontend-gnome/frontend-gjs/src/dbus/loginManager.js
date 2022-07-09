#!/usr/bin/env gjs
// Only a demo, no tested, no guarantee to work

const { Gio, GLib } = imports.gi;

const ByteArray = imports.byteArray;

var LoginManager = class {
    constructor() {
    
        const SystemdLoginManagerIface = ByteArray.toString(
            Me.dir.get_child('dbus-interfaces').get_child('org.freedesktop.login1.Manager.xml').load_contents(null)[1]);
        const SystemdLoginManager = Gio.DBusProxy.makeProxyWrapper(SystemdLoginManagerIface);
        this._proxy = new SystemdLoginManager(Gio.DBus.system,
                                              'org.freedesktop.login1',
                                              '/org/freedesktop/login1');
        this._proxy.connectSignal('SeatNew', this._userNew.bind(this));
        this._proxy.connectSignal('UserRemoved', this._userRemove.bind(this));
        this._proxy.connectSignal('PrepareForShutdown', this._prepareForShutdown.bind(this));

    }

    _userNew(proxy, sender, [uid, object_path]) {
        log('_userNew');
        log(uid);
        log(object_path);
    }

    _userRemove(proxy, sender, [uid, object_path]) {
        log('_userRemove');
        log(uid);
        log(object_path);
    }

    _prepareForShutdown(proxy, sender, [aboutToShutdown]) {
        log(`Cleaning windows-mapping before shutdown or reboot. ${aboutToShutdown}`);
        this._settings.set_string('windows-mapping', '{}');
    }

    async inhibit(reason, cancellable) {
        log('Calling inhibit');
        const inVariant = new GLib.Variant('(ssss)',
            ['sleep', 'GNOME Shell ex', reason, 'delay']);
        const [outVariant_, fdList] =
            await this._proxy.call_with_unix_fd_list('Inhibit',
                inVariant, 0, -1, null, cancellable);
        const [fd] = fdList.steal_fds();
        return new Gio.UnixInputStream({ fd });
    }

}