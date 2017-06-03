<script type="text/javascript">
  import { resetDescriptions } from '../tools/updateDescriptions';

  export default {
    name: 'MyContent',
    props: {
      journal: Array,
    },
    watch: {
      $route: (unusedNewRoute, oldRoute) => {
        if (oldRoute.path.includes('journal')
            && Object.keys(oldRoute.params).length) {
          resetDescriptions();
        }
      },
    },
  };
</script>

<template>
  <div class="my-content-container">
    <router-view :journal="this.journal"></router-view>
  </div>
</template>

<style type="text/css">
  .my-content-container {
    align-self: flex-end;
    color: #313233;
    font-size: 1.10em;
    line-height: 1.25;
    margin: 4% 3% 0 0;
    padding: 10px;
    width: 70%;
  }

  a {
      color: #42b4d6;
      font-weight: bold;
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
