# Doc
ES6 入门教程: https://es6.ruanyifeng.com/#README

# JSDoc
[JSDoc](https://jsdoc.app/about-getting-started.html)

[jsdoc - An API documentation generator for JavaScript](https://github.com/jsdoc/jsdoc)

[The Modern JavaScript Tutorial](https://javascript.info/)

[The Modern JavaScript Tutorial github](https://github.com/javascript-tutorial/en.javascript.info)



# Fetch
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
The Fetch API provides a JavaScript interface for accessing and manipulating 
parts of the HTTP pipeline, such as requests and responses. It also provides a 
global fetch() method that provides an easy, logical way to fetch resources
 asynchronously across the network.

Fetch also provides a single logical place to define other HTTP-related concepts 
such as CORS and extensions to HTTP.

# TODO Template literals (Template strings) / 模板字面量 / 模板字符串 ES6
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

Template literals are literals delimited with backticks (`), 
allowing embedded expressions called substitutions.

# GET 拼接请求参数
https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request

https://stackoverflow.com/a/35491602


## nodejs querystring
``` js
var querystring = require('querystring')
var data = { key: 'value' }
querystring.stringify(data) // => 'key=value'
```

## https://nodejs.org/api/url.html#url_the_whatwg_url_api
``` js
const url = require('url');
url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
});

// => 'https://example.com/some/path?page=1&format=json'

url.format('http://localhost:9881/some/page/do-something', options)
```

# <input> type
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

# merge objects
https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically

``` js
let merged = {...obj1, ...obj2};
```

There's no limit to the number of objects you can merge.
Later properties overwrite earlier properties with the same name.
``` js
const allRules = {...obj1, ...obj2, ...obj3};
```

# Remove a property without mutating the object
https://flaviocopes.com/how-to-remove-object-property-javascript/


# 变量展开 (rest spread) 和  从对象/数组中移除变量
https://es6.ruanyifeng.com/#docs/array#含义
``` js
const form = {

  field1: 1111,
  field2: 'test',
  field3: Date(),
  field4: null
}
const { field1, field2, field4, ...newForm } = this.form
this.form = newForm
```

从 this.form 中移除了三个变量 field1 field2 field4

## [扩展运算符](https://es6.ruanyifeng.com/#docs/object#扩展运算符)
对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
由于数组是特殊的对象，所以对象的扩展运算符也可以用于数组。

``` js
let aClone = { ...a };
// 等同于
let aClone = Object.assign({}, a);
```

# 柯里化 / Curring
Currying 是编译原理层面实现多参函数的一个技术
只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数

https://juejin.cn/post/6844903603266650125

# import

## Correct syntax to import constants in ES6
https://stackoverflow.com/questions/52048536/correct-syntax-to-import-constants-in-es6/52048583
``` js
constants.js:
export const foo = 'foo'
export const bar = 'bar'

anotherModule.js:
import {foo, bar} from './constants'

console.log(foo,bar)
```

## import xxx from 'xxx' VS import xxx from 'xxx'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { default as XxxModal } from './components/XxxModal';


###



# 遍历 / iterating

## 遍历对象 for...in statement 不建议用于遍历数组
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Given that for...in is built for iterating object properties, not recommended for use with arrays
``` js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
const an_array = ['df', 'hg']
for (let index in an_array) {
  console.log(index);
}
```

# export default VS export named 
https://24ways.org/2014/javascript-modules-the-es6-way/
https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript

# module system
JavaScript admittedly has plenty of flaws, but one of the largest and most prominent is the lack of a module system: a way to split up your application into a series of smaller files that can depend on each other to function correctly.

# row / column merge
https://developpaper.com/question/ant-table-row-merge/


# How to check whether a string contains a substring in JavaScript?
https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript

``` js
const string = "foo";
const substring = "oo";

console.log(string.includes(substring)); // true
```

# expr1 || expr2
If expr1 can be converted to true, returns expr1; else, returns expr2.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

# Object
## 空对象判断
https://stackoverflow.com/a/679937

If ECMAScript 5 support is available, you can use Object.keys()
``` js
Object.keys(obj).length === 0

// see
Utils.isEmptyObject()
```

## Get all properties and values of an Object and ordering
https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object/679937#679937

https://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

``` js
let anObj = { 100: 'a', 3:'3w', 20: 'b', 7: 'c', 'a': 'd2', 'c': 'c3', 'b': 'b5' };
// Get properties
// array-like object with random key ordering
Object.keys(anObj); // console: 3,7,20,100,a,c,b

for (let o in anObj) {console.log(o)} // 3,7,20,100,a,c,b

// Get values
Object.values(anObj); // 3w,c,b,a,d2,c3,b5
```

## [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

```js
Object.assign(target, ...sources)
```

This method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.

Object.assign() does not throw on null or undefined sources.

### Merging objects with same properties
```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

### Ordering
[Object.getOwnPropertyNames() Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames#description)

The ordering of the enumerable properties in the array is **consistent** with the ordering exposed by a for...in loop (or by Object.keys()) over the properties of the object.

According to ES6, the **integer keys** of the object (both enumerable and non-enumerable) are added **in ascending order** to the array first, followed by the string keys in the order of insertion.

## Delete a property from an Object

```js
const anObj = { 100: 'a', 3:'3w', 20: 'b', 7: 'c', 'a': 'd2', 'c': 'c3', 'b': 'b5' };
console.log(anObj);
delete anObj.c;
delete anObj[100];
console.log(anObj);

```

# TODO prototype

## apply(), call(), and bind() 
https://www.freecodecamp.org/news/how-to-use-the-apply-call-and-bind-methods-in-javascript-80a8e6096a90/

### [call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
 The call() method calls a function with a given this value and arguments provided individually. 

 [**call() is a function that lets you change the context of another function by passing `thisArg`**](https://stackoverflow.com/questions/45489249/object-prototype-tostring-call-javascript?answertab=trending#tab-top)

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"

```

Syntax:
```
call()
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, ... , argN)

```

Optional parameter:
* `thisArg`: The value to use as this when calling func to change the context.
* `arg1, arg2, ...argN`: Arguments for the function.

Return value: 
The result of calling the function with the specified this value and arguments. 


### Function.prototype.apply() V.S. Function.prototype.call() 
Note that when using the apply() function the parameter must be placed in an array. 
Call() accepts both an array of parameters and a parameter itself. 
Both are great tools for borrowing functions in JavaScript.

### Function.prototype.bind()
https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

The simplest use of `bind()` is to make a function that, no matter how it is called, is called with a particular `this` value.

``` js
this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX();
//  returns 81

const retrieveX = module.getX;
retrieveX();
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
boundGetX();
//  returns 81
```

### check if a function is a Function object
``` js
(function() {}).constructor === Function
```

Return true means it's a Function object.

As functions are objects in JavaScript, their invocation is controlled by the apply, call, and bind methods.

The following are the methods in the function prototype chain:

- Function.prototype.apply()
- Function.prototype.bind()
- Function.prototype.call()


## prototype

# class
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

Classes are a template for creating objects. They encapsulate data with code to work on that data.

An important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed (calling the class's constructor).

## ways to define a class

### using a `class` declaration
Syntax:
```
class name [extends otherName] {
  // class body
}
```

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### using class expression
Class expressions can be named or unnamed.

Syntax:
```js
const MyClass = class [className] [extends otherClassName] {
  // class body
}
```

```js
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"
```

Note: Class expressions must be declared before they can be used

## extends a class
[extends - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

The `extends` keyword is used in [class declarations](#using-a-class-declaration) or [class expressions](#using-class-expression) to create a class that is a child of another class.

The extends keyword can be used to subclass custom classes as well as built-in objects.

# Strict mode
(JavaScript Use Strict)[https://www.w3schools.com/js/js_strict.asp]

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error. 

The "use strict" directive is only recognized at the **beginning** of a script or a function.

## 

# getter / setter
The get syntax binds an object property to a function that will be called when that property is looked up.

using get the property will be defined on the instance's prototype
``` js
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
};

console.log(obj.latest);
// expected output: "c"
```

Note:
- get must have exactly zero parameters
- set must have exactly one parameter

# [Get the name of an object's type](https://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class)
``` js
function Foo() {}
var foo = new Foo();

typeof Foo;             // == "function"
typeof foo;             // == "object"

foo instanceof Foo;     // == true
foo.constructor.name;   // == "Foo"
Foo.name                // == "Foo"    

Foo.prototype.isPrototypeOf(foo);   // == true

Foo.prototype.bar = function (x) {return x+x;};
foo.bar(21);            // == 42
```
Note: don't rely on constructor.name if your code is being minified. The function name is going to change arbitrarily.

# Triple Equals(===) V.S. Double Equals(==)
See: https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a

## Triple Equals
When using triple equals === in JavaScript, we are testing for strict equality. **This means both the type and the value**
we are comparing have to be the same.
'hello world' === 'hello world' // true (Both Strings, equal values)
true === true // true (Both Booleans, equal values)

77 === '77' // false (Number v. String)
false === 0 // false (Different type and different value)


# Double Equals
When using double equals in JavaScript we are testing for loose equality. Double equals also performs type coercion.
Type coercion means that **two values are compared only after attempting to convert them into a common type.**

77 == '77' // true
false === 0 // false (Different type and different value)
false == 0 // true

Okay, so why does false == 0 in JavaScript? It’s complex, but it’s because in JavaScript 0 is a [falsy value].

Type coercion will actually convert our zero into a false boolean, then false is equal to false.

# Split a string according to any whitespace, and discard empty strings from the result, like `string.split()` in Python
[Splitting string by whitespace, without empty elements?](https://stackoverflow.com/questions/9141951/splitting-string-by-whitespace-without-empty-elements)
```js
str = ' sss xxx  fff fd  56  '
str.split(' ').filter(function(i){return i})
// With ES6
str.split(' ').filter(i => i)
```
filter() method creates a new array with all elements that pass the test implemented by the provided function. If('') is false, filter function filter strip them in the final result.


# [Converting an object to a json/string](https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string)
``` js
var obj = {
  name: 'myObj'
};

JSON.stringify(obj);
```

## Format / beautify json
[Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters)

``` js
JSON.stringify(value, replacer, space)
```

``` js
JSON.stringify({a: 'a', b: 2},
null,
// Indented 4 spaces
4);

JSON.stringify({a: 'a', b: 2},
null,
// Indented with tab
'\t');
```

# Map
[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
```js
const map1 = new Map();
map1.set('key1', 'value1');
map1.set('key2', 'value2');
map1.set('key2', 'value3');
map1.set('key3', 'value3');
map1.set('key4', 'value4');

map1.has('key1'); // true
map1.forEach((v, k) => {
  console.log(k);
});
map1.forEach((v, k) => {
  console.log(`${k}: ${v}`);
});

for (const [k, v] of map1) {
  console.log(`${k}: ${v}`);
}

map1.keys().forEach(k => {
  console.log(k);
});

// "value3"
console.log(map1.get('key2'));
// true
console.log(map1.delete('key2'));
// undefined
console.log(map1.get('key2'));
```

```js
const map1 = new Map();
map1.set('key1', {v1: 'value1'});
map1.set('key2', {v2: 'value2'});
map1.set('key2', {v2: 'value3'});
map1.set('key3', {v3: 'value3'});
map1.set('key4', {v4: 'value4', v41: ['filed-value-v41']});

for (const [k, v] of map1) {
  console.log(`${k}: ${JSON.stringify(v)}`);
}

const v3 = map1.get('key3');
v3.v31 = 'value31';

const v4 = map1.get('key4');
if (v4) {
  v4.v41.push('filed-value-v41-pushed');
}

for (const [k, v] of map1) {
  if (k === 'key3') {
    // Data Changed: 'key3: {"v3":"value3","v31":"value31"}'
    console.log(`${k}: ${JSON.stringify(v)}`);
  }
  if (k === 'key4') {
    // Data Changed： 'key4: {"v4":"value4","v41":["filed-value-v41","filed-value-v41-pushed"]}'
    console.log(`${k}: ${JSON.stringify(v)}`);
  }
}

```

## [Map.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)

### Syntax
```js
// Arrow function
forEach(() => { /* … */ } )
forEach((value) => { /* … */ } )
forEach((value, key) => { /* … */ } )
forEach((value, key, map) => { /* … */ } )
```

### Example
```js
function logMapElements(value, key, map) {
    console.log(`map.get('${key}') = ${value}`)
}
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements)
// logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
```


## Map to json, and vice versa
[How do you JSON.stringify an ES6 Map?](https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map)

``` js
const map = new Map();
map.set('key1', {v1: 'value1'});
map.set('key2', {v2: 'value2'});

const jsonText = JSON.stringify(Array.from(map.entries()));
console.log(jsonText);

const toMap = new Map(JSON.parse(jsonText));
for (const [key, value] of toMap) {
    console.log(`${key}: ${JSON.stringify(value)}`);
}
```

## Map iterate
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
``` js
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

# Set
[Set - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

You can iterate through the elements of a set in insertion order. A value in the `Set` **may only occur once**; it is unique in the `Set`'s collection.

[Set - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

[`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) and [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) can also be stored in a Set. All `NaN` values are equated (i.e. `NaN` is considered the same as `NaN`, even though `NaN !== NaN`).

## Usages

### Remove duplicate elements from the array

```js
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]
```

# Truthy vs Falsy
https://developer.mozilla.org/en-US/docs/Glossary/Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy

## Truthy

All values are _truthy_ except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`:

- true
- []
- {}
- 3
- "0"
- "false"
- negative value, such as -42. (Note that -0 is falsy)


## Falsy
- false
- 0 / 0.0 / 0x0
- -0 / -0.0 / -0x0

## [if(x) vs if(x==true)](https://stackoverflow.com/questions/23061921/javascript-ifx-vs-ifx-true)
`if(x)` checks if x is Truthy where as `if(x==true)` checks if the Boolean value of x is true.
```js
if ({}) {
  console.log('{} is truthy');
}

if ([]) {
  console.log('[] is truthy');
}
```

# string match: [RegExp.prototype.test\(\)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

```js
new RegExp('text').test('search text')

const str = 'hello world!';
const result = /^hello/.test(str);

console.log(result); // true

```

# [?.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
 The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid. 

 ```js
 let nestedProp = obj.first?.second;
 ```
By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj.first is not null or undefined before attempting to access obj.first.second. **If obj.first is null or undefined, the expression automatically short-circuits, returning undefined.** 


# !! - Double Bang, NOT NOT
[JS Double Bang — or “The Not Operator Part !!”](https://medium.com/@edplatomail/js-double-bang-or-the-not-operator-part-40e55d089bf0)

[What is the !! (not not) operator in JavaScript?](https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript)

There is no !! operator in JS... there is only the single !

Converts Object to boolean. If it was falsy (e.g. 0, null, undefined, etc.), it will be false, otherwise, true.

```js
!object  // inverted boolean
!!object // non inverted boolean so true boolean representation
```

So !! is not an operator, it's just the ! operator twice.

It may be simpler to do:

```js
Boolean(object) // boolean
```

# [?? - Double question mark / Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is **null or undefined**, and otherwise returns its left-hand side operand. 

This can be seen as a special case of the [logical OR (`||`) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR), which returns the right-hand side operand if **the left operand is _any_ [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value, not only `null` or `undefined`**. In other words, if you use `||` to provide some default value to another variable `foo`, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., `''` or `0`).

```js
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
```

# [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

If any one or more of the parameters cannot be converted into a number, NaN is returned. The result is -Infinity if no parameters are provided.

```js
// 19
console.log(Math.max(1, 19, 2));
const array1 = [1, 3, 2];
// 3
console.log(Math.max(...array1));
```

# [Array merge](https://dmitripavlutin.com/javascript-merge-arrays/)

## Merge using the spread operator
```js

const heroes = ['Batman', 'Superman'];
const villains = ['Joker', 'Bane'];
const all = [...heroes, ...villains];

```

### Merge using array.concat() method
```js
const heroes = ['Batman', 'Superman'];
const villains = ['Joker', 'Bane'];
// form 1
const all1 = heroes.concat(villains);
// Or form 2
const all2 = [].concat(heroes, villains);
all1; // ['Batman', 'Superman', 'Joker', 'Bane']
all2; // ['Batman', 'Superman', 'Joker', 'Bane']
```

### Merge using array.push() method to merge it into some existing array.
```js
const heroes = ['Batman', 'Superman'];
const villains = ['Joker', 'Bane'];
heroes.push(...villains);
```

# TODO Closures

# Detect the type / class

## [Object.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#using_tostring_to_detect_object_class)


`toString()` can be used with every object and (by default) allows you to get its class. 

```js
const toString = Object.prototype.toString;

toString.call(new Date);    // [object Date]
toString.call(new String);  // [object String]
toString.call(Math);        // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined);   // [object Undefined]
toString.call(null);        // [object Null]

```

Using toString() in this way is unreliable; objects can change the behavior of Object.prototype.toString() by defining a Symbol.toStringTag property, leading to unexpected results:

```js
const myDate = new Date();
Object.prototype.toString.call(myDate);     // [object Date]

myDate[Symbol.toStringTag] = 'myDate';
Object.prototype.toString.call(myDate);     // [object myDate]

Date.prototype[Symbol.toStringTag] = 'prototype polluted';
Object.prototype.toString.call(new Date()); // [object prototype polluted]

```


### See also
[Object Prototype toString Call - JavaScript](https://stackoverflow.com/questions/45489249/object-prototype-tostring-call-javascript?answertab=trending#tab-top)

# Number

The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java or C#. This means it can represent fractional values, but there are some limits to what it can store. A Number only keeps about 17 decimal places of precision; arithmetic is subject to rounding. The largest value a Number can hold is about 1.8E308. Values higher than that are replaced with the special Number constant Infinity.

## [Convert Int using Number.parseInt() - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)

# [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

An arrow function expression is a compact alternative to a traditional function expression, but **is limited and can't be used in all situations.**

Some limitations:

- Arrow functions don't have their own bindings to [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) or [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), and should not be used as [methods](https://developer.mozilla.org/en-US/docs/Glossary/Method).
- Arrow functions don't have access to the [`new.target`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target) keyword.
- Arrow functions aren't suitable for [`call`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) and [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) methods, which generally rely on establishing a [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope).
- Arrow functions cannot be used as [constructors](https://developer.mozilla.org/en-US/docs/Glossary/Constructor). So you cannot use `new` to an Arrow function:
```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
```
- Arrow functions cannot use [`yield`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield), within its body.


For **named functions** we treat arrow expressions like variables:

```js
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob = a => a + 100;
```

Arrow functions can have either a _concise body_ or the usual _block body_.
 
**In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an explicit `return` statement.**

```js
const func = x => x * x;
// concise body syntax, implied "return"

const func2 = (x, y) => { return x + y; };
// with block body, explicit "return" needed
```

# [title - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title)

The **`title`** [global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) contains text representing advisory information related to the element it belongs to.


# [Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom)


# Error

[Error - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

https://nodejs.org/api/errors.html


## Cause

The error.cause property is typically set by calling new Error(message, { cause }). It is not set by the constructor if the cause option is not provided.

