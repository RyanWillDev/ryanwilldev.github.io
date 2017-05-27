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
          { href: 'https://codepen.io/ryanwilldev', className: 'fa fa-codepen' },
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
  .nav-container {
    background-color: #313233;
    height: 100%;
    padding-bottom: 10px;
    position: fixed;
    top: 0;
    text-align: center;
    width: 24%;
    z-index: 1;

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
      color: #42b4d6;
    }

    @media screen and (max-width: 1100px) {
      align-items: center;
      display: flex;
      height: 8%;
      width: 100%;

      nav {
        -ms-align-items: center;
        align-items: center;
        display: flex;
        width: 50%
      }

      h2 {
        margin-right: auto;
        padding: 10px 0 10px 10px;
      }
    }

    @media screen and (max-width: 800px) {
      align-items: center;
      display: flex;
      height: 10%;
      width: 100%;
    }

    @media screen and (max-width: 620px) {
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -moz-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      -o-flex-wrap: wrap;
      height: 15%;
      justify-content: center;

      nav {
        height: inherit;
      }

      h2 {
        margin-right: 0;
        padding: 10px 0 0 0;
      }
    }

    @media screen and (orientation: landscape) and (max-width: 1000px) {
      padding: 10px 0;
    }
  }

</style>
