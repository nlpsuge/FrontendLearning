# Doc
https://gjs-docs.gnome.org/glib20~2.66.1

# Date

## DateTime
### Get unix timestamp
https://gjs-docs.gnome.org/glib20~2.66.1/glib.datetime#method-to_unix

```js
const {GLib} = imports.gi;

GLib.DateTime.new_now_local().to_unix(),

```

### Format

- \%T: the time in 24-hour notation with seconds (\%H:\%M:\%S)
- \%f: the microsecond as a decimal number (range 000000 to 999999)

```js
GLib.DateTime.new_now_local().format('%Y-%m-%d %T.%f');
```

# [GVariant](https://gjs.guide/guides/glib/gvariant.html#basic-usage)

In some ways you can think of GVariant like JSON and each `GLib.Variant` object like a JSON document. It's a format for storing structured data that can be serialized while preserving type information.

Compared to JSON, GVariant has the benefit of being strongly typed, with the ability to serialize special values like file handles.

In addition to the constructor methods in GLib, you can construct `GLib.Variant` objects with the `new` keyword by passing a type string, followed by the values.

``` js
// This example is equivalent to the one above; both create a GVariant type `as`
const stringList = ['one', 'two'];
const variantStrv = new GLib.Variant('as', stringList);

if (variantStrv.get_type_string() === 'as')
    print('Variant is an array of strings!');

```

The variant format is foundational to DBus.

# [GVariant Format Strings](https://docs.gtk.org/glib/gvariant-format-strings.html)

# DBus and GVariant

Since the variant format is foundational to DBus, there are two things you should take note of:

1.  Whether it's a **method**, **property** or **signal** the `GVariant` will always be a tuple (`()`).

2.  [There is no `null` type supported in DBus](https://gitlab.freedesktop.org/dbus/dbus/issues/25), so you have to use either empty types or another alternative.

# GSettings and GVariant

`GVariant` is the storage and data exchange format for [`GSettings`](https://developer.gnome.org/gio/stable/GSettings.html).

# [Error.matches(domain, code) / g_error_matches](https://gjs-docs.gnome.org/glib20~2.66.1/glib.error#method-matches)

```js
try {
    // ...
} catch (e) {
    if (e.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.CANCELLED)) {
        // ...
    }
}
```

