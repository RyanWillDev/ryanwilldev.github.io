<script type="text/javascript">
  export default {
    name: 'About',
  };
</script>

<template>
  <div class="about-container">
    <h1>Who is Ryan Will?</h1>
    <p>I am a passionate and motivated self taught web developer from Middle Tennessee. I currently work at <a href="https://metova.com">Metova</a> and specialize in making rich and interactive web applications using modern techniques and technologies. </p>
    <p>I am proficient with JavaScript, and have experience with popular frameworks and libraries such as Node, React, Vue, and Angular. If you'd like to know more, just <a href="https://twitter.com/ryanwilldev">ask</a>!</p>
  </div>
</template>

<style type="text/css" scoped>
  h1 {
    margin: 5% 0;
  }

  a {
    color: #42b4d6;
    font-weight: bold;
  }

  p {
    font-size: 1.15em;
    text-indent: 20px;
  }

  @media screen and (min-width: 1000px) {
    .about-container {
      padding: 0 30px 0;
    }

    p {
      padding: 10px 20px 0;
    }
  }
</style>