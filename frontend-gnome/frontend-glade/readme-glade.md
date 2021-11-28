# Doc
[Creating A User Interface](https://gjs.guide/guides/gtk/3/13-ui.html#creating-a-user-interface)

[Loading User Interface Files In GJS | GNOME Javascript](https://gjs.guide/guides/gtk/3/14-templates.html#loading-the-template)

# Fix 'Failed to load UiName.ui. The following required catalogs are unavailable: an_unavailable_catalogs.'
http://blog.codelv.com/2012/08/how-to-fix-glade-failed-to-load.html

``` Bash
GLADE_CATALOG_SEARCH_PATH=ui_path glade
```

Replacing "ui_path" with the path that contains the Glade catalog files.

