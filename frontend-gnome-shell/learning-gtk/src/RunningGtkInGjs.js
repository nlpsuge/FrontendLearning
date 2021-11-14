#!/usr/bin/env gjs

// https://gjs.guide/guides/gtk/3/04-running-gtk.html

// This tells GJS what version of the import we need.
imports.gi.versions.Gtk = "3.0";
// GTK+ is part of the gi (gobject-introspection) collection
const { Gtk } = imports.gi;

// Import System: https://gitlab.gnome.org/GNOME/gjs/blob/HEAD/examples/gtk-application.js:L5
// const System = imports.system;

// initialize GTK+. If GTK+ is not initialized your application will not run.
Gtk.init(null);

/* create a widget to demonstrate */

let window = new Gtk.Window();
window.set_title('world');
// add the widget to the window
let spinButton = new Gtk.SpinButton();
spinButton.set_range(1, 15);
spinButton.connect('value_changed', (data1) => {
    
    log('New value: ' + data1.get_value());
    
});
window.add(spinButton);
print("default", 'value', 'is', ": ", spinButton.get_value())

// Note that if you run the program outside of GDB, 
// it will abort at the breakpoint, so make sure to remove the breakpoint when you're done debugging.
// System.breakpoint();

// win.add(new Gtk.Button());
// make both the window and the widget visible to the user
window.show_all();

// call Gtk.main() to start the event loop
Gtk.main();
