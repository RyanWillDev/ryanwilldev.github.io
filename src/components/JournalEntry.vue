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
<div class="entry-container">
  <div v-html="entry.html"></div>
</div>
</template>

<style lang="scss">
  .entry-container {
    pre {
      code.javascript {
      border-radius: 5px;
      margin: 24px 0;
      width: 90%;
      }
    }
  }
</style>
