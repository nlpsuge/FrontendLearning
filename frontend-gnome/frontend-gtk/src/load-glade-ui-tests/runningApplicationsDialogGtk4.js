#!/usr/bin/env gjs

// gjs runningApplicationsDialogGtk4.js


imports.gi.versions.Gtk = "4.0"
const { Gtk, GObject, Gio } = imports.gi;

var RunningApplicationsWindow = GObject.registerClass({
    GTypeName: 'RunningApplicationsWindow'
},
class RunningApplicationsWindow extends GObject.Object {
    _init() {
        // super._init({
            // use_header_bar: true,
            // title: 'Please close running apps before proceeding'
        // });
        // this.use_header_bar = true;
    }


    run() {
        this.app = new Gtk.Application({
            application_id: "com.gmail.gnome-shell-extension.awsm"
        });
        this.app.connect('activate', () => {
            this.win = new Gtk.Window({});
            this.win.set_title('Running applications');
            // `Gtk.Window.set_skip_taskbar_hint` has been removed in gtk4 
            // and `skip_taskbar_hint` is part of X.Org, so it won't work on Wayland.
            // log(this.win.set_skip_taskbar_hint);
            // this.win.set_property('skip-taskbar-hint', true)

            // Set the notebook widget to the window widget
            const dialog = new Gtk.Dialog({
                use_header_bar: true,
                title: 'Please close running apps before proceeding'
            });
            this.win.set_child(dialog);
            
            // Show the window widget
            // https://docs.gtk.org/gtk4/vfunc.Widget.show.html
            this.win.show();

            // https://gitlab.gnome.org/GNOME/gtk/-/blob/master/demos/gtk-demo/main.c#L907
            // https://docs.w3cub.com/gtk~4.0/gtkapplication#gtk-application-add-window
            // Adds a window to application
            // This call can only happen after the application has started; 
            // typically, you should add new application windows in response to the emission of the “activate” signal.
            this.app.add_window(this.win);

            
            layout_manager: new Gtk.BoxLayout({ homogeneous: true })

        });
        this.app.connect('shutdown', () => {
            log('Shutting down...');
        });
        const status = this.app.run([]);
        print("Exit code: ", status);
    }
});

const w = new RunningApplicationsWindow();
w.run();
// w.show();