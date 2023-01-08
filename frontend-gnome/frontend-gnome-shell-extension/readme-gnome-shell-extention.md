# Doc
[How to Create A GNOME Extension](https://www.codeproject.com/Articles/5271677/How-to-Create-A-GNOME-Extension)

# [How to port Extensions to GNOME Shell 40](https://gjs.guide/extensions/upgrading/gnome-shell-40.html#contents)


# Note: can't use GTK widgets in the Gnome Shell, but it has its own toolkit in the form of St: https://gjs-docs.gnome.org/st10~1.0//

[Sharing code between a GTK/GJS App and a Gnome Shell Extension](https://stackoverflow.com/questions/68275153/sharing-code-between-a-gtk-gjs-app-and-a-gnome-shell-extension)

[Gnome shell extension: how to do change panelMenu button icons?](https://discourse.gnome.org/t/gnome-shell-extension-how-to-do-change-panelmenu-button-icons/3381)

# Open the preference dialog from the command line directly
``` Bash
gnome-extensions prefs uuid-of-example@example.com
```
You can use it to open the References of an extension as soon as possible, without any click.

# [Logging](https://gjs.guide/extensions/development/debugging.html#logging)

``` JS
// Log a string, usually to `journalctl`
log('a message');

// Log an Error() with a stack trace and optional prefix
try {
    throw new Error('An error occurred');
} catch (e) {
    logError(e, 'ExtensionError');
}

// Print a message to stdout
print('a message');

// Print a message to stderr
printerr('An error occured');
```

## View gnome-shell and gjs errors

```sh
# without date
journalctl -f -o cat /usr/bin/{gjs,gnome-shell}
```

```sh
# with date
journalctl -f /usr/bin/{gjs,gnome-shell}
```

```sh
# with full microsecond precision
journalctl -o short-precise -f /usr/bin/{gjs,gnome-shell}
```


# [Preferences](https://gjs.guide/extensions/development/preferences.html#gsettings)

## GSettings
Used for storing application settings

## Creating the schema
Schema files describe the types and default values of a particular group of settings, using the same type format as GVariant

```
cd extension-root-path
mkdir schemas/
vim schemas/org.gnome.shell.extensions.example-a-example.gschema.xml
```

And copy && paste those content:
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<schemalist>
  <schema id="org.gnome.shell.extensions.example-a-example" path="/org/gnome/shell/extensions/example-a-example/">
    <!-- See also: https://developer.gnome.org/glib/stable/gvariant-format-strings.html -->
    <key name="show-indicator" type="b">
      <default>true</default>
    </key>
  </schema>
</schemalist>
```
Change the GSchema ID and path for your needs.

## Compiling the schema
Once you are done defining you schema, you must compile it before it can be used:
```Bash
glib-compile-schemas schemas/

ls schemas
org.gnome.shell.extensions.example-a-example.gschema.xml gschemas.compiled
```

## Integrating GSettings
[Integrating GSettings](https://gjs.guide/extensions/development/preferences.html#integrating-gsettings)

Use `ExtensionUtils.getSettings('org.gnome.shell.extensions.example-a-example');` to get settings from the compiled gschema.

And use
``` js
this.settings.bind(
            'show-indicator',
            this._indicator,
            'visible',
            Gio.SettingsBindFlags.DEFAULT
        );
```
to bind GProperties (properties registered on a GObject class), **not working with JavaScript properties**, watch for the changes, for example changing it on Preferences, via `dconf` or `gsettings`.

# [GNOME Shell Extensions Review Guidelines](https://gjs.guide/extensions/review-guidelines/review-guidelines.html)

- Don't use classes or methods from the deprecated `Lang` module
See: [Legacy Class Syntax - how to remove Lang](https://gjs.guide/guides/gjs/legacy-class-syntax.html#comparison-between-legacy-and-es6)

# gnome-shell/js/ui/main.js
Gnome Shell has exposed many internal functinon or objects via gnome-shell/js/ui/main.js

For example, hide the background in the Overview:
```js
const Main = imports.ui.main;
const overview_chilren = Main.layoutManager.overviewGroup.get_children();
for (const child of overview_chilren) {
    if (!child instanceof Overview.OverviewActor) {
      continue;
    }

    const controls = child.controls;
    const _workspacesDisplay = controls._workspacesDisplay;
    const _workspacesViews = _workspacesDisplay._workspacesViews;
    // Get the first one _workspacesView
    const _workspacesView = _workspacesViews[0];
    print('_workspaces._workspaces.length: ' + _workspacesView._workspaces.length);
    // Iterate all underlying workspaces
    for (const workspace of _workspacesView._workspaces) {
        print('_workspacesView._workspaces._workspace: ' + workspace);
        // Get the setting, `true` to hide the background, `fase` to show
        const hide_background = _settings.get_boolean('hide-background');
        if (hide_background) {
            workspace._background.hide();
        } else {
            workspace._background.show();
        }
    }

}
```
# Run command in the background
``` js
const command = 'gnome-terminal';
Util.trySpawnCommandLine(command); // calling GLib.spawn_async()
```

# Icon
[Themed Icons](https://developer.gnome.org/GNotification/documentation/tutorials/themed-icons.html)

## Symbolic icons

Symbolic icons have a simple form, and can be used much like text. They will **be recolored according to the context in which they are used**. By convention, symbolic icons are named with a -symbolic suffix.

### Use customize symbolic icon
[Custom Icon for Gnome Shell Extension in Top Panel not visible](https://stackoverflow.com/questions/61243243/custom-icon-for-gnome-shell-extension-in-top-panel-not-visible)

``` 
const { St, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

// 1. Presume there is a icon named 'restore-symbolic.svg' in 'icons' folder
// 2. Use '-symbolic' icons to allow automatic theme aware re-colorization of the icons.
let iconPath = `${Me.path}/icons/restore-symbolic.svg`;
let icon = new St.Icon({
    // https://gjs-docs.gnome.org/gio20~2.66p/gio.icon#function-new_for_string
    // https://gjs-docs.gnome.org/gio20~2.66p/gio.icon#method-to_string
    gicon: Gio.icon_new_for_string(`${iconPath}`),
    style_class: 'system-status-icon'
});
```

# GLib.idle_add()
The idle_add() can happen much faster than timeouts

# If you want to open prefs.js from extension.js, you can use 
ExtensionUtils.openPrefs().

# How to check the GNOME shell version 

## Method 1, split by . and then compare using major or minor

[Version Number Detection](https://gjs.guide/extensions/development/targeting-older-gnome.html#version-number-detection)
```js
const Config = imports.misc.config;
const [major, minor] = Config.PACKAGE_VERSION.split('.').map(s => Number(s));

if (major === 3 && minor <= 36)
log('Shell 3.36 or lower');
else if (major === 3 && minor === 38)
log('Shell 3.38');
else if (major >= 40)
log('Shell 40 or higher');
```

## Method 2, convert version to float and then compare in float type

```js
const GNOME_VERSION = parseFloat(Config.PACKAGE_VERSION);

function isOlderThan42() {
    return GNOME_VERSION < 42;
}
```

# Using TypeScript in Gnome Shell Extension

https://gitlab.gnome.org/harshadgavali/gnome-extension-template


# extension.js

## disable() and enable()
disable() will run in:
- disable the extension
- remove (uninstall) the extension
- lock screen

enable() will run in:
- enable the extension
- unclock screen

# TODO Babel 

```shell
pnpm install babel-cli babel-preset-env save-dev
```

``` json
// filename: .babelrc.json
// See: https://babeljs.io/docs/en/babel-generator#options
{
    "presets": ["@babel/preset-env"],
    // see: https://babeljs.io/docs/en/plugins-list
    // "plugins": [
    //     "@babel/plugin-proposal-optional-chaining", 
    //     "@babel/plugin-proposal-nullish-coalescing-operator",
    //     // "babel-plugin-recast"
    // ],
    "compact": false,
    // "retainLines": true
}
```

``` json
// filename: package.json
{
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "babel src -d lib"
    }
}
```