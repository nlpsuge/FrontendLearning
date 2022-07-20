# Doc

[Promise，async/await](https://zh.javascript.info/async)


# Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#creating_a_promise_around_an_old_callback_api

[JavaScript Promises](https://www.w3schools.com/js/js_promise.asp)

[From JavaScript Promises to Async/Await: why bother?](https://blog.pusher.com/promises-async-await/)


A Promise is an object representing the eventual completion or failure of an asynchronous operation.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

The Promise object supports two properties: **state** and **result**.
* While a Promise object is "pending" (working), the result is undefined.
* When a Promise object is "fulfilled", the result is a value.
* When a Promise object is "rejected", the result is an error object.

|myPromise.state|myPromise.result|
|---------------|----------------|
|"pending"      |undefined       |
|"fulfilled"    |a result value  |
|"rejected"     |an error object |


[`Promise.resolve()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) and [`Promise.reject()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) are shortcuts to manually create an already resolved or rejected promise respectively. This can be useful at times.

Eg:
``` js
// using a resolved promise, the 'then' block will be triggered instantly,
// but its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);
// =
// const resolvedProm = new Promise(function(resolve){ resolve(33); });

let thenProm = resolvedProm.then(value => {
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});
// instantly logging the value of thenProm
console.log(thenProm);


// logs, in order:
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// "this gets called after the end of the main stack. the value received and returned is: 33"
```

```js
let p = new Promise((resolve) => {resolve(444)});
p.then((v)=>{console.log(v)})
r = await p;
console.log('result ' + r)

// logs:
// 444
// result 444


const asyncFun = async function() {
  let p = new Promise((r) => {r(444)});
  p.then((v)=>{console.log(v)})
  return p;
}

r = await asyncFun();
console.log('result ' + r)

// logs:
// 444
// result 444
```

## Code following the resolve() continues running
https://stackoverflow.com/questions/28896280/why-does-javascript-es6-promises-continue-execution-after-a-resolve

Use `return resolve()` to return immediately:
```js
return new Promise(function(resolve, reject) {
    return resolve();
    console.log("Not doing more stuff after a return statement");
});
```

# `async` keyword

## [`async` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax)


Syntax:
```js
async function name([param[, param[, ...param]]]) {
   statements
}
```

The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

The `await` keyword is permitted within an `async` function.

An `async` function is a function declared with the `async` keyword,

```js
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
asyncCall();
```
## [Promise.prototype.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

**The `then()` method returns a Promise.**

### Syntax
```js
p.then(onFulfilled[, onRejected]);
```


### Examples

```js
const noop = (result) => {console.log(result)};
const nextTickPromise = () => Promise.resolve(3).then(noop);
// Print 3
nextTickPromise();

const nextTickPromise1 = () => Promise.resolve(3).then(4).then(5, 51).then(noop);
// Print 3, 4 and 5 never return.
nextTickPromise1();

const nextTickPromise2 = () => Promise.resolve(3).then(4).then(r => {return r + 5;}, 51).then(noop);
// Print 8, 3 + 5 equals 8.
nextTickPromise2();

const nextTickPromise3 = () => Promise.resolve(3)
                                      // returns 4 which is wrapped in a resolved Promise
                                      .then(r => {return 4})
                                      .then(5, 51).then(noop);
// Print 4
nextTickPromise3();
```

**Async functions can contain zero or more await expressions.**

Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. **The resolved value of the promise is treated as the return value of the await expression.**

Async functions always return a promise. **If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.**

```js
async function foo() {
   return 1
}
```

...is similar to:

```js
function foo() {
   return Promise.resolve(1)
}
```


# await
`await` can only be used in a `async` function.