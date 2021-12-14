# Doc

# Get app info
[Shell.app](https://gjs-docs.gnome.org/shell01~0.1_api/shell.app)

https://gjs-docs.gnome.org/shell01~0.1_api/shell.app#method-request_quit

## Get window info

### Get windows which are associated with an application
https://gjs-docs.gnome.org/shell01~0.1_api/shell.app#method-get_windows



## Get running apps which have at least one open window
https://gjs-docs.gnome.org/shell01~0.1_api/shell.appsystem#method-get_running

## search app via desktop id, like org.gnome.Terminal.desktop
https://gjs-docs.gnome.org/shell01~0.1_api/shell.appsystem#method-lookup_app

https://gjs-docs.gnome.org/shell01~0.1_api/shell.app#method-get_app_info - return Gio.DesktopAppInfo

``` js
const { Shell } = imports.gi;

const _appSystem = Shell.AppSystem.get_default();
const _app = _appSystem.lookup_app('org.gnome.Terminal.desktop');
const _app_info = _app.get_app_info();
const commandline = _app_info.get_commandline();
print(commandline);

```



