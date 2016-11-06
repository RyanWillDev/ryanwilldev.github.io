<script type="text/javascript">
  export default {
    name: 'SocialIcons',
    props: {
      icons: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<template>
  <ul class="lg-only">
    <li v-for="icon in icons"><a :href="icon.href"><i :class="icon.className"></i></a></li>
  </ul>
</template>

<style scoped type="text/css">
  ul {
    bottom: 30px;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 0;
    position: absolute;
    width: 100%;
  }

  li {
    list-style: none;
  }

  a {
    padding: 5px;
  }

  i {
    color: #bcbcbc;
    font-size: 1.5em;
  }

  @media screen and (max-width: 1000px) {
    .lg-only {
      display: none;
    }
  }
</style>