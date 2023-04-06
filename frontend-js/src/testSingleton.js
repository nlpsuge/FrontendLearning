// 'use strict';

var Log = class {

    constructor() {
        // this._default = null;

        this._date = new Date();
    }

    // Return a singleton instance
    static getDefault() {
        console.log('getDefault ' + JSON.stringify(this._default))
        if (!this._default) {
            this._default = new Log();
            console.log('new Log() ' + this._default);
        }
        console.log('return ' + this._default + ' ' + JSON.stringify(this._default));
        return this._default;
    }

    isDebug() {
        return this._date.toLocaleString();
    }

    destroy() {
        if (this._date) {
            console.log('destroy... this._date = null')
            this._date = null;
        }

        console.log('destroy... delete this._default ' + this._default)
        if (this._default) {
            console.log('destroy... delete this._default')
            delete this._default;
        }
    }

    static destroyDefault() {
        if (this._date) {
            console.log('destroy... this._date = null')
            this._date = null;
        }
        
        console.log('destroy... delete this._default ' + this._default)
        if (this._default) {
            console.log('destroy... delete this._default')
            delete this._default;
        }
    }
}

const log = Log.getDefault();
console.log('log ' + JSON.stringify(log))
// console.log(log);
// console.log(log._date);
// const isDebug = log.isDebug();
// console.log(isDebug);
console.log('destroying ');
log.destroy();

// Log.destroyDefault();

const log1 = Log.getDefault();
console.log('log1 ' + JSON.stringify(log1))
console.log('log1===log ' + (log1 === log));

console.log(log1);
console.log(log1._date);
const isDebug1 = log1.isDebug();
console.log(isDebug1);

