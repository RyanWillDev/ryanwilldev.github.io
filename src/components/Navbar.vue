<template>
  <div>
     <h2>RyanWill<span id="callout">Dev</span></h2>
    <nav>
      <nav-links :links="navbarLinks"></nav-links>
    </nav>
  </div>
</template>

<script type="text/javascript">
  import NavLinks from './NavLinks';

  export default {
    name: 'navBar',
    components: {
      NavLinks,
    },
    data() {
      return {
        navbarLinks: [
          { href: '/', name: 'About' },
          { href: '/projects', name: 'Projects' },
          { href: '/blog', name: 'Blog' },
        ],
      };
    },
  };
</script>
<style type="text/css">
  #callout {
    color: #42b4d6;
  }
</style>