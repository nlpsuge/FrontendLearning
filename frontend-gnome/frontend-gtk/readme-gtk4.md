# Doc
https://docs.gtk.org/gtk4/index.html

https://gjs.guide/guides/gtk/3/01-basics.html#what-is-gtk

https://docs.w3cub.com/gtk~4.0/

[Building a GTK+ Application](https://gjs.guide/guides/gtk/3/10-building-app.html#using-gtk-application)

[Setting Up Your Application Development Environment - Using GNOME Builder](https://gjs.guide/guides/gtk/3/12-app-dev.html#using-gnome-builder)

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

# Convert GTK3 to GTK4
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

# GtkBuilderScope
https://docs.w3cub.com/gtk~4.0/gtkbuilderscope

GtkBuilderScope is an interface to provide support to GtkBuilder, primarily for looking up programming-language-specific values for strings that are given in a GtkBuilder UI file.

# Gio.Settings
The GSettings class provides a convenient API for storing and retrieving application settings.

When creating a GSettings instance, you have to specify a **schema** that describes the keys in your settings and their types and default values, as well as some other information.

Schema paths **must start with and end with a forward slash character (‘/’)** and **must not contain two sequential slash** characters.

GSettings will use gettext to look up translations for the
and elements, and also any elements which have a l10n attribute set.

## Gio.Settings binding
https://docs.gtk.org/gio/method.Settings.bind.html

Once a GObject property has been bound to a setting, changes on either side are automatically propagated to the other side.

``` c
void
g_settings_bind (
  GSettings* settings,
  const gchar* key,
  GObject* object,
  const gchar* property,
  GSettingsBindFlags flags
)
```
Create a binding between the `key` in the `settings` object and the property `property` of object.



Note that the lifecycle of the binding is tied to object, and that you can have only one binding per object property. If you bind the same property twice on the same object, the second binding overrides the first one.

# GtkTreeView

## How to hide a GtkTreeViewColumn in a GtkTreeView?

* [Use col.set_visible(FALSE) where col is a Gtk.TreeViewColumn().](https://pygtk.daa.com.narkive.com/CVYaqPZX/hide-a-column-in-a-treeview)
* Click the GtkTreeViewColumn item in the Glade and toggle the `Visible` in the `Common tab`.

## [CellRendererButton: Have a clickable button in a TreeView column](https://discourse.gnome.org/t/cellrendererbutton-have-a-clickable-button-in-a-treeview-column/2103)

TreeView columns are made of cell renderers, and **cell renderers are not widgets by design**—and only widgets can deal with events like button press/release, and enter/leave events. So, the short answer is: you cannot put a GtkButton into a GtkTreeView.

To use a GtkListBox widget instead is an alternative.





