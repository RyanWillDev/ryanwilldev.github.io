<script type="text/javascript">
  import journal from '../journal/journal.json';

  export default {
    name: 'Journal',
    data() {
      return {
        journal,
      };
    },
  };
</script>

<template>
  <section>
    <h1 class="section-head">Journal</h1>
    <ul>
      <li v-for="entry in journal">
        <router-link :to="entry.data.url" append><h3>{{entry.data.title}}</h3></router-link>
        <p>{{entry.data.description}}</p>
      </li>
    </ul>
  </section>
</template>

<style type="text/css"></style>