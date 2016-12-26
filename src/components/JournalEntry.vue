<script type="text/javascript">
/*eslint-disable*/
  import hljs from 'highlight.js';

  import journal from '../journal/journal.json';

  function highlightCode() {
    const code = document.querySelectorAll('code');
    console.log(code);
    code.forEach((block) => {
      console.log(block);
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
<div>
  <h1>{{ entry.data.title }}</h1>
  <div v-html="entry.html"></div>
</div>
</template>

<style type="text/css">
  
</style>