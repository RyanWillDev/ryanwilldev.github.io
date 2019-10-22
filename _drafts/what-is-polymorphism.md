---
description: 
  Polymorphism can be a tricky topic to grasp. Hopefully this short
  rundown will help clear things up.
tags: elixir
keywords: behaviour,elixir,protocol,polymorphism,behavior
footnotes:
  - text: 'Wikipedia: Polymorphism'
    link: 'https://en.wikipedia.org/wiki/Polymorphism_(computer_science)'
series:
  title: Polymorphism in Elixir
title: What is Polymorphism?
---

Polymorphism seems like one of those words that everyone throws around, but can't quite explain. 
I have to look up the definition pretty regularly myself. 
Maybe it's just something [you know when you see](https://en.wikipedia.org/wiki/I_know_it_when_I_see_it). 
Let's look at a definition to see if that clears it up.

> In programming languages and type theory, polymorphism is the provision of a single interface to entities of different types
> or the use of a single symbol to represent multiple different
> types.{% fn 1 %}

Wow! Not the clearest definition. Let's see if we can do better.

> Polymorphism is a way to work with different types of things as if they were the same 
> by defining a common way to interact with them.

Imagine a real world example. 
If you're anything like me you have 43 remotes to control all the gadgets in your living room.
While each of these remotes control a different type of thing---TV, Stereo, VCR!?---they all share a common interface.
This means they can be used in the same way even if they produce different results.


Polymorphism comes in a variety of forms, no pun intended, but we're going to focus on just three---Ad hoc, Substitution, Type based.
We'll see how to use the mechanisms Elixir provides to make our code more generic and reusable.

## Ad-Hoc Polymorphism (Rework Heading)

Functions in Elixir are unique compared to most other languages.
When defining a function not just the name of the function
identifies it, but also the number of arguments it accepts -- or its arity.
This means you can define many functions with the same name. As long as the number of
arguments they accept is different they're considered different functions.

Elixir also provides pattern matching and guard clauses as a way to define
multiple clauses of a function with the same name and arity but different types
of arguments. This is similar to method or function overloading in other
languages.
This is also a form of Ad hoc Polymorphism.
