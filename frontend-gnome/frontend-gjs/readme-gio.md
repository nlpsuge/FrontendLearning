# Doc
https://gjs-docs.gnome.org/gio20~2.66p/

https://valadoc.org/gio-2.0/index.htm

# [Gio.DesktopAppInfo](https://lazka.github.io/pgi-docs/Gio-2.0/structs/DesktopAppInfo.html#Gio.DesktopAppInfo.set_desktop_env)

## get_categories()

[Main Categories](https://specifications.freedesktop.org/menu-spec/latest/apa.html#main-category-registry)
[Additional Categories](https://specifications.freedesktop.org/menu-spec/latest/apas02.html)


# List files in directory
[File.enumerate_children()](https://gjs-docs.gnome.org/gio20~2.66p/gio.file#method-enumerate_children)

See: [gioListDirectory.js](src/gioListDirectory.js)
See: [gnome shell - misc/fileUtils.js](https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/misc/fileUtils.js)

# file && file info

```js
const { Gio } = imports.gi;
const file = Gio.File.new_for_path('/tmp/test-file');
const fileInfo = file.query_info([Gio.FILE_ATTRIBUTE_STANDARD_NAME, 
                Gio.FILE_ATTRIBUTE_STANDARD_TYPE, 
                Gio.FILE_ATTRIBUTE_TIME_MODIFIED,
                Gio.FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE].join(','),
            Gio.FileQueryInfoFlags.NONE,
            null);
// test-file 
log(fileInfo.get_name());
log(file.get_path());
const content_type = fileInfo.get_content_type();
// text/plain or application/octet-stream
log(content_type);

```