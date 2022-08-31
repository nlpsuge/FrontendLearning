# Doc
[Creating Your First Plugin | IntelliJ Platform Plugin SDK](https://plugins.jetbrains.com/docs/intellij/getting-started.html)

# Example codes
[intellij-sdk-code-samples ](https://github.com/JetBrains/intellij-sdk-code-samples)

# Development 

## Using DevKit plugin

## Preliminary Steps


- **Plugin DevKit** must be enabled in IntelliJ IDEA
- **IntelliJ Platform SDK** must be configured for the plugin project, see more at [Setting Up a Development Environment | IntelliJ Platform Plugin SDK](https://plugins.jetbrains.com/docs/intellij/setting-up-environment.html#configuring-intellij-platform-sdk)

- **Getting [IntelliJ IDEA CE source code](https://github.com/JetBrains/intellij-community)** is not a requirement for plugin development, but **having it makes debugging your plugins much more straightforward.**


##  [Creating a repository from a template](https://github.com/JetBrains/intellij-platform-plugin-template)


- [Create a template using GitHub Templates](https://github.com/JetBrains/intellij-platform-plugin-template/generate)
  - Create a new project on the Github based on https://github.com/JetBrains/intellij-platform-plugin-template  
  - Clone it to local environment and open it with IntelliJ IDEA
  - Create the `/src/main/java` directory to use Java in the plugin development
  - Change package: move sources from the com.github.username.repository package to the one that works best for you.
  - Manually review the configuration variables described in the `gradle.properties` file
- Gradle
  - Install  `gradle-intellij-plugin`
  
    The gradle-intellij-plugin makes it possible to run the IDE with your plugin and publish your plugin to JetBrains Marketplace Repository.
    
    Make sure to always upgrade to the latest version of gradle-intellij-plugin.
  
-  [Plugin Configuration File](https://plugins.jetbrains.com/docs/intellij/plugin-configuration-file.html?from=IJPluginTemplate): `plugin.xml` 

  The plugin configuration file is a `plugin.xml` file located in the `src/main/resources/META-INF` directory. It provides general information about the plugin, its dependencies, extensions, and listeners. 
  
```xml
    <idea-plugin>
      <id>org.jetbrains.plugins.template</id>
      <name>Template</name>
      <vendor>JetBrains</vendor>
      <depends>com.intellij.modules.platform</depends>
    
      <extensions defaultExtensionNs="com.intellij">
        <applicationService serviceImplementation="..."/>
        <projectService serviceImplementation="..."/>
      </extensions>
    
      <projectListeners>
        <listener class="..." topic="..."/>
      </projectListeners>
   </idea-plugin>
```
   

# Log
[IntelliJ IDEA plugin development - Log from within plugin](https://stackoverflow.com/questions/32294213/intellij-idea-plugin-development-log-from-within-plugin)

[Proper way to log in Idea plugins – IDEs Support (IntelliJ Platform) | JetBrains](https://intellij-support.jetbrains.com/hc/en-us/community/posts/206779715-Proper-way-to-log-in-Idea-plugins?page=1#community_comment_206163635)
 
```java
import com.intellij.openapi.diagnostic.Logger;
private static final Logger log = Logger.getInstance(Some.class);

```

# Icons

[Working with Icons and Images﻿](https://plugins.jetbrains.com/docs/intellij/work-with-icons-and-images.html)

Plugins should reuse existing platform icons whenever possible. 


* Find existing icons

Use [Icons list](https://jetbrains.design/intellij/resources/icons_list/) to browse existing icons. 

Platform icons are located in [`AllIcons`](https://github.com/JetBrains/intellij-community/tree/idea/222.3739.54/platform/util/src/com/intellij/icons/AllIcons.java). 

* Plugin icons

Icons from plugins are located in corresponding `<PLUGIN_NAME>Icons` class (e.g., [`GithubIcons`](https://github.com/JetBrains/intellij-community/tree/idea/222.3739.54/plugins/github/src/org/jetbrains/plugins/github/GithubIcons.java)).


If custom icons are required, please refer to detailed [design guide](https://jetbrains.design/intellij/principles/icons/).

# JLabel

## [How to create hyperlink with JLabel in Java Swing](https://www.codejava.net/java-se/swing/how-to-create-hyperlink-with-jlabel-in-java-swing)

```java
// No tested, but it should work
class TestHyperlinkOnLabel {

JLabel hyperlink = new JLabel();
// 
hyperlink.setText("<html><a href=''>Visit CodeJava...</a></html>");
// To make the mouse cursor changes to a hand icon when the user moves the mouse over the label
hyperlink.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
// To make the label clickable, add a mouse listener class to the JLabel
hyperlink.addMouseListener(new MouseAdapter() {
    
    // Override the mouse clicked event
    @Override
    public void mouseClicked(MouseEvent e) {
      try {
        // use the Desktop class to open the associated hyperlink
        Desktop.getDesktop().browse(new URI("http://www.codejava.net"));
      } catch (IOException | URISyntaxException e1) {
        e1.printStackTrace();
      }
    }
  });


}
```

## Display a menu when click on the Label

[Java Swing How to - Show JPopupMenu on left click](http://www.java2s.com/Tutorials/Java/Swing_How_to/JPopupMenu/Show_JPopupMenu_on_left_click.htm)

```java
JPopupMenu menu = new JPopupMenu("Options");
JMenuItem jMenuItem = new JMenuItem("Itme 1");
// Add an action so that it should response to SPACE key or click
jMenuItem.addActionListener(new ActionListener() {
  @Override
  public void actionPerformed(ActionEvent e) {
    // Do something
  }
});
menu.add(jMenuItem);
userNameIcon.addMouseListener(new MouseAdapter() {
    @Override
    public void mouseClicked(MouseEvent e) {
        Component parent = e.getComponent();
        int x = parent.getX();
        int y = parent.getHeight();
        menu.show(parent, x, y);
    }
});
```

## `MouseListener` vs `ActionListener`

[addMouseListener or addActionListener or JButton?](https://stackoverflow.com/questions/3616761/addmouselistener-or-addactionlistener-or-jbutton)
[https://stackoverflow.com/questions/9778621/how-to-make-a-jmenu-item-do-something-when-its-clicked](How to make a JMenu item do something when it's clicked)

`MouseListener` is a low-level event listener in Swing (and AWT by the way).

`ActionListener` is higher-level and should be used.

**When using `ActionListener`, one will be able to press SPACE using keyboard, as well as click the mouse.**


# Troubleshooting

## When building plugin, Gradle complains: Incompatible because this component declares an API of a component compatible with Java 11 and the consumer needed a runtime of a component compatible with Java 8

## Run Configuration Error: No plugin module specified for configuration

Change `JAVA_MODULE` to `PLUGIN_MODULE` in xxx.iml file under the project.


