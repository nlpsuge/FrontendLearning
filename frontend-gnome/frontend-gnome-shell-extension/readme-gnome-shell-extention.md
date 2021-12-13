# Doc
[How to Create A GNOME Extension](https://www.codeproject.com/Articles/5271677/How-to-Create-A-GNOME-Extension)

# [How to port Extensions to GNOME Shell 40](https://gjs.guide/extensions/upgrading/gnome-shell-40.html#contents)



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