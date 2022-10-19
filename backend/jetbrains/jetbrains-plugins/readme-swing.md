
# Initial Threads

`javax.swing.SwingUtilities.invokeLater` V.S. `javax.swing.SwingUtilities.invokeAndWait`

[Creating a GUI With Swing > Concurrency in Swing](https://docs.oracle.com/javase/tutorial/uiswing/concurrency/initial.html)

In Swing programs, the initial threads don't have a lot to do. Their most essential job is to create a `Runnable` object that initializes the GUI and schedule that object for execution on the event dispatch thread. Once the GUI is created, the program is primarily driven by GUI events, each of which causes the execution of a short task on the event dispatch thread. Application code can schedule additional tasks on the event dispatch thread (if they complete quickly, so as not to interfere with event processing) or a worker thread (for long-running tasks).

An initial thread schedules the GUI creation task by invoking [`javax.swing.SwingUtilities.invokeLater`](https://docs.oracle.com/javase/8/docs/api/javax/swing/SwingUtilities.html#invokeLater-java.lang.Runnable-) or [`javax.swing.SwingUtilities.invokeAndWait`](https://docs.oracle.com/javase/8/docs/api/javax/swing/SwingUtilities.html#invokeAndWait-java.lang.Runnable-) . Both of these methods take a single argument: the `Runnable` that defines the new task. Their only difference is indicated by their names: **`invokeLater` simply schedules the task and returns; `invokeAndWait` waits for the task to finish before returning.**

In any other kind of program, scheduling the GUI-creation task is usually the last thing the initial thread does, so it doesn't matter whether it uses invokeLater or invokeAndWait.

Almost all code that creates or interacts with Swing components must run on the event dispatch thread.

# `PropertyChangeListener`

[Java Swing -- Writing a UI that will repaint itself based on changes to a custom data object](https://stackoverflow.com/questions/9762747/java-swing-writing-a-ui-that-will-repaint-itself-based-on-changes-to-a-custom)

`PropertyChangeListener` can also be used to update swing UI when the value of property/properties changes for a bean or a class

To avoid UI Freezes, don't do anything expensive inside event listeners.


```java
import java.beans.PropertyChangeEvent;
import java.beans.PropertyChangeSupport;

class SomeClass {
    public PropertyChangeSupport pcs = new PropertyChangeSupport(this);

    public void fetchDataFromRemote() {
        // Fetch data from remote first
        // ...

        // `propertyName` can be a null to indicate that an **arbitrary** set of if its properties have changed. In this case the old and new values should also be null.
        PropertyChangeEvent propertyChangeEvent = new PropertyChangeEvent(this, null, null, null);
        // Notify caller data fetched
        pcs.firePropertyChange(propertyChangeEvent);
    }
}

class CallerClass() {

    private SomeClass someClass = new SomeClass();

    public void fetchAndUpdateUI() {
        // Register listener first 
        someClass.pcs.addPropertyChangeListener(propertyChangeEvent -> {
            updateUI();
        });

        someClass.fetchDataFromRemote();
    }
}

```


# Event Dispatcher Thread / EDT

(The Event Dispatch Thread)[https://docs.oracle.com/javase/tutorial/uiswing/concurrency/dispatch.html]

**Swing event handling code runs on a special thread known as the event dispatch thread. Most code that invokes Swing methods also runs on this thread. This is necessary because most Swing object methods are not "thread safe": invoking them from multiple threads risks [thread interference](https://docs.oracle.com/javase/tutorial/essential/concurrency/interfere.html) or [memory consistency errors](https://docs.oracle.com/javase/tutorial/essential/concurrency/memconsist.html).**

It's useful to think of the code running on the event dispatch thread as **a series of short tasks**. Most tasks are invocations of event-handling methods, such as `ActionListener.actionPerformed`. Other tasks can be scheduled by application code, using `invokeLater` or `invokeAndWait`. **Tasks on the event dispatch thread must finish quickly; if they don't, unhandled events back up and the user interface becomes unresponsive.**

Invoking [`javax.swing.SwingUtilities.isEventDispatchThread`](https://docs.oracle.com/javase/8/docs/api/javax/swing/SwingUtilities.html#isEventDispatchThread--) to determine whether your code is running on the event dispatch thread.



# Executing long-running task via `SwingWorker`








