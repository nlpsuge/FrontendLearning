imports.gi.versions.Soup = "3.0";
const {Gio, GLib, Soup} = imports.gi;

// Query an app information from the Snap socket API

function testGetAppInfoSync() {
    const unixSocketAddress = Gio.UnixSocketAddress.new('/run/snapd.socket');
    const session = new Soup.Session({remote_connectable: unixSocketAddress});
    const message = Soup.Message.new('GET', 'http://localhost/v2/apps?names=postman');
    const responseBodyBytes = session.send_and_read(message, null);
    log(responseBodyBytes);
    log(message.statusCode);
    log(message.status_code);
    log(Soup.Status.OK);
    const decoder = new TextDecoder();
    const responseData = responseBodyBytes.get_data();
    // log(responseData);
    if (message.status_code === Soup.Status.OK) {
        const response = decoder.decode(responseData);
        log(response);    
    }
}

function testGetAppInfoAsync() {
    const unixSocketAddress = Gio.UnixSocketAddress.new('/run/snapd.socket');
    const session = new Soup.Session({remote_connectable: unixSocketAddress});
    log(session);
    const message = Soup.Message.new('GET', 'http://localhost/v2/apps?names=postman');
    const cancellable = null;
    session.send_and_read_async(message, GLib.PRIORITY_LOW, cancellable, (_session, asyncResult) => {
        log(session === _session);

        const responseBodyBytes = session.send_and_read_finish(asyncResult);
        log(responseBodyBytes);
        log(message.statusCode);
        log(message.status_code);
        log(Soup.Status.OK);
        const decoder = new TextDecoder();
        const responseData = responseBodyBytes.get_data();
        // log(responseData);
        if (message.status_code === Soup.Status.OK) {
            const response = decoder.decode(responseData);
            log(response);    
        }   
    });

    // Need this in order to get the result in the callback
    let loop = GLib.MainLoop.new(null, false);
    loop.run();
}

testGetAppInfoSync();
testGetAppInfoAsync();