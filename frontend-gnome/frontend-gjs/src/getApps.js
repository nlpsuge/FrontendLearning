#!/usr/bin/gjs
// Copied from a comment of https://gist.github.com/buzztaiki/1492431
// It works on Gnome 42.2 and 42.3

// chmod +x ./shell_object_sample.js && ./shell_object_sample.js

const res = imports.gi.GIRepository.Repository

// load library of Mutter project 
res.prepend_search_path('/usr/lib/mutter-10')
res.prepend_library_path('/usr/lib/mutter-10')
// And make it work on Gnome 42.2
res.prepend_search_path('/usr/lib64/mutter-10')
res.prepend_library_path('/usr/lib64/mutter-10')

// load library of gnome-shell project
res.prepend_search_path('/usr/lib/gnome-shell')
res.prepend_library_path('/usr/lib/gnome-shell')
// And make it work on Gnome 42.2
res.prepend_search_path('/usr/lib64/gnome-shell')
res.prepend_library_path('/usr/lib64/gnome-shell')

const Shell = imports.gi.Shell;
const appSys = Shell.AppSystem.get_default();
print(appSys.get_installed().map(x => x.get_name()).join('\n'));

