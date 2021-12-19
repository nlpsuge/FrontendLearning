# Date format

## YYYY-MM-DD
```JS
new Date().toISOString().slice(0,10);
```
## YYYYMMDD
[Get String in YYYYMMDD format from JS date object?](https://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object)

``` JS
new Date().toISOString().slice(0,10).replace(/-/g,"");
```

# Get timestamp in milliseconds
[How do you get a timestamp in JavaScript?](https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript)

```js
new Date().getTime()
```



