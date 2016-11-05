<template>
    <ul>
      <li v-for="link in links"><a :href="link.href">{{link.name}}</a></li>
    </ul>
</template>

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
    margin: 0 10px 0;
    padding: 5px;
  }

  a, a:visited {
    color: #bcbcbc;
    list-style: none;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1200px) {
    a {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 1000px) {
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