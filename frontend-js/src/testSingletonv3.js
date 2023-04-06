// 'use strict';

var Log = class {

    // static _instance;

    constructor() {
        this._date = new Date();
    }

    // Return a singleton instance
    static getDefault() {
        console.log('getDefault ' + JSON.stringify(Log._instance))
        if (!Log._instance) {
            Log._instance = new Log();
            console.log('new Log() ' + Log._instance + ' this._instance ' + this._instance + ' ' + (Log._instance === this._instance));
        }
        console.log('return ' + Log._instance + ' ' + JSON.stringify(Log._instance));
        return Log._instance;
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

    destroyDefault() {
        console.log('destroy... delete Log._instance ' + Log._instance + ' this._instance ' + this._instance)
        if (Log._instance) {
            Log._instance.destroy();
            console.log('destroy... delete Log._instance')
            delete Log._instance;
        }
    }
}

const log = Log.getDefault();
console.log('log ' + JSON.stringify(log))
// console.log(log);
// console.log(log._date);
// const isDebug = log.isDebug();
// console.log(isDebug);
console.log('destroying default ');
log.destroyDefault();


const log1 = Log.getDefault();
console.log('log1 ' + JSON.stringify(log1))
console.log('log1===log ' + (log1 === log));

console.log(log1);
console.log(log1._date);
const isDebug1 = log1.isDebug();
console.log(isDebug1);

