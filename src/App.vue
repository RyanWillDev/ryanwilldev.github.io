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

a, a:visited {
  color: #bcbcbc;
  list-style: none;
  text-decoration: none;
}

a:hover {
  border-bottom: 2px solid #bcbcbc;
}

a:active {
  border-bottom: 2px solid #42b4d6;
  color: #42b4d6;
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
