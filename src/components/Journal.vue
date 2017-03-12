<script type="text/javascript">
  import journal from '../journal/journal.json';

  export default {
    name: 'Journal',
    data() {
      return {
        journal,
      };
    },
    methods: {
      capitalize(tag) {
        return tag.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
      },
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
        <div class="tags">
          <span v-for="tag in entry.data.tags" class="tag">{{capitalize(tag)}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 32px 0;
    }
  } 

  h3 {
    color: #313233;
    margin: 0;
  }

  a {
    color: #313233;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
  p {
    margin-top: 8px;
  }

  .tag {
    background-color: #bcbcbc;
    border-radius: 5px;
    font-size: .8em;
    font-weight: bold;
    margin-right: 8px;
    padding: 5px;
  }
</style>