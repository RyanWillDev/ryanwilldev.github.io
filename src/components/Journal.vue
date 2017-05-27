<script type="text/javascript">
  export default {
    name: 'Journal',
    data() {
      return {
        selectedTag: '',
      };
    },
    props: {
      journal: Array,
    },
    methods: {
      capitalize(tag) {
        return tag.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
      },

      updateSelectedTag(tag) {
        this.selectedTag = tag;
      },

      filteredEntries() {
        if (this.selectedTag.length) {
          return this.journal.filter(entry => entry.data.tags.includes(this.selectedTag));
        }

        return this.journal;
      },
    },
  };
</script>

<template>
  <section>
    <h1 class="section-head">Journal</h1>
    <span class="clear-btn" v-show="selectedTag" @click="updateSelectedTag('')">See All Entries</span>
    <ul>
      <li v-for="entry in filteredEntries()">
        <router-link :to="entry.data.url" append><h3>{{entry.data.title}}</h3></router-link>
        <p>{{entry.data.description}}</p>
        <div class="tags">
          <span class="tag" v-for="tag in entry.data.tags" @click="updateSelectedTag(tag)">{{capitalize(tag)}}</span>
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

  .tags {
    @media screen and (max-width: 500px) {
      display: flex;
      flex-wrap: wrap;

      .tag {
        margin-top: 8px;
      }
    }
  }

  .clear-btn {
    width: 15%;
    align-self: flex-end;
    text-align: center;
  }

  .clear-btn, .tag {
    background-color: #bcbcbc;
    border-radius: 5px;
    cursor: pointer;
    font-size: .8em;
    font-weight: bold;
    margin-right: 8px;
    padding: 5px;

    &:hover {
      padding: 8px;
      text-decoration: underline;
    }
  }
</style>
