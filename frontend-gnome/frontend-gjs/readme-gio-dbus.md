# Doc
[How to use D-Bus in GJS](https://gjs.guide/guides/gio/dbus.html#introduction-to-d-bus)

[DBus in GJS](https://www.andyholmes.ca/articles/dbus-in-gjs.html)

[dbus](https://www.freedesktop.org/wiki/Software/dbus/)

# Introspect D-Bus on your desktop
[D-Feet](https://flathub.org/apps/details/org.gnome.dfeet)

```sh
dnf install d-feet
# or
flatpak install flathub org.gnome.dfeet
```

[D-Spy](https://flathub.org/apps/details/org.gnome.dspy)

```sh
flatpak install flathub org.gnome.dspy
```

# Introduction to D-Bus

[D-Bus](https://dbus.freedesktop.org/) is a messaging system that can be used to **communicate between processes**, enforce single-instance applications, start those services on demand and more.

## Bus Connections / [Gio.DBusConnection](https://gjs-docs.gnome.org/gio20/gio.dbusconnection)

**The system bus (Gio.DBus.system)** is used for services that are independent of a user session and often represent real devices like a laptop battery (UPower) or Bluetooth devices (bluez).

**The session bus (Gio.DBus.session)** is far more common to use and many user applications and desktop services are exported here. Some examples include notification servers, search providers for GNOME Shell, or or even regular applications such as the file browser that want to expose actions like EmptyTrash().

## [Interface Definitions](https://gjs.guide/guides/gio/dbus.html#interface-definitions) 

Most projects declare interface definitions in XML, either as files or inline in the code.


# TODO Connect signals emitted from a D-Bus interface

https://sudonull.com/post/111586-A-script-that-processes-system-events-using-DBus

# DBusAnalogy
https://www.freedesktop.org/wiki/Software/DBusAnalogy/

[DBusAnalogy](https://www.freedesktop.org/wiki/Software/DBusAnalogy/)

## Web Server Analogy

-   unique bus name is like an IP address. In particular it is dynamic.
-   well-known bus name is like a hostname. It can be held by different programs at different times, but they should all implement the same API
-   object path is like the path on the server
-   interface/method name is like GET or POST
-   in parameters are like like GET/POST variables
-   out parameters are like the page which is returned.

## Object-Oriented Language Analogy

-   an object path refers to an object, such as a java.lang.Object
-   an interface is exactly like a Java interface
-   in parameters are method arguments
-   out parameters are method return values
-   unique bus name identifies the running process or application uniquely (these bus names are never re-used by a different process)
-   well-known bus name is a "symlink" that points to the process providing a particular API
-   an API is made up of objects that are expected to exist, which are expected to implement certain interfaces
-   see also [http://log.ometer.com/2007-05.html#17](http://log.ometer.com/2007-05.html#17)

# Optional arguments

D-Bus is strict and type safe.

DBus methods are similar to C in that all defined arguments are
required to methods.

If you have optional arguments, the best way to implement that would
be to send a map<string,variant>(or a{sv} in dbus-speak) that lets you
test for arguments that may or may not exist.  This mechanism is used
by DBus itself for messages, as well as some standard services like
the org.freedesktop.Notifications[1].

