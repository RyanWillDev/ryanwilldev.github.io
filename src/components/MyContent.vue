<script type="text/javascript">
  export default {
    name: 'MyContent',
  };
</script>

<template>
  <div class="my-content-container">
    <router-view></router-view>
  </div>
</template>

<style type="text/css">
  .my-content-container {
    align-self: flex-end;
    color: #313233;
    font-size: 1.10em;
    line-height: 1.25;
    margin-right: 20px;
    padding: 10px;
    width: 70%;
  }

  @media screen and (max-width: 1000px) {
    .my-content-container {
      align-self: center;
      width: 90%;
      margin: 90px 0 0 0;
    }
  }

  @media screen and (max-width: 600px) {
    .my-content-container {
      margin: 120px 0 0 0;
    }
  }
</style>