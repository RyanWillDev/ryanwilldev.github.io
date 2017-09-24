<script type="text/javascript">
//   import { resetDescriptions } from '../tools/updateDescriptions';

// TODO: See how to update the head data based on the page the user is on
  import NavBar from "../components/Navbar";
  export default {
    components: {
        NavBar,
    },
  };
</script>

<template>
  <div>
    <NavBar />
    <div class="my-content-container">
      <nuxt/>
    </div>
  </div>
</template>

<style type="scss">
  .my-content-container {
    align-self: flex-end;
    color: #313233;
    font-size: 1.10em;
    line-height: 1.25;
    padding: 10px;
    width: 70%;

    @media screen and (min-width: 1100px) {
      margin: 4% 3% 0 calc(50px + 24%);
    }
  }

  a, a:hover {
      color: #42b4d6;
      font-weight: bold;
    }

    body, html {
    color: #bcbcbc;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


.section-head {
  font-size: 2em;
  margin: 5% 0;
}

ul, li{
  padding: 0;
}

li {
  list-style: none;
}

@media screen and (max-width: 500px) {
  .section-head {
    text-align: center;
  }
}

  @media screen and (max-width: 1100px) {
    .my-content-container {
      align-self: center;
      margin-top: 10%;
      width: 90%;
    }
  }

  @media screen and (max-width: 600px) {
    .my-content-container {
      margin-top: 40%;
    }
  }

  @media screen and (max-width: 400px) {
    .my-content-container {
      font-size: .95em;
    }
  }

  @media screen and (orientation: landscape) and (max-width: 1000px) {
    .my-content-container {
      margin-top: 60px;
    }
  }
</style>
