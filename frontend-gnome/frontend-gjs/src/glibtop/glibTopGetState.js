#!/usr/bin/env gjs

GTop = imports.gi.GTop;

const map = new Map();
function printState(pid) {
    let state = new GTop.glibtop_proc_state();
    GTop.glibtop_get_proc_state(state, pid);
    log(pid + ' -> ' + state.state);
    // log(pid + ' -> ' + state.cmd)
    let set = map.get(state.state);
    if (set) {
        set.add(pid);
    } else {
        map.set(state.state, new Set([pid]));
    }
}

// 999 does not exit, print 0
printState(999);
// 1 exits, print 2
printState(1);
// 2
printState(10080);
printState(7499);
printState(5055);
printState(7884);

// 1
log(GTop.GLIBTOP_PROCESS_RUNNING);
log(GTop.GLIBTOP_PROCESS_ZOMBIE);

log('========')
for (let i = -5; i < 10000; i++) {
    printState(i);
}

let result = JSON.stringify(Array.from(map.entries()))
log(result);

map.forEach((v, k) => {
    // let result = 
    log(k + ' ' + JSON.stringify(Array.from(v.keys())));
});

log('=====')

printState(999);