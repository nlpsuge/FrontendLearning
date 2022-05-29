#!/usr/bin/env gjs
// gjs -d RunningGtkInGjs.js # -d for debugging
// Not working

// This tells GJS what version of the import we need.
imports.gi.versions.Gdk = "4.0";
imports.gi.versions.Gtk = "4.0";
const { Gtk, Gdk } = imports.gi;

// initialize GTK+. If GTK+ is not initialized your application will not run.
Gtk.init();

s = Gdk.Screen.get_default();
print(s.get_width(), s.get_height())


let display = Gdk.Display.get_default();
let pm = display.get_monitors().get_item(0);
let geo = pm.get_geometry();

print(geo);