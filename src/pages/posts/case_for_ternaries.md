---
title: "The case for ternaries"
path: "/writing/case-for-ternaries"
description: "The conditional ternary operator can be a little off putting to some, but it is extremely useful. So, what is it and when should it be used?"
tags: ["JavaScript"]
publicationDate: "Sat Feb 17 2018 14:54:32 GMT-0600 (CST)"
published: true
---

```javascript
ifTrue ? 'I am true' : 'I am false';
```

Umm... what is that?
That, my friend, is the conditional operator, or a ternary.
So named because it is made up of 3 parts.
The three parts are: the condition to be checked, the expression to be returned when the condition is true, and the expression to be returned when the condition
is false.

The ternary is an analog to the if/else statement with the only difference being a ternary is an expression, while an if/else block is a statement.
Okay. What exactly is the difference between an expression and a statement?

## Expressions vs Statements

An expression is any piece of code that **evaluates to a value**.

A statement is essentially a series of actions for a program to perform that does not evaluate to a value.
Think of an loop or a conditional statement.

The key here is that expressions have to evaluate to a value, while statements never do.

This is clearly illustrated by comparing what happens when setting a variable to the result of a statement vs an expression.
In the following example `javascript>num` will have the value `javascript>2` after the expression `javascript>1 + 1` is evaluated.

```javascript
var num = 1 + 1;
```

Whereas the following will throw an error of unexpected token and your editor will most likely alert you that a statement was found where an expression was expected.
This is because an if/else block does not evaluate to a value.

```javascript
var a = if (true) 1 + 1
  else 2 + 2;
```

## Setting variables

One simple use case for ternaries is setting a variable's value based on a condition.
Without a ternary you would have to do something like this to conditionally set a variable.

```javascript
var num;

if (someFlag) {
  num = 4;
} else {
  num = 42;
}
```

This could be condensed slightly by removing the curly braces.

```javascript
var num;

if (someFlag) num = 4;
else num = 42;
```

Even that is less than ideal.
Instead we can use a ternary to check the flag and return the number we want from our expression.
That would look something like this.

```javascript
var num = someFlag ? 4 : 42;
```

## Conditional function arguments

JavaScript does not allow you to write statements inside of the parens of a function call.
In order to pass different arguments to a function depending on some condtition, a similar method to the one used above could be used.
A variable could be set using if/else statements and then passed to the function.

A cleaner, more concise, and easier to follow method would be to use a ternary to pass the argument.

```javascript
someFunctionCall(someCondition ? 4 : 42);
```

## Returning expressions from functions

The most benefical place to use a ternary is in the return expression of a function.
The reason being that it helps you avoid errors.

What is the potential error in the following example?

```javascript
function capitalize(string) {
  if (string.length) return string[0].toUpperCase() + string.slice(1);
}
```

It's subtle and might not seem like a big deal, but if someone were to call the function above with an empty string the function would return `javascript>undefined`.
Which would really wreck someone's day if they were chaining this function together with others.

This is because all functions in JavaScript return `javascript>undefined` unless they have an explicit return.
That is the `javascript>return` keyword with an expression afterward.

So, the issue here is that there is an if statement but no else case.
This is percisely why a ternary is so handy when conditionally returning a value from a function.

Remember, a ternary is made up of 3 parts.
It needs all of those parts to be a valid expression.
Therefore, when writing a ternary, the developer is forced to deal with the else case.

```javascript
function capitalize(string) {
  return string.length ? string[0].toUpperCase() + string.slice(1) : string;
}
```

The next time you find yourself wanting to write an if statement to determine what to return from a function, just go ahead and use a ternary instead.
