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

// 2022-11-13 12:04:04
// 1668312244 is the Unix time (The number of seconds that have elapsed since 1970-01-01 00:00:00 UTC, regardless of the local time offset)
GLib.DateTime.new_from_unix_local(1668312244).format('%Y-%m-%d %T')
```


## Monotonic time VS Real time

[GLib 2.66.1 / get_monotonic_time() — DevDocs](https://gjs-docs.gnome.org/glib20~2.66.1/glib.get_monotonic_time)

[GLib 2.66.1 / get_real_time() — DevDocs](https://gjs-docs.gnome.org/glib20~2.66.1/glib.get_real_time)

* GLib.get_monotonic_time()

return number, in microseconds

**The monotonic clock will always increase and doesn't suffer discontinuities** when 
the user (or NTP) changes the system time. It **may or may not** continue to tick 
during times where the machine is suspended.

* GLib.get_real_time()

Return the real wall-clock time, the number of microseconds since January 1, 1970 UTC


# [GVariant](https://gjs.guide/guides/glib/gvariant.html)

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

```javascript
const {GLib} = imports.gi;
// Serializing JSON to a string
// Output: {"name":"Mario","lives":3,"active":true}
const json = {
    name: "Mario",
    lives: 3,
    active: true,
};

const jsonString = JSON.stringify(json);


// Serializing GVariant to a string
// Output: {'name': <'Mario'>, 'lives': <uint32 3>, 'active': <true>}
const variant = new GLib.Variant('a{sv}', {
    name: GLib.Variant.new_string('Mario'),
    lives: GLib.Variant.new_uint32(3),
    active: GLib.Variant.new_boolean(true),
});

let variantString = variant.print(true);
// {'name': <'Mario'>, 'lives': <uint32 3>, 'active': <true>}
log(variantString);

variantString = variant.recursiveUnpack();
// { name: "Mario", lives: 3, active: true }
log(variantString);
```

## [GVariant Format Strings](https://docs.gtk.org/glib/gvariant-format-strings.html)

## DBus and GVariant

Since the variant format is foundational to DBus, there are two things you should take note of:

1.  Whether it's a **method**, **property** or **signal** the `GVariant` will always be a tuple (`()`).

2.  [There is no `null` type supported in DBus](https://gitlab.freedesktop.org/dbus/dbus/issues/25), so you have to use either empty types or another alternative.

### Explain
* `[]` arrays
* `a{sv}` dictionaries 
* `()` tuples

#### Dictionary
```js
var dict = {
  FirstName: "Chris",
  "one": 1,
  1: "some value"
};
```

But JavaScript doesn’t natively include a type called “Dictionary”.

#### Explain a{sa{sv}}

See: [What the heck is a dbus argument of type a{sa{sv}} in the Network Manager API?](https://stackoverflow.com/questions/73451788/what-the-heck-is-a-dbus-argument-of-type-asasv-in-the-network-manager-api)

* `s` is std::string.
* `v` is variant.
* `a{}` is std::map.
* `a{sv}` is std::map<std::string, Variant>
* Finally: `a{sa{sv}}` is std::map<std::string, std::map<std::string, Variant>>

Variant can hold value of any D-Bus-supported type



## GSettings and GVariant

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

# 