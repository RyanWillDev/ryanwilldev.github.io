<template>
<div id="app">
  <navbar></navbar>
  <my-content></my-content>
</div>
</template>

<script>
import Navbar from './components/Navbar';
import MyContent from './components/MyContent';

export default {
  name: 'app',
  components: {
    Navbar,
    MyContent,
  },
};
</script>

<style>
body, html {
  color: #bcbcbc;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
