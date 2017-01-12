<script type="text/javascript">
/*eslint-disable*/
  import hljs from 'highlight.js';

  import journal from '../journal/journal.json';

  function highlightCode() {
    const code = document.querySelectorAll('code');
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
    mounted() {
      highlightCode();
    }
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
      width: 90%;
      }
    }
  } 
</style>