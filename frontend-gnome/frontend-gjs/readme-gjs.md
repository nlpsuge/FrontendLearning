# Doc
[gjs guide](https://gjs.guide/guides/)

[gjs](https://gitlab.gnome.org/GNOME/gjs)

[gjs docs](https://gjs-docs.gnome.org/gjs/)

[Language bindings based on GObject-Introspection](https://wiki.gnome.org/Projects/GObjectIntrospection/Users)

[GJS: Javascript Bindings for GNOME](https://gitlab.gnome.org/GNOME/gjs/blob/master/doc/Home.md)

[How do I get the monitor of an active window in GNOME?](https://stackoverflow.com/questions/50080430/how-do-i-get-the-monitor-of-an-active-window-in-gnome/50081217#50081217)

https://www.andyholmes.ca/

# Introduction
GNOME Javascript (GJS)

The current stable series is built on Mozilla's SpiderMonkey 78, featuring ECMAScript 2019 and GObject Introspection making most of the GNOME platform API available.

GJS includes some built-in modules like Cairo and Gettext, as well as helpers for some core APIs like DBus and GVariants. See the [Modules](https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/Modules.md) page for an overview of the built-in modules and their usage.

# How to import private components like gi.Shell, git.St in `gjs` or `gjs-console`
https://gist.github.com/buzztaiki/1492431

See: [shell_object_sample.js](#src/shell_object_sample.js)

# Imports and Modules
In GJS every file is treated as a "module" and any variable declared as using 'var' (or global scope) is exported. Each "module" is imported using the 'imports' object using the pattern imports.[fileName] where the file's literal name is fileName.js. If your fileName contains a character that is not a valid Javascript identifier you can access it using the object+key syntax: object['fileName'].

Modules are searched in paths defined in the array imports.searchPath. You can modify the value of imports.searchPath to include the directories where to look for modules before importing modules via imports, like:
``` js
imports.searchPath.push('/tmp/gnome-shell/js')
```

Any symbols to be exported from a module must be defined with 'var'.

## Modules
https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/Modules.md

# [Lang](https://gitlab.gnome.org/GNOME/gjs/blob/HEAD/modules/script/lang.js)
DEPRECATED

Lang.bind() was necessary to bind this to the function context **before** the availability of arrow functions


# TODO Develop GJS in vs code (don't work)
[gnome - Develop GJS in Visual Studio Code - Stack Overflow](https://stackoverflow.com/questions/63908574/develop-gjs-in-visual-studio-code)

There are a few TypeScript definitions available for GJS:

-   Evan Welsh's [gi.ts](https://gitlab.gnome.org/ewlsh/gi.ts)
-   sammydre's [ts-for-gjs](https://github.com/sammydre/ts-for-gjs)

The GNOME APIs are documented at [https://gjs-docs.gnome.org/](https://gjs-docs.gnome.org/). There is also usage documentation and examples in the GJS repository:

-   [GObject Usage](https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/Mapping.md)
-   [Bundled Modules](https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/Modules.md)
-   [Code Examples](https://gitlab.gnome.org/GNOME/gjs/-/tree/master/examples)


# GJS和GNOME Extension趟坑指南
https://segmentfault.com/a/1190000005916625

# Log
https://gjs.guide/guides/gjs/intro.html#logging

console is not defined in GJS, for basic logging use the built-in function log(message)

GJS includes four built-in logging functions: log(), logError(), print()
and printerr(). These functions are available globally (ie. without import)

print() takes any number of string (or coercible) arguments, joins them with a
space and appends a newline (\n). The resulting message will be printed
directly to stdout of the current process

```
$ gjs 
gjs > print('some', 'string', 42); 
some string 42
$ gjs > printerr('some text 42');
some text
```

# How to debug?

## Method 1 (not recommended personally): System.breakpoint()
***I personally not recommend using this method to debug, due to:***
- Have to import `System`
- And have to delete `System.breakpoint()` after debug
- Issue of `<optimized out>` in GDB

[doc/Modules.md](https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/Modules.md)

Put `System.breakpoint()` in your code and run it under GDB like so:
```sh
gdb --args gjs my_program.js
```

When GJS reaches the breakpoint, it will stop executing and return you to the GDB prompt, where you can examine the stack or other things, or type `cont` to continue running. Note that if you run the program outside of GDB, it will abort at the breakpoint, so make sure to remove the breakpoint when you're done debugging.


### TODO How to get rid of <optimized out> in GDB?
``` Bash
(gdb) p v
$1 = <optimized out>
```
https://stackoverflow.com/questions/56824992/cant-get-rid-of-value-has-been-optimized-out-in-gdb
http://aarch64.me/2016/02/how-to-print-optimized-out-value-in-gdb/
https://undo.io/resources/value-optimized-out-reverse-debugging-rescue/

## Method 2 (recommended personally): `gjs -d` (`-d` means run gjs in a debugger mode, see `gjs --help`)
[JavaScript Debugging](https://wiki.gnome.org/Projects/GnomeShell/DebuggingJavaScript)

`-d` only available in gjs >= 1.53.90

Run GJS in a debugger mode:
``` Bash
gjs -d RunningGtkInGjs.js
GJS debugger. Type "help" for help
db>


Register a new breakpoint at line 28:
``` Bash
db> break 28
```

Press 'c' to allow the application to continue in order to reach the registered breakpoint:
``` Bash
db> c
```

Evaluate code using `print` or `p`:
``` Bash
db> print spinButton.value
```

Change the value of a widget and press 'c' to see the change:
``` Bash
db> p window.set_title('hello')
```

## TODO [jsrdb](https://github.com/swojtasiak/jsrdbg)
[JavaScript Debugging](https://wiki.gnome.org/Projects/GnomeShell/DebuggingJavaScript)


# Extends / Subclassing
[Extending GObject Classes](https://gjs.guide/guides/gjs/intro.html#extending-gobject-classes)

[GObject Subclassing](https://gjs.guide/guides/gobject/subclassing.html#contents)

Subclassing is a convenient way to extend most GObject classes, allowing you to define additional methods, properties and signals.

Every class of GObject has a **globally unique GType** and so each subclass must be registered using the GObject.registerClass() function.

# [Signal](https://gjs.guide/guides/gobject/subclassing.html#signals)
GObjects support a signaling system, similar to events and EventListeners in the JavaScript Web API.

Signals are connected by calling the connect() method, which returns a handler ID that is always truthy. 
Signals are disconnected by passing that ID to disconnect().

## notify::property-name

all GObjects have a notify [Object::signal](https://gjs-docs.gnome.org/gobject20/gobject.object#signal-notify)
 that may be emitted **when a property changes.**
Usage:
``` c
g_signal_connect (text_view->buffer, "notify::paste-target-list",
                  G_CALLBACK (gtk_text_view_target_list_notify),
                  text_view)
``

# [Shell.Global](https://gjs-docs.gnome.org/shell01~0.1/shell.global)

## Shell.Global.get()
Gets the singleton global object that represents the desktop.

## Shell.Global.get_current_time()
Gets the singleton global object that represents the desktop.

(Number) — the current X server time from the current Clutter, Gdk, or X
event. 

# Subprocess - running command in the background
https://gjs.guide/guides/gio/subprocesses.html#gsubprocess

# TODO [Asynchronous Programming in GJS | Andy Holmes](https://www.andyholmes.ca/articles/asynchronous-programming-in-gjs.html)

