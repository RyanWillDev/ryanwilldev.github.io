<script type="text/javascript">
import NavBar from '../components/Navbar';
import FormattedPage from '../components/FormattedPage';

export default {
  components: {
    NavBar,
    FormattedPage,
  },
};
</script>

<template>
  <div>
    <NavBar />
    <formatted-page>
      <nuxt/>
    </formatted-page>
  </div>
</template>

<style lang="scss">
body,
html {
  color: #bcbcbc;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  li {
    list-style: none;
    padding: 0;
  }
}
</style>
