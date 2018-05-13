---
title: "Hello World"
path: "/writing/hello-world"
description: "The first entry in my journal gives a brief rundown of the technologies used to build this site."
tags: ["vue", "showdownjs", "highlightjs", "node", "JavaScript"]
publicationDate: "2017-03-06"
published: true
---

Like most developers' personal sites, this has been my playground and has gone through many rewrites.
I wanted an excuse to try out [Vue](https://vuejs.org/), so I decided to rewrite this site from React.
I really enjoyed working with Vue and learning some new tricks and techniques to make a "blog" without a database.

I am already itching to do another rewrite, though. This time with Elm =)
I guess that is the developer's eternal struggle.

## Vue

Overall working with Vue was very pleasant. The [.vue](https://vuejs.org/v2/guide/single-file-components.html)
files are a very cool way to organize your code on a component level.
You can combine all the HTML, CSS, and JavaScript that make up your component into a single file.
This allows you to seamlessly create reusable components.

Like many of the modern frontend frameworks and libraries Vue has the [vue-cli](https://github.com/vuejs/vue-cli)
which makes setting up your build and dev environments trivially easy. It does the heavy lifting of setting up the
Webpack configs including hot reloading and production build file.

## My Journal

I wanted a way to write a "blog" without having to store the entries on a server. Of course, I could have used a static site
generator like [Jekyll](https://jekyllrb.com/), but I wanted to try out Vue.

The solution I came up with was to write the entries in markdown and use Node to compile the markdown to HTML using [Showdown.js](http://showdownjs.github.io/demo/).
Once I have the HTML, I generate a JSON object made up of the markdown and some metadata about the post.
I then import the JSON file into my Vue app so it is available to display.

To add syntax highlighting for the code in the journal entries I used [Highlight.js](https://highlightjs.org/).
When a JournalEntry component loads it finds all the code elements and uses highlightjs to add syntax highlighting.

Building the Journal this way gave me some of the same benefits of using a static site generator like the posts being version controlled
and not needing a server or database, but it also allowed me to give Vue a try. It also allowed me to get some practice in
with manipulating files and directories using Node.
