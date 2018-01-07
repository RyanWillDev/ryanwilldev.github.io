<script>
export default {
  name: 'FormattedPage',
};
</script>

<template>
  <section class="formatted-page">
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import '../scss/variables';

.formatted-page {
  color: $offBlack;
  font-size: 1.1em;
  line-height: 1.25;
  margin-top: 2.5%;
  text-align: left;

  a {
    color: $blueAccent;
    font-weight: bold;
    text-decoration: underline;
  }

  @media screen and (min-width: 1100px) {
    margin: 48px 3% 0 calc(#{$maxNavbarWidthL} + 2%);
    width: 70%;
  }
}
</style>





