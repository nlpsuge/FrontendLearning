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

