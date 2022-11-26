const { Gio, GLib } = imports.gi;

/**
 * Remove files. And also remove its parent if it's empty.
 * 
 * @param {String} path         The path of a file or a directory
 */
 function removeFileAndParent(path) {
    if (!GLib.file_test(path, GLib.FileTest.EXISTS)) {
        throw new Error(`Cannot remove '${path}': No such file or directory`);
    }

    const file = Gio.File.new_for_path(path);
    try {
        const info = file.query_info(
            [Gio.FILE_ATTRIBUTE_STANDARD_TYPE].join(','),
            Gio.FileQueryInfoFlags.NONE,
            null);

        const fileType = info.get_file_type();
        const isDir = fileType === Gio.FileType.DIRECTORY;
        
        file.delete(null);
        log(`Removed ${isDir ? 'directory' : ''} ${path}`);

        const parent = file.get_parent();
        if (parent && isEmpty(parent)) {
            parent.delete(null);
            log(`Removed directory ${parent.get_path()}`);
        }
    
    } catch (e) {
        logError(e);
    }
}

function isEmpty(directory) {
    const fileEnumerator = directory.enumerate_children(
        [Gio.FILE_ATTRIBUTE_STANDARD_NAME,
        Gio.FILE_ATTRIBUTE_STANDARD_TYPE].join(','),
        Gio.FileQueryInfoFlags.NONE, 
        null);
    return !fileEnumerator.next_file(null);
}

/**
 * Remove files or directories
 * 
 * @param {String} path         The path of a file or a directory
 * @param {Boolean} recursively true if remove all files or directories in `path`
 */
 function removeFile(path, recursively = false) {
    if (!GLib.file_test(path, GLib.FileTest.EXISTS)) {
        throw new Error(`Cannot remove '${path}': No such file or directory`);
    }

    const file = Gio.File.new_for_path(path);
    try {
        const info = file.query_info(
            [Gio.FILE_ATTRIBUTE_STANDARD_TYPE].join(','),
            Gio.FileQueryInfoFlags.NONE,
            null);

        const fileType = info.get_file_type();
        if (fileType === Gio.FileType.DIRECTORY) {
            if (!recursively) {
                throw new Error(`Cannot remove '${path}': Is a directory`);
            }
            const fileEnumerator = file.enumerate_children(
                [Gio.FILE_ATTRIBUTE_STANDARD_NAME,
                Gio.FILE_ATTRIBUTE_STANDARD_TYPE].join(','),
                Gio.FileQueryInfoFlags.NONE, 
                null);
            
            let fileInfo = null;
            while (fileInfo = fileEnumerator.next_file(null)) {
                const childFile = fileEnumerator.get_child(fileInfo);
                if (info.get_file_type() === Gio.FileType.DIRECTORY) {
                    removeFile(childFile.get_path(), recursively);
                }
            }

            file.delete(null);
            log(`Removed directory ${path}`);
        } else {
            file.delete(null);
            log(`Removed ${path}`);
        }
    } catch (e) {
        logError(e);
    }
}

removeFileAndParent('/tmp/test/sdsd');
