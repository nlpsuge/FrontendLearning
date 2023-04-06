'use strict';

// cd dir_that_contains_this_file
// gjs -m gtk4-GtkColumnView-test.js


// some help to understand the model inside the GtkColumnView:
// https://toshiocp.github.io/Gtk4-tutorial/sec29.html
 

import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';
import Gtk from 'gi://Gtk?version=4.0';

Gtk.init();

var CloseWindowsWhitelist = class extends GObject.Object {
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
}

var GCloseWindowsWhitelist = GObject.registerClass(CloseWindowsWhitelist);

const file = Gio.File.new_for_path('gtk4-GtkColumnView-test.ui');
const [, template] = file.load_contents(null);

var AwsmCloseWhitelist = GObject.registerClass({
    GTypeName: 'AwsmCloseWhitelist',
    Template: template,
    Children: [
      'list'
    ],
}, class AwsmCloseWhitelist extends Gtk.Box {

    _init(params = {}) {
        super._init(params);

        this.model = new Gio.ListStore({ item_type: GCloseWindowsWhitelist });

        this.selectionModel = new Gtk.SingleSelection({ model: this.model });

        this.list.set_model(this.selectionModel);

        const closeWindowsWhitelist = GCloseWindowsWhitelist.new({
            id: 1,
            enabled: false,
            method: 'equals',
            enableWhenCloseWindows: false,
            enableWhenLogout: true,
        });
        this.model.append(closeWindowsWhitelist);
    }
    
    setup_column1_cb(factory, listItem) {
        log('setup_column1_cb ' + listItem)
        const item = listItem.get_item()
        // item is null
        log(item + '')
        const label = new Gtk.Label({
            // Align left
            xalign: 0.0
        });
        listItem.set_child(label);
        label.add_css_class("cell");
    }

    bind_column1_cb(factory, listItem) {
        log('bind_column1_cb ' + listItem)
        const label = listItem.get_child();
        // item is the GCloseWindowsWhitelist instance that is added into the model
        const item = listItem.get_item();
        log(item)
        // So we can get `enabled` value from `item` here
        const enabled = item.enabled
        log(enabled)
        label.set_label(enabled + '');
    }

    // TODO not working
    // Error building template for list item: .:0:0: A handler called getColumn2Factory was not defined on [object instance wrapper GIName:Gtk.ListItem jsobj@0xeee native@0xrrr]
    getColumn2Factory(listItem, data) {
        // log(factory)
        log(listItem)
        log(data)
        return data.method;
    }

    // setup_column2_cb(factory, listItem) {
    //     log('setup_column2_cb ' + listItem)
    // }

    // bind_column2_cb(factory, listItem) {
    //     log('bind_column2_cb ' + listItem)
    // }

    setup_column3_cb(factory, listItem) {
        const label = new Gtk.Label({
            // Align left
            xalign: 0.0
        });
        listItem.set_child(label);
        label.add_css_class("cell");
    }

    bind_column3_cb(factory, listItem) {
        log('bind_column3_cb ' + listItem)
        const label = listItem.get_child();
        const item = listItem.get_item();
        const enableWhenCloseWindows = item.enableWhenCloseWindows
        label.set_label(enableWhenCloseWindows + '');
    }

    setup_column4_cb(factory, listItem) {
        const switcher = new Gtk.Switch({halign: Gtk.Align.CENTER});
        listItem.set_child(switcher);
    }

    bind_column4_cb(factory, listItem) {
        const widget = listItem.get_child();
        const item = listItem.get_item();
        const enableWhenLogout = item.enableWhenLogout
        widget.set_active(enableWhenLogout);
    }

});

// Create a window that stops the program when it is closed
const loop = GLib.MainLoop.new(null, false);

const window = new Gtk.Window();
const whitelist = new AwsmCloseWhitelist();
window.set_child(whitelist);
window.connect('close-request', () => loop.quit());
window.present();

loop.run();

