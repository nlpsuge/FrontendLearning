#!/usr/bin/env gjs

// gjs subprocess-test.js

const { Gio, GLib } = imports.gi;

let proc = Gio.Subprocess.new(
    ['bash', '-c', 'exit 79'],
    Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
);

// Synchronously wait for the subprocess to terminate.
// After the process terminates you can query its exit status with
// functions such as Gio.Subprocess.get_if_exited and
// Gio.Subprocess.get_exit_status.
proc.wait(null);
log(proc.get_exit_status());
log(proc.get_if_exited());

proc = Gio.Subprocess.new(
    ['bash', '-c', 'exit 88'],
    Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
);
proc.wait_check_async(null, (proc, res) => {
    try {
        const success = proc.wait_check_finish(res);
        log(success);
        let status = proc.get_exit_status();
        log(status);
    } catch (error) {
        log(error)
    }
});

let cmdstr = `bash -c '/usr/lib/virtualbox/VirtualBoxVM --comment win7-cp-tmp --startvm edb4c636-59f3-4a35-baa4-d8bd68617006 --no-startvm-errormsgbox'`;
[success_, argv] = GLib.shell_parse_argv(cmdstr);
log('argv ' + argv)
proc = Gio.Subprocess.new(
    argv,
    Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
);
proc.wait_check_async(null, (proc, res) => {
    try {
        const success = proc.wait_check_finish(res);
        log(success);
        let status = proc.get_exit_status();
        log(status);
    } catch (error) {
        log(error)
    }
});


let loop = GLib.MainLoop.new(null, false);
loop.run();
