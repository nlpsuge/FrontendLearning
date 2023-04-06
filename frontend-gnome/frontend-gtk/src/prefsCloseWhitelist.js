// cd to_the_folder_contains_this_file
// gjs prefsCloseWhitelist.js

'use strict';

imports.gi.versions.Gtk = "4.0";
const { GObject, Gtk, Gio, GLib } = imports.gi;

log('uri: ' + Gio.File.new_for_path(`./ui/prefs-gtk4-close-whitelist.ui`).get_uri());


var CloseWindowsWhitelist = GObject.registerClass({
}, class CloseWindowsWhitelist extends GObject.Object {
    id; // int. just like the id in MySQL. Used to update or delete rows.
    name; // string. Can be any string
    compareWith; // string. title, wm_class, wm_class_instance, app_name...
    method; // string. equals
    enabled; // boolean
    enableWhenCloseWindows; // boolean
    enableWhenLogout; // boolean

    static new(param) {
        return Object.assign(new CloseWindowsWhitelist(), param);
    }
});

var CloseWhitelistColumnView = GObject.registerClass({
    GTypeName: 'AwsmCloseWhitelistColumnView',
    // In gnome shell extension development, we can use the below code to get the uri for loading the correct ui file:
    // const ExtensionUtils = imports.misc.extensionUtils;
    // const Me = ExtensionUtils.getCurrentExtension();
    // Gio.File.new_for_path(`${Me.path}/data/ui/prefs-gtk4-close-whitelist.ui`).get_uri()
    Template: Gio.File.new_for_path(`./ui/prefs-gtk4-close-whitelist.ui`).get_uri(),
    Children: [
      'list'
    ],
}, class CloseWhitelistColumnView extends Gtk.Box {

    _init(datalist, params = {}) {
        super._init(params);

        datalist = datalist ? datalist : [];
        this.datalist = datalist;

        this.model = new Gio.ListStore({ item_type: GObject.TYPE_OBJECT });

        this.selectionModel = new Gtk.SingleSelection({ model: this.model });

        this.list.set_model(this.selectionModel);
        this.updateView(datalist);
    }

    updateView(dataList) {
        this.model.remove_all();
        for(const item of dataList) {
            this.model.append(item);
        }
    }
    
    setup_enabled_cb(factory, listItem) {
        const checkButton = new Gtk.CheckButton()
        listItem.set_child(checkButton);
    }

    bind_enabled_cb(factory, listItem) {
        const widget = listItem.get_child();
        // item is the an instance that is added into the model
        const item = listItem.get_item();
        // So we can get `enabled` value from `item` here
        const enabled = item.enabled
        log(enabled)
        widget.set_active(enabled);
    }

    setup_name_cb(factory, listItem) {
        log('setup_name_cb ' + listItem)
        
    }

    bind_name_cb(factory, listItem) {
        log('bind_name_cb ' + listItem)
        const item = listItem.get_item();
        const name = item.name ? item.name : '';
        const entry = new Gtk.Entry({
            text: name,
            tooltip_text: name
        });
        listItem.set_child(entry);
    }

    setup_close_windows_cb(factory, listItem) {
        const switcher = new Gtk.Switch({halign: Gtk.Align.START});
        listItem.set_child(switcher);
    }

    bind_close_windows_cb(factory, listItem) {
        log('bind_column3_cb ' + listItem)
        const widget = listItem.get_child();
        const item = listItem.get_item();
        const enableWhenCloseWindows = item.enableWhenCloseWindows
        widget.set_active(enableWhenCloseWindows);
    }

    setup_log_out_cb(factory, listItem) {
        const switcher = new Gtk.Switch({halign: Gtk.Align.START});
        listItem.set_child(switcher);
    }

    bind_log_out_cb(factory, listItem) {
        const widget = listItem.get_child();
        const item = listItem.get_item();
        const enableWhenLogout = item.enableWhenLogout;
        widget.set_active(enableWhenLogout);
    }

    setup_operation_cb(factory, listItem) {
        const box = new Gtk.Button({
            label: 'Remove...'
        });
        listItem.set_child(box);
    }

    bind_operation_cb(factory, listItem) {
        const widget = listItem.get_child();
        widget.connect('clicked', () => {
            const item = listItem.get_item();
            const id = item.id;
            log('removing ' + id)
        });
    }


});

Gtk.init();

// Create a window that stops the program when it is closed
const loop = GLib.MainLoop.new(null, false);

const columnView = new CloseWhitelistColumnView();
columnView.updateView([
    CloseWindowsWhitelist.new({
        "id": 473,
        "method": "equals",
        "enabled": false,
        "enableWhenCloseWindows": false,
        "enableWhenLogout": true
    }),    
    CloseWindowsWhitelist.new({
        "id": 687,
        "name": 'A name',
        "method": "equals",
        "enabled": true,
        "enableWhenCloseWindows": true,
        "enableWhenLogout": false
    }) 
]);
const win = new Gtk.Window();
win.set_child(columnView);
win.connect('close-request', () => loop.quit());
win.present();

loop.run();

