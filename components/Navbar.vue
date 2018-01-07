<script type="text/javascript">
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';

export default {
  name: 'NavBar',
  components: {
    NavLinks,
    SocialIcons,
  },
  data() {
    return {
      navbarLinks: [
        { href: '/about', name: 'About' },
        { href: '/projects', name: 'Projects' },
        { href: '/journal', name: 'Journal' },
      ],
      socialIcons: [
        { href: 'https://twitter.com/ryanwilldev', className: 'fa fa-twitter' },
        {
          href: 'https://www.linkedin.com/in/ryanwilldev',
          className: 'fa fa-linkedin',
        },
        { href: 'https://github.com/ryanwilldev', className: 'fa fa-github' },
      ],
    };
  },
  computed: {
    callOutText() {
      if (this.$route.path.indexOf('journal') === 1) {
        return 'Write';
      } else if (this.$route.path.indexOf('projects') === 1) {
        return 'Build';
      }
      return 'Dev';
    },
  },
};
</script>

<template>
  <aside class="nav-container">
     <h2>RyanWill<span id="callout">{{callOutText}}</span></h2>
    <nav>
      <nav-links :links="navbarLinks"></nav-links>
      <social-icons :icons="socialIcons"></social-icons>
    </nav>
  </aside>
</template>

<style lang="scss">
@import '../scss/variables';

.nav-container {
  background-color: #313233;
  height: 100%;
  left: 0;
  padding-bottom: 10px;
  position: fixed;
  top: 0;
  text-align: center;
  max-width: 355px;
  width: 25%;
  z-index: 1;

  a,
  a:visited {
    color: $lightGray;
    list-style: none;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 2px solid $blueAccent;
  }

  a:active {
    border-bottom: 2px solid $blueAccent;
    color: $blueAccent;
  }

  nav {
    height: 100%;
  }

  h2 {
    font-size: 2.5em;
    font-weight: bold;
    margin: 0;
    padding-top: 48px;
  }

  #callout {
    color: $blueAccent;
  }

  @media screen and (max-width: 1100px) {
    align-items: center;
    display: flex;
    height: $navbarHeightMd;
    max-width: 100%;
    width: 100%;

    nav {
      -ms-align-items: center;
      align-items: center;
      display: flex;
      width: 50%;
    }

    h2 {
      margin-right: auto;
      padding: 10px 0 10px 10px;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
  }

  @media screen and (max-width: 699px) {
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    height: 100px;
    justify-content: center;

    nav {
      height: 50px;
    }

    h2 {
      padding: 10px 0 0 0;
      width: 100%;
    }
  }
}
</style>
