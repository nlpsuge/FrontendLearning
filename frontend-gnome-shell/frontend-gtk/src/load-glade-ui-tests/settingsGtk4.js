#!/usr/bin/env gjs

// gjs settingsGtk4.js

imports.gi.versions.Gtk = "4.0"
const { Gtk, GObject, Gio } = imports.gi;
const Lang = imports.lang;

const DEFAULT_APP_ICON_POSITION = 'Bottom';
const DEFAULT_DO_NOT_SHOW_APP_ICON_WHEN_FULLSCREEN = true;
const DEFAULT_WINDOW_ACTIVE_SIZE_INC_RANGE = [5, 10, 15, 20];

const Settings = GObject.registerClass(
    {
        GTypeName: 'AlwaysShowTitlesInOverviewSettings',
    },
    class Settings extends GObject.Object {
        _init() {
            // Fix: _gtk_style_provider_private_get_settings: assertion 'GTK_IS_STYLE_PROVIDER_PRIVATE (provider)' failed
            Gtk.init()
            this.render_ui();
        }

        render_ui() {
            log('Rendering ui')
            this._builder = new Gtk.Builder();
            this._builder.set_scope(new BuilderScope(this));
            this._builder.add_from_file('./SettingsGtk4.ui');
            this.notebook = this._builder.get_object('settings_notebook');
            
            this._builder.get_object('multimon_multi_switch').connect('notify::active', Lang.bind (this, function(widget) {
                log('switch activate via `Lang.bind (this, function(widget) {}`: ' + widget);

            }));

            this._builder.get_object('multimon_multi_switch').connect('notify::active', (widget) => {
                log('switch activate via lambda: ' + widget);

            });

            let window_active_size_inc_scale = this._builder.get_object('window_active_size_inc_scale');
            this.window_active_size_inc_scale = window_active_size_inc_scale;
            window_active_size_inc_scale.set_format_value_func((scale, value) => {
                return value + ' px';
            });

            // Or

            // window_active_size_inc_scale.set_format_value_func(Lang.bind(this, function(scale, value) {
            //     return value + ' px';
            // }));
            let min = DEFAULT_WINDOW_ACTIVE_SIZE_INC_RANGE[0];
            let max = DEFAULT_WINDOW_ACTIVE_SIZE_INC_RANGE[DEFAULT_WINDOW_ACTIVE_SIZE_INC_RANGE.length - 1];
            window_active_size_inc_scale.set_range(min, max);
            window_active_size_inc_scale.set_value(10);
            DEFAULT_WINDOW_ACTIVE_SIZE_INC_RANGE.slice().forEach(num => {
                window_active_size_inc_scale.add_mark(num, Gtk.PositionType.TOP, num.toString());
            })

        }

        run() {
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
            this.app.connect('shutdown', () => {
                log('Shutting down...');
                // unset format_value_func to fix: Attempting to run a JS callback during shutdown / garbage collection
                // https://github.com/purescript-gjs/purescript-gjs/blob/57a7a078895cb1cab6ca57eff6c33c6940ab8380/src/Gtk4/Scale.purs#L24
                this.window_active_size_inc_scale.set_format_value_func(null);
            });
            const status = this.app.run([]);
            print("Exit code: ", status);
        }

        
        
    }
);

const BuilderScope = GObject.registerClass({
    Implements: [Gtk.BuilderScope],
}, class BuilderScope extends GObject.Object {
    _init(preferences) {
        this._preferences = preferences;
        super._init();
    }

    // Fix: Gtk.BuilderError: Creating closures is not supported by Gjs_BuilderScope
    // https://docs.w3cub.com/gtk~4.0/gtkbuilder#gtk-builder-create-closure
    vfunc_create_closure(builder, handlerName, flags, connectObject) {
        if (flags & Gtk.BuilderClosureFlags.SWAPPED)
            throw new Error('Unsupported template signal flag "swapped"');
        
        if (typeof this[handlerName] === 'undefined')
            throw new Error(`${handlerName} is undefined`);
        
        return this[handlerName].bind(connectObject || this);
    }

    position_bottom_button_clicked_cb(button) {
        log('bottom button clicked: ' + button.get_active());

    }

    position_middle_button_clicked_cb(button) {
        log('middle button clicked: ' + button.get_active());

    }
});

const settings = new Settings();
settings.run();
