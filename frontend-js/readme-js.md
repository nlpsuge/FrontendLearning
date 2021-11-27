# Doc
ES6 入门教程: https://es6.ruanyifeng.com/#README

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

# Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

Eg:
``` js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);
```

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

# Date format

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

## 遍历数组 for...of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
The for...of statement creates a loop iterating over iterable objects, 
including: built-in String, Array, array-like objects (e.g., arguments or 
NodeList), TypedArray, Map, Set, and user-defined iterables.
``` js
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"

// You can use let instead of const too, if you reassign the variable inside the block.
const iterable = [10, 20, 30];
for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

# Map
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

# Array push()
``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");   // Adds "Kiwi"
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

# 空对象判断
https://stackoverflow.com/a/679937

If ECMAScript 5 support is available, you can use Object.keys()
``` js
Object.keys(obj).length === 0

// see
Utils.isEmptyObject()
```

# push: Add elements to an array
``` js
const an_array = ['a', 'b']
console.log(an_array)
an_array.push('c')
console.log(an_array)
```

# [arrays.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
The some() method tests whether at least one element in the array passes the test implemented by the provided function.

# TODO prototype

## apply(), call(), and bind() 
https://www.freecodecamp.org/news/how-to-use-the-apply-call-and-bind-methods-in-javascript-80a8e6096a90/

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

## Strict mode

## 

## getter / setter
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

