# Testing under `gjs-console`  
``` Shell
gjs-console
```

# Doc
https://valadoc.org/clutter-1.0/Clutter.html

https://gjs-docs.gnome.org/clutter10~1.26.4 (Too simple)

# Clutter.AlignConstraint.set_factor(float)
https://valadoc.org/clutter-1.0/Clutter.AlignConstraint.set_factor.html

The factor depends on the align_axis property and it is a value between 0.0
 (meaning left, when align_axis is set to X_AXIS; or meaning top, when align_axis is set to Y_AXIS)
 and 1.0 (meaning right, when align_axis is set to X_AXIS; or meaning bottom,
 when align_axis is set to Y_AXIS). A value of 0.5 aligns in the middle in either cases

# Testing AlignConstraint
https://www.roojs.com/seed/gir-1.2-gtk-3.0/seed/Clutter.Constraint.html

https://www.roojs.com/seed/gir-1.2-gtk-3.0/seed/Clutter.AlignConstraint.html
``` js
const { Clutter, Graphene } = imports.gi;
const windowContainer = new Clutter.Actor();
const ca = new Clutter.AlignConstraint({
    source: windowContainer,
    align_axis: Clutter.AlignAxis.Y_AXIS,
    factor: 0.5,
})
print(ca)
print(ca.name)
for (cap in ca) {
    print(cap)
    // print(cap + " -> " + ca[cap])
}
// 1
print(ca.align_axis)
// 0.5
print(ca.factor)
// 1
ca.set_factor(1)
// true
print(ca instanceof Clutter.AlignConstraint)

print(ca.source)
// true
print(ca.source instanceof Clutter.Actor)
```

# Testing Clutter.BindConstraint
https://valadoc.org/clutter-1.0/Clutter.BindConstraint.html

https://valadoc.org/clutter-1.0/Clutter.BindCoordinate.html

```
const { Clutter, Graphene } = imports.gi;
const windowContainer = new Clutter.Actor();
const ca = new Clutter.BindConstraint({
    source: windowContainer,
    coordinate: Clutter.BindCoordinate.Y,
    offset: 30,
})
print(ca)
print(ca.offset)
print(ca.coordinate)
ca.set_offset(1)
print(ca.offset)

```

# Clutter.AlignAxis.Y_AXIS and Clutter.AlignAxis.X_AXIS
```
const { Clutter } = imports.gi;
// 1
print(Clutter.AlignAxis.Y_AXIS)
// 0
print(Clutter.AlignAxis.X_AXIS)
```

# TODO Clutter.Actor.add_child
https://valadoc.org/clutter-1.0/Clutter.Actor.add_child.html

Adds a child to the children of this.

# Clutter.Actor.add_constraint
https://valadoc.org/clutter-1.0/Clutter.Actor.add_constraint.html

# Clutter.Actor.remove_constraint
https://valadoc.org/clutter-1.0/Clutter.Actor.remove_constraint.html

The reference held by this on the Constraint will be released

# [Clutter.Actor.realized property](https://gjs-docs.gnome.org/clutter10~1.26.4/clutter.actor#property-realized)
[Gtk.Widget.realize](https://people.gnome.org/~johnp/girdocsalpha/Gtk/Gtk.Widget.realize.html)

Creates the GDK (windowing system) resources associated with a widget. 
For example, @widget->window will be created when a widget is realized. 
Normally realization happens implicitly; if you show a widget and all its 
parent containers, then the widget will be realized and mapped automatically. 
Realizing a widget requires all the widget's parent widgets to be realized; 
calling gtk_widget_realize() realizes the widget's parents in addition 
to when you realize it, bad things will happen. This function is primarily 
used in widget implementations, and isn't very useful otherwise. 
Many times when you think you might need it, a better approach is to 
connect to a signal that will be called after the widget is realized 
automatically, such as [GtkWidget::draw](https://people.gnome.org/~johnp/girdocsalpha/Gtk/Gtk.Widget.realize.html "GtkWidget::draw"). 
Or **simply g_signal_connect () to the [GtkWidget::realize](https://people.gnome.org/~johnp/girdocsalpha/Gtk/Gtk.Widget.realize.html "GtkWidget::realize") signal**.

