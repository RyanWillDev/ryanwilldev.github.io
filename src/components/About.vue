<script type="text/javascript">
  export default {
    name: 'About',
  };
</script>

<template>
  <section class="about-container">
    <h1 class="section-head">Who is Ryan Will?</h1>
    <p>I am a passionate and motivated self taught web developer from Middle Tennessee. I currently work at <a target="_blank" href="https://metova.com">Metova</a>
      and specialize in making rich and interactive web applications using modern techniques and technologies.
    </p>
    
    <p>I am proficient with JavaScript, and have experience with popular frameworks and libraries such as Node, React, Redux, Vue, and Angular.
      I am currently working on expanding my knowledge of computer science in general to become a better software engineer.
      You can check out some of my work <a href="https://github.com/ryanwilldev">here</a>.
      If you'd like to know more, just <a target="_blank" href="https://twitter.com/intent/tweet/?screen_name=RyanWillDev">ask</a>!
    </p>
  </section>
</template>

<style type="text/css" scoped>

  p {
    font-size: 1.15em;
    text-indent: 20px;
  }

  @media screen and (min-width: 1000px) {
    .about-container {
      padding: 0;
    }

    p {
      padding: 10px 0;
    }
  }
</style>
