## Iterate array for...of
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

const array2 = ['a', 'b', 'c'];
for (let i = 0; i < array2.length; i++) {
  console.log(i, array2[i]);
}

// 0 a
// 1 b
// 2 c

delete array2[1];

for (let i = 0; i < array2.length; i++) {
  console.log(i, array2[i]);
}


```

# Array push(): Add / Append elements to an array
``` js
const an_array = ['a', 'b']
console.log(an_array)
an_array.push('c')
console.log(an_array)
```

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");   // Adds "Kiwi"
```

# [arrays.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
The some() method tests whether at least one element in the array passes the test implemented by the provided function.

# [Array.prototype.includes() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

Determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

It checks each element for equality with the value.

# Convert array to string and add separator
[Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
```js
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


```

# Check if array is empty or not
[How to check if array is empty or does not exist?](https://stackoverflow.com/questions/24403732/how-to-check-if-array-is-empty-or-does-not-exist)

[How to Check if a JavaScript Array is Empty or Not with .length](https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/)

```js
if (!Array.isArray(array) || !array.length) {
    console.log('Empty array');
}
```

# [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

The parameter is a compareFunction:
|compareFunction(a, b) return value |	sort order|
|--|--|
| > 0 |sort b before a|
| < 0 |sort a before b|
|=== 0|keep original order of a and b|


[Javascript sort array of objects by a boolean property](https://stackoverflow.com/questions/17387435/javascript-sort-array-of-objects-by-a-boolean-property)

just if you want it sorted the other way, swap the places of a and b in the sort function, instead of calling `reverse()`

# [Delete / remove elements from a JavaScript Array](https://love2dev.com/blog/javascript-remove-from-array/)

## Using [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

A new array containing matching values is returned. The original array is left untouched.

```js
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var filtered = array.filter(function(value, index, arr){ 
    return value > 5;
});
//filtered => [6, 7, 8, 9]
//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
```

