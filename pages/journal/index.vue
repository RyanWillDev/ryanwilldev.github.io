<script type="text/javascript">
import journal from '../../journal/journal.json';

export default {
  name: 'Journal',
  props: {
    journal: Array,
  },
  methods: {
    capitalize(tag) {
      return tag
        .split(' ')
        .map(word => word[0].toUpperCase().concat(word.slice(1)))
        .join(' ');
    },

    filteredEntries() {
      if (!this.$route.query.tag) return journal;

      return journal.filter(entry =>
        entry.data.tags.includes(this.$route.query.tag),
      );
    },
  },
  computed: {
    tagSelected() {
      return !!this.$route.query.tag;
    },
  },
};
</script>

<template>
  <section>
    <h1 class="section-head">Journal</h1>
    <nuxt-link
      replace
      class="clear-btn"
      v-show="tagSelected"
      :to="'/journal'">
      See All Entries
    </nuxt-link>
    <ul>
      <li v-for="(entry, index) in filteredEntries()" :key="index">
        <nuxt-link :to="entry.data.url" append>
          <h3>{{entry.data.title}}</h3>
          <span class="pub-date">{{entry.data.publicationDate}}</span>
        </nuxt-link>
        <p>{{entry.data.description}}</p>
        <div class="tags">
          <nuxt-link
            class="tag"
            :to="{ query: { tag: tag } }"
            v-for="(tag, i) in entry.data.tags"
            :key="i">
              {{capitalize(tag)}}
          </nuxt-link>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 32px 0;
  }
}

h3 {
  color: $offBlack;
  display: inline-block;
  margin: 0 12px 0 0;
}

a {
  color: $offBlack;
  text-decoration: none;

  &:hover {
    & h3 {
      text-decoration: underline;
    }
  }
}

p {
  margin-top: 8px;
}

.tags {
  .tag {
    height: 100%;
  }

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

.clear-btn,
.tag {
  background-color: $lightGray;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: bold;
  margin-right: 8px;
  padding: 5px;

  &:hover {
    padding: 8px;
    text-decoration: underline;
  }
}

.pub-date {
  color: lighten($offBlack, 30%);
  font-size: 0.85em;
  margin-top: 8px;
}
</style>
