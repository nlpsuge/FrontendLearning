# Doc
[How to Create A GNOME Extension](https://www.codeproject.com/Articles/5271677/How-to-Create-A-GNOME-Extension)

# [How to port Extensions to GNOME Shell 40](https://gjs.guide/extensions/upgrading/gnome-shell-40.html#contents)



# Open Prefs Dialog from Terminal
``` Bash
gnome-extensions prefs uuid-of-example@example.com
```
You can use it to open the References of an extention as soon as possible, without any click.

# [Logging](https://gjs.guide/extensions/development/debugging.html#logging)

``` JS
// Log a string, usually to `journalctl`
log('a message');

// Log an Error() with a stack trace and optional prefix
try {
    throw new Error('An error occurred');
} catch (e) {
    logError(e, 'ExtensionError');
}

// Print a message to stdout
print('a message');

// Print a message to stderr
printerr('An error occured');
```