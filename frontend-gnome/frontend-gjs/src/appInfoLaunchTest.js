#!/usr/bin/env gjs

// gjs appInfoLaunchTest.js

// not working, use Shell.App#launch() instead

const {Gio} = imports.gi

const desktop_file_id = 'gnome-system-monitor.desktop';
const app_info = Gio.DesktopAppInfo.new(desktop_file_id);

// not working
// app_info.launch(null, null);

// not working
app_info.launch_uris_async([], null, null, null);



