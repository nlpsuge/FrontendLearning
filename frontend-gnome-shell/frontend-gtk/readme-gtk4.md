# Doc
https://docs.gtk.org/gtk4
https://gjs.guide/guides/gtk/3/01-basics.html#what-is-gtk

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

Note that Glade doesn't support GTK4.

`gtk4-builder-tool` can perform various operations on GtkBuilder UI definition
files.

``` Bash
# Find one in OS, flatpak may provide this file
locate gtk4-builder-tool
gtk4-builder-tool simplify --3to4 --replace Settings.ui
```

## 