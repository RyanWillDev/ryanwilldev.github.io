<template>
  <div class="nav-container">
     <h2>RyanWill<span id="callout">Dev</span></h2>
    <nav>
      <nav-links :links="navbarLinks"></nav-links>
      <social-icons :icons="socialIcons"></social-icons>
    </nav>
  </div>
</template>

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
          { href: '/', name: 'About' },
          { href: '/projects', name: 'Projects' },
          { href: '/blog', name: 'Blog' },
        ],
        socialIcons: [
          { href: 'https://twitter.com/ryanwilldev', className: 'fa fa-twitter' },
          { href: 'https://codepen.io/ryanwilldev', className: 'fa fa-codepen' },
          { href: 'https://github.com/ryanwilldev', className: 'fa fa-github' },
        ],
      };
    },
  };
</script>

<style type="text/css">
  .nav-container {
    background-color: #313233;
    /*-webkit-box-shadow: 3px 0 3px #ccc;
    box-shadow: 3px 0 3px  #ccc;*/
    height: 100%;
    position: fixed;
    top: 0;
    text-align: center;
    width: 24%;
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
  
  /*@media screen and (max-width: 1200px) {
    h2 {
      font-size: 2em;
    }
  }*/

  @media screen and (max-width: 1000px) {
    .nav-container {
      align-items: center;
      display: flex;
      height: 10%;
      width: 100%;
    }

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

  @media screen and (max-width: 600px) {
    .nav-container {
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -moz-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      -o-flex-wrap: wrap;
      height: 15%;
      justify-content: center;
    }

    nav {
      height: inherit;
    }

    h2 {
      margin-right: 0;
      padding: 10px 0 0 0;
    }
  }
</style>