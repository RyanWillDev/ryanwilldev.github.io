<script type="text/javascript">
  import hljs from 'highlight.js';

  import journal from '../journal/journal.json';
  import { setMetaDescriptions } from '../tools/updateDescriptions';

  function highlightCode() {
    const code = document.querySelectorAll('code'); // eslint-disable-line
    code.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  export default {
    name: 'JournalEntry',
    data() {
      return {
        entry: journal.find(curr => curr.data.url === this.$route.params.entryUrl),
      };
    },
    beforeMount() {
      setMetaDescriptions(this.entry.data.description);
    },
    mounted() {
      highlightCode();
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
      code.javascript {
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

    @media screen and (min-width: 750px) {
      padding: 0 10%;
    }
  }
</style>
