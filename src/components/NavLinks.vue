<script type="text/javascript">
export default {
  name: 'NavLinks',
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
    <ul>
      <li v-for="link in links">
        <router-link :to="link.href">{{link.name}}</router-link>
      </li>
    </ul>
</template>

<style scoped type="text/css">
  ul {
    display: flex;
    flex-direction: column;
    height: 40%;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 30px 0 0;
  }

  a {
    font-size: 1.75em;
    font-weight: normal;
    margin: 0 10px 0;
    padding: 5px 5px 0 5px;
  }


  a.router-link-active {
    border-bottom: 2px solid #42b4d6;
  }

  @media screen and (max-width: 1200px) {
    a {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 1100px) {
    ul {
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      padding: 0 10px 0 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    a {
      font-size: 1.2em;
    }
  }
</style>
