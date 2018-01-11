<script type="text/javascript">
import hljs from 'highlight.js';

import journal from '../../journal/journal.json';

function highlightCode() {
  const code = document.querySelectorAll('code'); // eslint-disable-line
  code.forEach(block => {
    hljs.highlightBlock(block);
  });
}

export default {
  name: 'JournalEntry',
  async asyncData({ payload, params }) {
    return {
      entry:
        payload ||
        journal.find(entry => entry.data.url === params.journalEntry),
    };
  },
  mounted() {
    highlightCode();
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://ryanwilldev.com/journal/${this.entry.data.url}`,
          hid: 'con',
        },
      ],
      meta: [
        {
          name: 'description',
          content: this.entry.data.description,
          hid: 'desc',
        },
        {
          property: 'og:title',
          content: this.entry.data.title,
          hid: 'og:title',
        },
        {
          property: 'og:description',
          content: this.entry.data.description,
          hid: 'og:desc',
        },
        {
          property: 'og:url',
          content: `https://ryanwilldev.com/journal/${this.entry.data.url}`,
          hid: 'og:url',
        },
        { property: 'og:type', content: 'article', hid: 'og:type' },
        {
          name: 'twitter:description',
          content: this.entry.data.description,
          hid: 't:desc',
        },
      ],
    };
  },
};
</script>

<template>
<section class="entry-container">
  <h1>{{entry.data.title}}</h1>
  <span class="pub-date">{{entry.data.publicationDate}}</span>
  <section v-html="entry.html"></section>

</section>
</template>

<style lang="scss">
.entry-container {
  h1 {
    margin-bottom: 0.2em;
  }

  h2,
  h3 {
    margin-bottom: 24px;
    margin-top: 56px;
  }

  pre {
    white-space: pre-wrap;

    @media screen and (max-width: 750px) {
      font-size: 0.8em;
    }

    code {
      border-radius: 5px;
      margin: 24px 0;
      width: 90%;
    }
  }

  .pub-date {
    display: block;
    margin-bottom: 24px;

    @media screen and (min-width: 750px) {
      margin-bottom: 48px;
    }
  }

  .hljs-keyword {
    border-radius: 5px;
    display: inline-flex;
    padding: 2px 4px;
  }

  p > code.hljs {
    border-radius: 5px;
    display: inline;
    padding: 0 4px;
  }

  @media screen and (min-width: 750px) {
    padding-right: 10%;
  }
}
</style>
