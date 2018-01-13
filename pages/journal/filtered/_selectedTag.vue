<script type="text/javascript">
import journal from '../../../journal/journal.json';
import tagUtils from '../../../utils';

export default {
  name: 'SelectedTag',
  async asyncData({ payload, params }) {
    return {
      journal:
        payload ||
        journal.filter(
          ({ data: { tags } }) =>
            tags.indexOf(
              tagUtils.formatTagForJournalSearch(params.selectedTag)
            ) > -1
        ),
    };
  },
  methods: {
    capitalize(tag) {
      return tag
        .split(' ')
        .map(word => word[0].toUpperCase().concat(word.slice(1)))
        .join(' ');
    },
    formatTagForUrl: tagUtils.formatTagForUrl,
  },
};
</script>

<template>
  <section>
    <h1 class="section-head">Journal</h1>
    <nuxt-link
      replace
      class="clear-btn"
      :to="'/journal'">
      See All Entries
    </nuxt-link>
    <ul>
      <li v-for="(entry, index) in journal" :key="index">
        <nuxt-link :key="index" :to="`/journal/entry/${entry.data.url}`">
          <h3>{{entry.data.title}}</h3>
          <span class="pub-date">{{entry.data.publicationDate}}</span>
        </nuxt-link>
        <p>{{entry.data.description}}</p>
        <div class="tags">
          <nuxt-link
            v-for="(tag, i) in entry.data.tags"
            class="tag"
            :to="`/journal/filtered/${formatTagForUrl(tag)}`"
            :key="i">
              {{capitalize(tag)}}
          </nuxt-link>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

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
