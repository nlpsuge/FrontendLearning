# telepathyClient.js => ChatMessage.newFromTpMessage

# test

## dbus test
```bash
# Open the logout dialog with 30 seconds countdown
gdbus call --session --dest org.gnome.Shell \
             --object-path /org/gnome/SessionManager/EndSessionDialog \
             --method org.gnome.SessionManager.EndSessionDialog.Open 0 0 30 '[]'

```