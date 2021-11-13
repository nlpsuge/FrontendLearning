/**
 * 判读是否是 空对象
 * 
 * If ECMAScript 5 support is available, you can use Object.keys()
 * 
 * @see https://stackoverflow.com/a/679937
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0
}

