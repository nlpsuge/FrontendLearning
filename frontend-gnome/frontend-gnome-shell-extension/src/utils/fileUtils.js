#!/usr/bin/env gjs

const { Gio, GLib } = imports.gi


async function listAllSessions(sessionPath, recursion, callback) {

    if (!GLib.file_test(sessionPath, GLib.FileTest.EXISTS)) {
        console.error(`${sessionPath} not exist`);
        return;
    }

    console.log(`Scanning ${sessionPath}`);

    const sessionPathFile = Gio.File.new_for_path(sessionPath);
    sessionPathFile.enumerate_children_async(
        [Gio.FILE_ATTRIBUTE_STANDARD_NAME,
        Gio.FILE_ATTRIBUTE_STANDARD_TYPE,
        Gio.FILE_ATTRIBUTE_TIME_MODIFIED,
        Gio.FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE].join(','),
        Gio.FileQueryInfoFlags.NONE,
        GLib.PRIORITY_DEFAULT,
        null,
        (file, asyncResult) => {
            try {
                console.log('file ' + file);
                const fileEnumerator = file.enumerate_children_finish(asyncResult);
                const nextFilesFunc = () => {
                    fileEnumerator.next_files_async(
                        // num_files. Just set a random value, because I don't know which value is better yet
                        10,
                        GLib.PRIORITY_DEFAULT,
                        null,
                        (iter, asyncResult) => {
                            try {
                                const infos = iter.next_files_finish(asyncResult);
                                if (infos && infos.length > 0) {
                                    for (const info of infos) {
                                        const file = fileEnumerator.get_child(info);
                                        if (recursion && info.get_file_type() === Gio.FileType.DIRECTORY) {
                                            listAllSessions(file.get_path(), recursion, callback);
                                        } else if (callback) {
                                            callback(file, info);
                                        }
                                    }
                                }
                                nextFilesFunc();
                            } catch (e) {
                                console.error(e);
                            }
                        }
                    );
                };
                nextFilesFunc();
            } catch (e) {
                console.error(e, `Failed to list directory ${sessionPath}`);
            }
        });
}


const home_dir = GLib.get_home_dir();
const path = GLib.build_filenamev([home_dir, '.config/another-window-session-manager/sessions']);
console.log(path);
listAllSessions(path, true, (file, info) => {
    console.log(`Processing ${file.get_path()}`);
});

// let loop = GLib.MainLoop.new(null, false);
// loop.run();


