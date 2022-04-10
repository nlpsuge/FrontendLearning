# Doc
[How to use D-Bus in GJS](https://gjs.guide/guides/gio/dbus.html#introduction-to-d-bus)

[DBus in GJS](https://www.andyholmes.ca/articles/dbus-in-gjs.html)

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


