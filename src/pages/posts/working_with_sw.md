---
title: "Putting Service workers to work"
path: "/writing/working-with-service-workers"
description: "An introduction to Service workers. What they are how they work, and what they can do for you."
tags: ["PWA", "Progressive Web App", "PWA", "service workers"]
publicationDate: "Sat Jan 13 2018 12:36:15 GMT-0600 (CST)"
published: true
---

Service workers are event driven JavaScript files that can be registered as background tasks with the browser.

## Registering a service worker

In order to get a service worker to do your bidding, you must first register it with the browser.

```javascript
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceWorker.js').then(result => {
    console.log('Service Worker registered!', result);
  });
}
```

The check for `navigator.serviceWorker` is necessary because some browsers do not yet support service workers.
I'm looking at you Safari.

For up to date info on what browser support check out the service worker page on [caniuse.com](https://caniuse.com/#feat=serviceworkers).

## So, service workers are just JS?

Well, not exactly. While you do write the service worker in JavaScript, they behave a bit differently than the JavaScript you're used to.
They run in a separate thread, and they do not have access to the DOM.

Instead, service workers register a series of events to which they want to respond.
These events include lifecycle events (install, activate, and download) for the service worker itself as well as fetch events issued by the browser, among others.
Registering an event in the service worker should look like pretty standard JavaScript.

Here is a very simple example of registering an event to watch for the service worker's install event which is called every time a new service worker is
downloaded by the brower.
Self in the snippet below references the service worker.

```javascript
self.addEventListener('install', event => {
  console.log('Service Worker was installed!', event);
});
```

## Reliable worker

When you register an event listener for fetch events issued by the browser the service worker effectively becomes a proxy server, a middleman, between
the browser and the actually server that hosts the assets you want.

Note that an AJAX request is not the same as a request sent using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
Service workers can only intercept requests made using the Fetch API.

You can choose with each request whether to cache the response, or, perhaps, not send the request to the server at all and respond with a previously
cached response.
You can even load your app without an internet connection by caching the necessary assets when the service worker is installed.
This is a technique known as pre-caching the app shell.

## Working in the background

Since service workers run as background tasks separate from the thread your nomral JavaScript runs in, they are able to listen and respond to events even when
the browser is not open.

This enables features such as background sync and push notifications, which allow developers to create more resilent and immersive UIs.
