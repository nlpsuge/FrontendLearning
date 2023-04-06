
const { Gio, GLib, GObject } = imports.gi;

var AGObject = GObject.registerClass(
class AGObject extends GObject.Object {

    _init() {
        log('init');
    }
});

// The number if params can be less than the number of typs defined in the first parameter
// TypeError: Invalid GVariant signature for type TUPLE (expected ")")
new GLib.Variant('(ssss)', ['str', 's2']);

let stringArrayVariant = new GLib.Variant('(ssss)', [
    'str', 
    's2', 
    // Argument string may not be null
    // null,
    '',
    's4'
]);
let stringArray = stringArrayVariant.recursiveUnpack();
stringArray.forEach(element => {
    print(element);
});
let [s1, s2, s3, s4] = stringArray;
log(s1 + ' ' + s2 + ' ' + s3 + ' ' + s4);


let gobject = new AGObject();
let gobjectVariant = new GLib.Variant('(o)', [gobject]);
let unpackedgobjectVariant = gobjectVariant.recursiveUnpack();
log(unpackedgobjectVariant)
