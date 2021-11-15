#!/usr/bin/env gjs

imports.gi.versions.Gtk = "3.0"
const { Gtk, GObject } = imports.gi;

const Settings = GObject.registerClass(
    {
        GTypeName: 'AlwaysShowTitlesInOverviewSettings',
    },
    class Settings extends GObject.Object {
        _init() {
            // Fix: _gtk_style_provider_private_get_settings: assertion 'GTK_IS_STYLE_PROVIDER_PRIVATE (provider)' failed
            Gtk.init(null)

            this.load_ui();
        }

        load_ui() {
            log('Loading ui')
            this._builder = new Gtk.Builder();
            this._builder.add_from_file('./SettingsGtk3.ui');
            this.notebook = this._builder.get_object('settings_notebook');
            
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


let settings = new Settings();
let window = settings.window;
window.show_all();

Gtk.main()
