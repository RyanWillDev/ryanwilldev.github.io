JavaScript not only has the boolean types `true` and `false`, but it also has the idea of truthy and falsy values.
That is non-boolean values can be coerced to a boolean value when evaluated in a boolean context.
This can be an unfamiliar idea to new developers or those coming from other languages.

## Truthy vs Falsy

In JavaScript all values that are not `""`, `undefined`, `null`, `0`, `NaN`, and, of course, `false` are considered true
when evaluated as a boolean, that is placed in an `if` conditional.

For example the following will evaluate to true and the statement will be logged to the console.

```javascript
if (1) {
  console.log('1 is true.');
}
```
So, why is this useful? The idea of truthy and falsy can be taken advantage of to write simpler code.

Let's say you have the following array.

```javascript
var arr = [ 1, 2, 3];
```

If you wanted to do something with the array only if it has elements inside it, you could use a comparison operator like `>=`
to check if the length of the array was greater than or equal to `1`.

```javascript
if (arr.length >= 1) {
  // do stuff
}
```

This works but can be simplified by checking for a truthy or falsy value.
Knowing that any number other than `0` is truthy and that if the array is empty it's length property will be `0`, the `if` can be
rewritten as the follows.

```javascript
if (arr.length) {
  // do stuff
}
```

## Explicit Boolean Coercion

If you every need to convert a truthy or fasly value to a a boolean you can just add a `!!` in front of the value.
The first `!` will convert the value to the opposite of what it was.
Adding the second `!` will convert the value to a boolean of the same logical value as the original value.

```javascript
!0 // true
!!0 // false
```
