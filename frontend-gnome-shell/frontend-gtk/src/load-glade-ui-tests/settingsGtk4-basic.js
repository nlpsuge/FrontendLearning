#!/usr/bin/env gjs

// gjs settingsGtk4.js

imports.gi.versions.Gtk = "4.0"
const { Gtk, GObject, Gio } = imports.gi;

const Settings = GObject.registerClass(
    {
        GTypeName: 'AlwaysShowTitlesInOverviewSettings',
    },
    class Settings extends GObject.Object {
        _init() {
            // Fix: _gtk_style_provider_private_get_settings: assertion 'GTK_IS_STYLE_PROVIDER_PRIVATE (provider)' failed
            Gtk.init()
            this.load_ui();
        }

        load_ui() {
            log('Loading ui')
            this._builder = new Gtk.Builder();
            this._builder.add_from_file('./SettingsGtk4.ui');
            this.notebook = this._builder.get_object('settings_notebook');
            log('Loaded ui')
        }

        run_ui() {
            this.app = new Gtk.Application({
                application_id: "com.example.hi"
            });
            this.app.connect('activate', () => {
                this.win = new Gtk.Window();
                this.win.set_title('Settings');
                
                // Set the notebook widget to the window widget
                this.win.set_child(this.notebook);
                
                // Show the window widget
                // https://docs.gtk.org/gtk4/vfunc.Widget.show.html
                this.win.show();

                // https://gitlab.gnome.org/GNOME/gtk/-/blob/master/demos/gtk-demo/main.c#L907
                // https://docs.w3cub.com/gtk~4.0/gtkapplication#gtk-application-add-window
                // Adds a window to application
                // This call can only happen after the application has started; 
                // typically, you should add new application windows in response to the emission of the “activate” signal.
                this.app.add_window(this.win);
            });
            const status = this.app.run([]);
            print("Exit code: ", status);
        }

        
        
    }
);

const settings = new Settings();
settings.run_ui();
