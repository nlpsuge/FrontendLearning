# Doc
https://docs.gtk.org/gtk4/index.html

https://gjs.guide/guides/gtk/3/01-basics.html#what-is-gtk

https://docs.w3cub.com/gtk~4.0/

# Getting started with GTK
[Getting started with GTK](https://docs.gtk.org/gtk4/getting_started.html)

GTK is a [widget toolkit](http://en.wikipedia.org/wiki/Widget_toolkit). Each user interface created by GTK consists of widgets. This is implemented in C using [`GObject`](https://docs.gtk.org/gobject/class.Object.html), an object-oriented framework for C. Widgets are organized in a hierarchy. The window widget is the main container. The user interface is then built by adding buttons, drop-down menus, input fields, and other widgets to the window. If you are creating complex user interfaces it is recommended to use GtkBuilder and its GTK\-specific markup description language, instead of assembling the interface manually. You can also use a visual user interface editor, like [Glade](https://glade.gnome.org/).


GTK is event-driven. The toolkit listens for events such as a click on a button, and passes the event to your application.

## 

# [Migrating from GTK 3.x to GTK 4](https://docs.gtk.org/gtk4/migrating-3to4.html)

## GTK 4 removes the gtk_main_* family of APIs. 
replacement:
Gio.Application.

## Stop passing commandline arguments to gtk_init
The gtk_init() and gtk_init_check() functions no longer accept commandline arguments.



# What is GTK+?
GTK+ is a powerful, event-driven GUI toolkit comprised of numerous widgets and utilities.

# SpinButton
https://docs.gtk.org/gtk4/class.SpinButton.html

## gtk_spin_button_set_range
https://docs.gtk.org/gtk4/method.SpinButton.set_range.html
Sets the minimum and maximum allowable values for spin_button.

## set step: gtk_spin_button_set_increments
https://docs.gtk.org/gtk4/method.SpinButton.set_increments.html
Sets the step and page increments for spin_button.

# What is a widget?
A widget is a piece or part of your application which the user interacts with. Examples of widgets include buttons, labels, and images.

## Signals
https://gjs.guide/guides/gtk/3/02-widgets.html#signals

## Convert GTK3 to GTK4
[gtk4-builder-tool](https://gitlab.gnome.org/GNOME/gtk/-/blob/master/docs/reference/gtk/gtk4-builder-tool.rst)

[gtk4-builder-tool - man - w3cub](https://docs.w3cub.com/gtk~4.0/gtk4-builder-tool)

Note that Glade doesn't support GTK4.

`gtk4-builder-tool` can perform various operations on GtkBuilder UI definition
files.

``` Bash
# Find one in OS, flatpak may provide this file
locate gtk4-builder-tool
gtk4-builder-tool simplify --3to4 --replace Settings.ui
```

## 