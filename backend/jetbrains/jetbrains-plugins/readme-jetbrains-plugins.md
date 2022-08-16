# Doc
[Creating Your First Plugin | IntelliJ Platform Plugin SDK](https://plugins.jetbrains.com/docs/intellij/getting-started.html)

# Example codes
[intellij-sdk-code-samples ](https://github.com/JetBrains/intellij-sdk-code-samples)

# Development 

## Using DevKit plugin

## Preliminary Steps﻿


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
   
 
# Troubleshooting

## When building plugin, Gradle complains: Incompatible because this component declares an API of a component compatible with Java 11 and the consumer needed a runtime of a component compatible with Java 8

## Run Configuration Error: No plugin module specified for configuration

Change `JAVA_MODULE` to `PLUGIN_MODULE` in xxx.iml file under the project.


