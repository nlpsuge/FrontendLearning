# Doc
[gjs guide](https://gjs.guide/guides/)

[gjs docs](https://gjs-docs.gnome.org/)

# How to import private components like gi.Shell, git.St in `gjs` or `gjs-console`
https://gist.github.com/buzztaiki/1492431

See: [shell_object_sample.js](#src/shell_object_sample.js)

# Imports and Modules
In GJS every file is treated as a "module" and any variable declared as 
using 'var' (or global scope) is exported. Each "module" is imported using 
the 'imports' object using the pattern imports.[fileName] where the file's 
literal name is fileName.js. If your fileName contains a character that is 
not a valid Javascript identifier you can access it using the object+key 
syntax: object['fileName'].

Modules are searched in paths defined in the array imports.searchPath.
You can modify the value of imports.searchPath to include 
the directories where to look for modules (before importing modules via imports,
like:)
``` js
imports.searchPath.push('/tmp/gnome-shell/js')
```

# 