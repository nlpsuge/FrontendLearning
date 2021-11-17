// LD_LIBRARY_PATH=/usr/lib64/gnome-shell/ gjs import_gnome_shell_ui_sample.js

const GIRepository = imports.gi.GIRepository;
const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;

function findLib(path, prefix) {
    const libdir = Gio.File.new_for_path(path);
    const files = libdir.enumerate_children('', Gio.FileQueryInfoFlags.NONE, null);
    for (;;) {
        const finfo = files.next_file(null);
        if (!finfo) break;
        if (finfo.get_file_type() == Gio.FileType.DIRECTORY && finfo.get_name().startsWith(prefix)) {
            return GLib.build_filenamev([path, finfo.get_name()]);
        }
    }
    return null;
}

GIRepository.Repository.prepend_search_path('/usr/lib64/gnome-shell');


GIRepository.Repository.prepend_search_path(findLib('/usr/lib64', 'mutter-'));

const Shell = imports.gi.Shell;
const appSys = Shell.AppSystem.get_default();

const { Clutter, St } = imports.gi;


// Note that replace the `somewhere` to your path
imports.searchPath.push('{somewhere}/gnome-shell/builddir/js')
imports.searchPath.push('{somewhere}/gnome/gnome-shell/js')

print(imports.searchPath)

// imports.searchPath('{somewhere}/gnome/gnome-shell');

imports.ui.environment.init();

const global = Shell.Global.get();

// TODO null
print(global)

print(Shell.Global)
print(globalThis)
print(globalThis.global)
print(global.get_current_time())


function _isOverviewWindow(window) {
    return !window.skip_taskbar;
}


const windows = global.get_window_actors().map(a => a.meta_window)
    .filter(this._isMyWindow, this);

for (let i = 0; i < windows.length; i++) {
    if (this._isOverviewWindow(windows[i]))
        print(windows[i]);
}