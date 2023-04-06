#!/usr/bin/env gjs

// gjs -d Gtk4Test.js

imports.gi.versions.Gtk = "4.0";
const { Gtk } = imports.gi;

Gtk.init();

const listBox = new Gtk.ListBox();
const row = new Gtk.ListBoxRow();
row.id = 1;
listBox.append(row);
const row2 = new Gtk.ListBoxRow();
listBox.append(row2);
row2.id = 2;
console.log(row.button_release_event);
for(const row of [...listBox]) {
    console.log(row.id);
}

const box = new Gtk.Box();
const label = new Gtk.Label({label: 'hello'});
box.append(label);
box.append(new Gtk.Label({label: 'hello1'}));
for(const row of [...box]) {
    console.log(row.label);
}

const boxArray = [...box];
log('get via index ' + boxArray.length);
for(let index = 0; index < boxArray.length; index++) {
    console.log(boxArray[index].label);
}
