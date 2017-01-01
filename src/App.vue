<template>
<div id="app-container">
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

#app-container {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.section-head {
    margin: 5% 0;
  }

@media screen and (max-width: 500px) {
  .section-head {
    text-align: center;
  }
}
</style>
