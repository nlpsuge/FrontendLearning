
# click called mutiple times

```js
// ...
myChart.on('click', function(parameters) {
  console.log(parameters);
}
```

## Unbind all the previous functions of click before binding the current function

```js
// ...
myChart.off('click');
myChart.on('click', function(parameters) {
  console.log(parameters);
}
```


