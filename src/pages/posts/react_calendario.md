---
title: 'React Calendario'
path: '/writing/react-calendario'
description: 'Developing a flexible and highly customizable React component that provides the base calendar functionality for creating internationalized calendars or date pickers.'
tags: ['react', 'JavaScript']
publicationDate: '2018-06-23'
published: true
keywords: ['npm', 'calendar', 'date picker', 'render prop', 'i18n', internationalization']
---

While there are plenty of great solutions for creating a date picker or calendar in React already, most have very limited
options for choosing how and what to render.
I wanted a React component with a simple API for creating internationalized calendars and date pickers,
while allowing complete freedom to structure and style what was rendered by the component.
So, I created and published my first npm package, [react-calendario](https://www.npmjs.com/package/@ryanwilldev/react-calendario).
Below is a very basic example.

<iframe src="https://codesandbox.io/embed/w242rok578?view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Customization

react-calendario takes advantange of the powerful [Render Prop](https://reactjs.org/docs/render-props.html) pattern allowing the consumer to customize and style the calendar or date picker however they like.
Unlike passing configuration props to traditional components or the Higher Order Component pattern the Render Prop pattern
allows the consumer of the component to customize and style the JSX returned by a component however they like.

react-calendario expects a function that returns JSX either as a prop named render or as its only child.
react-calendario calls the provided funcion in its own render method passing to it all the necessary logic to create the
calendar or date picker component as arguments.

You can read more about the arguments passed to the function [here](https://github.com/RyanWillDev/react-calendario#render-function-props).

## Internationalization

I am particulary excited about react-calendario's support for Internationalization.
Using the [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
API react-calendario can support all the languages supported by a user's browser.
To configure the language react-calendario will use just pass a supported browser language code as the language prop.
If the language code is invalid or absent, react-calendario will fallback to the browser's language.

## Inspiration

The inspiration for using the Render Prop pattern as well as the layout of react-calendario's README were inspired
by the awesome work done by Kent C. Dodds and others on [downshift](https://github.com/paypal/downshift).
Keep up the great work!
