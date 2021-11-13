//****
//**** This file was copied from from https://gist.github.com/buzztaiki/1492431
//**** Thank you :)
//****

// LD_LIBRARY_PATH=/usr/lib64/gnome-shell/ gjs shell_object_sample.js

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
print(appSys.get_installed().map(x => x.get_name()).join('\n'));

