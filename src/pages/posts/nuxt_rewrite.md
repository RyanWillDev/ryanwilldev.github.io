---
title: "Nuxt Rewrite"
path: "/writing/nuxt-rewrite"
description: "A quick write up on how I converted this site from a single page Vue site to a static site with Nuxt."
tags: ["vue", "nuxt"]
publicationDate: "2017-10-31"
published: true
keywords: []
---

Recently I converted this site from a single page Vue app to a static site generated with Nuxt.
The decision to do so was motivated by a few factors, but in the end it was the ability to generate a static site that convinced me.
Well, that and every developer's weakness - curiosity.

## What is Nuxt?

[Nuxt](https://nuxtjs.org/guide) is a framework for easily creating Universal or Server Rendered apps with [Vue](https://vuejs.org/).
It is inspired by the framework [Next](https://zeit.co/blog/next2) from Zeit.

Nuxt also provides the ability to generate a static version of your site.
This feature is similar to [Jekyll](https://jekyllrb.com/), but allows you to use the full power of Vue and related tools like Vuex and Vue Router as well. The static site generated with Nuxt can be hosted on any static hosting provider; I used Github pages for this site.
The Nuxt team uses the same technique to generate their docs.

## Integrating Nuxt

First step to integrating Nuxt was to install it in my app with `npm install nuxt --save`. After installing Nuxt, I had to remove some old dependencies installed with Vue app that were now redundant.

Once the dependencies were straightened out, I needed to create the [directory structure](https://nuxtjs.org/guide/directory-structure) Nuxt uses to automatically create routes.
This mostly consisted of moving the container component I already had into the layouts directory and moving the components that were acting as pages to the pages directory.
All the other components I moved to a new directory called components and imported them as needed into the components in the Nuxt directories.

## Configuring Nuxt

By default Nuxt is configured to handle many things for you.
Any changes can be added easily by editing the [nuxt.config.js](https://nuxtjs.org/guide/configuration).

I used the router property of the Nuxt config to add a class to my active links.
I also added the following simple middleware that redirects visitors to the about route from the root of the site.

```javascript
export default function({ route, redirect }) {
  if (route.path === '/') redirect('/about');
}
```

Another convienent configuration available in the Nuxt config is the head property.
The head property allows you to define the default meta properties for you app.
This can be used in combination with the head method Nuxt adds to your components to very simply update the meta tags per page.
I use this technique to update the Open Graph meta tags on my journal entries.

## Static Site with Nuxt

Generating a static site using Nuxt was pretty straight forward.
I only ran into one relatively small and easy to fix issue.
Navigating to a journal entry once on the site worked fine, but if you refreshed the page you would get a 404 error.
This was because by default Nuxt only generates routes for the root of your static site.
If you want to add dynamic routes or routes with dynamic params you have to add a tiny tweak to the config file.

For my site, I wanted to add a dynamic param for each journal entry.
That is `/journal/:titleOfEntry`. Adding the following snippet to my config allowed the desired routes to be generated.

```javascript
generate: {
  routes() {
    return new Promise(resolve => resolve(journal.map(entry =>
      ({ route: `journal/${entry.data.url}`, payload: entry }))));
  },
```

The route property in the object above is required and used by Nuxt to generate the dynamic routes.
The payload property is optional and is used to provide data to you components during the generation.
Any data provided in the payload property is passed to the the asyncData method, which Nuxt adds to your page components and is called when the component is rendered server side or during the static site generation.

Async data is also called just before navigating to the route that renders the page component.
Though in this case, it is not provided the payload.
An alternative method for getting the data will need to be provided when payload is false.
Here is the asyncData method from my journalEntry component.

```javascript
async asyncData({ payload, params }) {
  return {
    entry: payload
      || journal.find(entry => entry.data.url === params.journalEntry),
  };
},
```

## Conclusion

Overall switching to Nuxt was easy and pretty straightforward.
The ability to statically generate your site is very neat feature.
An easy to use, static blog framework is just asking to be built on top of Nuxt.

Hmmm... 🤔 Maybe someday.

In the meantime, if I happen to find myself needing a way to render a future project on the server I will definitely be reaching for Nuxt.
