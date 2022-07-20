#!/usr/bin/env gjs

// cd ./FrontendLearning/frontend-gnome/frontend-gtk/src/load-glade-ui-tests
// gjs awsm-prefs-gtk3.js

imports.gi.versions.Gtk = "3.0"
const { Gtk, GObject } = imports.gi;

const Prefs = GObject.registerClass(
    {
        GTypeName: 'AnotherWindowSessionManagerPrefs',
    },
    class Prefs extends GObject.Object {

        _init() {
            Gtk.init(null)

            this.load_ui();
        }

        load_ui() {
            log('Loading ui')
            this._builder = new Gtk.Builder();
            this._builder.add_from_file('./awsm-prefs-gtk3.ui');
            this.notebook = this._builder.get_object('prefs_notebook');
            
            this.window = new Gtk.Window();
            this.window.add(this.notebook);
            this.app = new Gtk.Application();
            this.app.connect('activate', () => {
                // https://docs.gtk.org/gtk3/method.Application.add_window.html
                this.app.add_window(this.window);
            });
            
            log('Loaded ui')
        }
    }
);


let prefs = new Prefs();
let window = prefs.window;
window.show_all();

Gtk.main()
