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
            this.notebook.show_all();
            this.viewport = new Gtk.Viewport();
            this.viewport.add(this.notebook);
            this.widget = new Gtk.ScrolledWindow();
            this.widget.add(this.viewport);
            log('Loaded ui')
        }
    }
);


let settings = new Settings();
let widget = settings.widget;
widget.show_all();

Gtk.main()
