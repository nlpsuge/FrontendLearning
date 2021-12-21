#!/usr/bin/env gjs

// gjs gioListDirectory.js

// Debug
// gjs -d gioListDirectory.js

const { Gio, GLib } = imports.gi;

const path = '/tmp/test'
const test_path = GLib.build_filenamev([path]);

function listPath(test_path, callback) {
    if (!GLib.file_test(test_path, GLib.FileTest.EXISTS)) {
        log(`${test_path} not exist`);
        return;
    }

    log(`Looking up path: ${test_path}`);
    const test_path_file = Gio.File.new_for_path(test_path);
    let fileEnumerator;
    try {
        fileEnumerator = test_path_file.enumerate_children(
            [Gio.FILE_ATTRIBUTE_STANDARD_NAME, Gio.FILE_ATTRIBUTE_STANDARD_TYPE].join(','),
            Gio.FileQueryInfoFlags.NONE,
            null);
    } catch(e) {
        logError(e,`Failed to list directory ${test_path}`);
        fileEnumerator = null;
    }

    if (fileEnumerator != null) {
        let empty = true;
        let info;
        while ((info = fileEnumerator.next_file(null))) {
            empty = false;
            // {} Empty
            // log(JSON.stringify(info));
            n
            log(fileName);
            // a new Gio.File which refers to the file named by info in the source directory of this
            const file = fileEnumerator.get_child(info);
            log(`path: ${file.get_path()}`);
            const fileType = info.get_file_type();
            log(fileType);
            const fileSize = info.get_size();
            log(fileSize);
            const isHidden = info.get_is_hidden();
            log(isHidden);

            // https://gjs-docs.gnome.org/gio20~2.66p/gio.filetype
            if (fileType === Gio.FileType.DIRECTORY) {
                log(`${fileName} is a folder, checking`);
                listPath(file.get_path(), callback);
            }

            if (callback) {
                callback(file, info);
            }
            
        }

        if (empty) {
            log(`Folder ${test_path} is empty`);
        }
    }
    
}

// listPath(test_path);

function callback(file, info) {
    const fileType = info.get_file_type();
    const msg = fileType === Gio.FileType.REGULAR ? 'a regular file' : 'not a regular file';
    log(`callback: ${file.get_path()} is ${msg}`);
}

listPath(test_path, callback);