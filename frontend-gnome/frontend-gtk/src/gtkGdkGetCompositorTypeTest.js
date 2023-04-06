#!/usr/bin/env gjs
// gjs -d gtk-gdk-get-compositor-type.js # -d for debugging

// This tells GJS what version of the import we need.
imports.gi.versions.Gdk = "4.0";
imports.gi.versions.GdkX11 = "4.0";
imports.gi.versions.GdkWayland = "4.0";
imports.gi.versions.Gtk = "4.0";
const { Gtk, Gdk, GdkX11, GdkWayland, GLib } = imports.gi;

// initialize GTK+. If GTK+ is not initialized your application will not run.
Gtk.init();

let display = Gdk.Display.get_default();

// always true
print(display instanceof Gdk.Display);
// Only true on X11
print(display instanceof GdkX11.X11Display);
// Only true on Wayland
print(display instanceof GdkWayland.WaylandDisplay);

// On x11, GdkX11Display; On wayland, GdkWaylandDisplay.
print(display.constructor.$gtype.name);

// Only true on x11
print(display.constructor.$gtype.name === 'GdkX11Display');
// Only true on Wayland
print(display.constructor.$gtype.name === 'GdkWaylandDisplay');

// wayland / x11
const compositorType = GLib.getenv('XDG_SESSION_TYPE');
print(compositorType);