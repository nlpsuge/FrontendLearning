#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

function load_ui() {
    console.log('hi')
    this._builder = new Gtk.Builder();
    
    
}

load_ui()
