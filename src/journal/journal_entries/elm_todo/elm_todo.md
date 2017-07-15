
I have been interested in functional programming languages, particularly Elm,
for a while but had been hesitant to take the plunge and build something with one.
So, after listening to quite a few episodes of [Elm Town](https://elmtown.github.io/) and watching some talks on Elm
I decided to make the customary To Do application.
I know you can't get much more cliche than your first application with a new language being a To Do app,
but it allows you to test out the language relatively quickly. You can find my code [here](https://github.com/RyanWillDev/elm-todo).

## The Tooling

I want to start by saying the tooling around Elm is pretty great.
The packages for the Atom editor add a lot of cool features for working with Elm.
I really enjoyed the inline compiler errors provided by the [Elm Linter](https://atom.io/packages/linter-elm-make),
the autocompletion provided by [Elmjutsu](https://atom.io/packages/elmjutsu),
but by far my favorite was [Elm Format](https://atom.io/packages/elm-format).

Coming from a JavaScript background the formatting of Elm was a little strange at first.
The ability to just throw some Elm code on the page hit cmd-s and have Elm format take care of the formatting
was great. It allowed me to maintain focus on trying to solve the current problem instead of getting caught up with formatting.

I also found [Elm Reactor](https://github.com/elm-lang/elm-reactor) to be an invaluable tool while working with Elm.
To have your code compiled on the fly and see your changes reflected in the browser made developing with Elm
almost as easy as modern JS development.

The one thing I found slightly lacking in the Elm tooling was the debugger.
While it was useful to see the changes being made to my app while I interacted with it, it was not as pleasant to work with
as the Redux dev tools that I am used to.

## The Type System

Having never worked with a statically typed language before Elm's syntax and features took a little getting used to.
Fortunately the Elm community and Evan Czaplicki, the creator of Elm, are focused on making Elm easy to use.
This means that while there is a slight learning curve to Elm it is not as drastic as other languages.

The type system allows you to describe in great detail what your applications look like.
It also allows you to avoid the runtime errors that can plague apps built with dynamically typed languages.

## The Development Experience

When writing Elm code I spent quite a lot of time trying to appease the compiler.
I would make a change to the code and the compiler would tell me I did something wrong.
Make another change and the compiler would become angry again.

You may think this would slow your development down tremendously. Well... it does, but the pay off is worth it.
The most striking thing I noticed while working with Elm was the lack of runtime error
and the minimal amount of time spent debugging.

After my first battle with the compiler was won and my app finally rendered in the browser,
the first thing I did was open the Chrome dev tools and start clicking around.
I did not believe the compiler when it told me everything was fine.
Coming from the JavaScript world, I was sure there was a runtime exception waiting to be thrown.
I just needed to find it.
But after a few minutes of adding and completing to do's I could not break my app.
The compiler was right.

## The Elm Architecture

Elm web applications have a preferred structure known as the Elm Architecture.
It consists of a series of functions (model, view, and update) that describe your app and the way it can change.

A **very** brief explanation of the Elm Architecture is the model holds the data/state of your application,
the view function describes to the Elm virtual DOM what to render,
and the update function receives messages from the view and returns a new model describing the updated state of your application.

I knew when starting with Elm that Redux was inspired by the Elm Architecture, so I had a basic understanding of what was going on.
Unlike with Redux, you do not have to wire together the Elm Architecture. The language takes care of that for you.
Honestly, this bothered me a little when starting on my app. I wanted to understand what was going on behind the scenes.
Once I accepted that Elm would take care of connecting things, working with the Elm Architecture was very pleasant.
