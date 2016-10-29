<template>
    <ul>
      <li v-for="link in links"><a v-bind:href="link.href">{{link.name}}</a></li>
    </ul>
</template>

<script type="text/javascript">
  export default {
    name: 'navLinks',
    props: {
      links: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped type="text/css">
  li, li a, li:visited {
    color: black;
    list-style: none;
    text-decoration: none;
  }
</style>