# Testing under `gjs-console`  
``` Shell
gjs-console
```

# Doc
https://valadoc.org/clutter-1.0

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

Adds child to the children of this.

# 


