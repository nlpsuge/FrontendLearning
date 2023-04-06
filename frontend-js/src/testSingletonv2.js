// 'use strict';

let _singleton = null;

function getDefault() {
    if (_singleton == null)
        _singleton = new Log();

    return _singleton;
}

function destroy() {
    if (_singleton) {
        _singleton.destroy();
        _singleton= null;
    }
}

var Log = class {

    constructor() {
        // this._default = null;

        this._date = new Date();
    }

    isDebug() {
        return this._date.toLocaleString();
    }

    destroy() {
        if (this._date) {
            console.log('destroy... this._date = null')
            this._date = null;
        }
    }
}

const log = getDefault();
console.log('log ' + JSON.stringify(log))
// console.log(log);
// console.log(log._date);
// const isDebug = log.isDebug();
// console.log(isDebug);
console.log('destroying ');
destroy();

const log1 = getDefault();
console.log('log1 ' + JSON.stringify(log1))
console.log('log1===log ' + (log1 === log));

console.log(log1);
console.log(log1._date);
const isDebug1 = log1.isDebug();
console.log(isDebug1);

