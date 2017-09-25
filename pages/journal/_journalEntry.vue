<script type="text/javascript">
// TODO: Find out why eslint is complaining about the above line in some vue files.
  import hljs from 'highlight.js';

  // TODO: Find a way to pass journal without importing it
  import journal from '../../journal/journal.json';

  function highlightCode() {
    const code = document.querySelectorAll('code'); // eslint-disable-line
    code.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  export default {
    name: 'JournalEntry',
    async asyncData({ payload, params }) {
      return {
        entry: payload || journal.find(entry => entry.data.url === params.journalEntry),
      };
    },
    mounted() {
      highlightCode();
    },
    head() {
      return {
        meta: [
          { name: 'description', content: this.entry.data.description, hid: 'desc' },
          { name: 'og:description', content: this.entry.data.description, hid: 'og:desc' },
          { name: 'twitter:description', content: this.entry.data.description, hid: 't:desc' },
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
      margin-bottom: .20em;
    }

    h2, h3 {
      margin-bottom: 24px;
      margin-top: 56px;
    }

    pre {
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

    @media screen and (min-width: 750px) {
      padding: 0 10%;
    }
  }
</style>
