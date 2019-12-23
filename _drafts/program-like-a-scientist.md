---
title: "Program like a scientist"
path: "/writing/program-like-scientist"
description: "The scientific method has helped advance human civilization for the past few centuries. Applying the same technique to your programs can help you learn and solve problems more effectively."
tags: personal experience beginner tip
keywords: advice programming
---

<img alt="A row of microscopes in a classroom" title="Photo by Ousa Chea on Unsplash" src="./images/program-like-scientist.jpg" />

Recently I was pair programming with a coworker to help debug an Elixir/Phoenix application she was building.
While debugging, it occurred to me that we were unknowingly applying The Scientific Method to discover and solve the issues.
I have started deliberately applying this process in my daily coding practice.
Doing so has helped to clarify and refine my thought process to more effectively identify goals and reach the
desired goals.

<!-- Neither one of us had a lot of experience working with Elixir/Phoenix, b -->

<!-- The Scientific Method has been an invaluable asset to humanity during the past few centuries.
It has led to all of the amazing advances in human civilization, from steam engines to the sequencing of the human genome.
The same techniques can, and should, be applied while writing everyday programs.
Whether you are trying to squash a bug, solve a complicated problem, or learn a new programming language,
thinking about the task at hand scientifically will help you clarify and refine your thought process to more effectively reach your goal.
 -->

## the process

Most of us remember learning about The Scientific Method in school, but here's a quick refresher for those
who might have chosen to catch up on some sleep that day.
The Scientific Method has slightly different definitions, but it can generally be broken down
into the following steps.

### make an observation

The first step is to make an observation of some phenomena about the world.
This observation is used to drive the scientific process.

<!-- In terms of programming this can be something such as when clicking a button in the User Interface an error is thrown.
 -->

### ask a question

Ask a question about the observation. This question can be open ended, or specific to the phenomena observed.
The question should serve to narrow the focus of your inquiry.

<!-- Perhaps you ask what is the cause of the thrown error in your program when the button is clicked. -->

### form a hypothesis

Next, think of a potential answer, or hypothesis, for your question that is simple and easily verifible.
It can be useful to use an if...then format to define your hypothesis.
Structuring your hypothesis in this way allows it to be more easily testable and falsifiable.
<sup><a href="#source1">1</a></sup>

<!-- Our hypothesis for the error being thrown could look something like,
"If the button is attempting to call a function that is undefined, then an error will be thrown
when the button is clicked." -->

### make a prediction

Now that we have a potential answer to our question we need to predict what would be an observable outcome if
our hypothesis were true. This will give something to test against to add credibility to the hypothesis.

<!-- For example we could predict that if we add a breakpoint in the debugger tools we will see the an undefined
function attached to the button as a click handler. -->

### test the prediction

This is an investigation of whether the real world behaves as predicted by the hypothesis.
<sup><a href="#source2">2</a></sup>
A positive outcome of the test adds confidence to the possibility that the hypothesis is true,
while a negative outcome means the hypothesis is unlikely to be true.

### analyze and refine

This is the where the real benefit of applying this method comes.
After conducting the test the outcomes should be analyzed and the whole process should be repeated to refine the results.

## scientific coding

Let's see how we can apply these techniques to our code.

#### sources

<ul>
  <li>
    <span id="source1">
      <a href="https://science.howstuffworks.com/innovation/scientific-experiments/scientific-method6.htm">
        1. How the Scientific Method Works
      </a>
    </span>
  </li>
  <li>
    <span id="source2">
      <a href="https://en.wikipedia.org/wiki/Scientific_method">
        2. Scientific Method Wikipedia
      </a>
    </span>
  </li>
</ul>
