const journal = require('./journal/journal.json');

module.exports = {
  router: {
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-active',
    middleware: 'redirectAtRoot',
  },
  generate: {
    routes() {
      return new Promise(resolve => resolve(journal.map(entry =>
        ({ route: `journal/${entry.data.url}`, payload: entry }))));
    },
  },
  head: {
    title: 'RyanWillDev | Software Developer',
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'canonical', href: 'https://ryanwilldev.com', hid: 'con' },
    ],
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf8' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/static/logo.png',
      },
      { name: 'description', content: 'Web Developer in the Nashville area with a passion for learning and creating custom websites and applications.', hid: 'desc' },
      { name: 'title', content: 'RyanWillDev' },
      { property: 'og:description', content: 'Web Developer in the Nashville area with a passion for learning and creating custom websites and applications.', hid: 'og:desc' },
      { property: 'og:title', content: 'RyanWillDev', hid: 'og:title' },
      { property: 'og:url', content: 'https://ryanwilldev.com', hid: 'og:url' },
      { property: 'og:type', content: 'website', hid: 'og:type' },
      { property: 'twitter:creator', content: '@RyanWillDev' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'og:image', content: 'static/logo.png' },
    ],
  },
};
