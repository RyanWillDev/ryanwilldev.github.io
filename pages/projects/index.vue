<script type="text/javascript">

  export default {
    name: 'Projects',
  };
</script>

<template>
  <section class="projects-container">
    <h1 class="section-head">Projects</h1>
    <ul class="project-list">
      <li class="project-list-item">
        <div class="project">
          <a href="http://ryanwilldev.com/brew-rank/#/">
            <div class="project-img"></div>
          </a>
          <div class="project-info">
            <h2 class="project-title">BrewRank</h2>
            <p class="project-desc">An app for brew pubs to track the user ratings of their brews.</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
  .projects-container {

    .project-list {
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: space-around;

      .project-list-item {
        display: flex;
        margin-bottom: 56px;

        @media screen and (max-width: 650px) {
          margin-bottom: 56px
        }
      }

     li:nth-of-type(2n) > div {
        flex-direction: row-reverse;
      }

      li:nth-of-type(1n+2) {
        border-top: 2px solid #bcbcbc;
        @media screen and (max-width: 650px) {
          border: none;
        }
      }
    }

    .project {
      border-radius: 5px;
      display: flex;
      height: 200px;
      justify-content: space-around;
      margin-top: 32px;
      position: relative;
      width: 100%;

      @media screen and (max-width: 500px) {
        flex-wrap: wrap;
        justify-content: flex-start;
      }

      a {
        width: 50%;
        @media screen and (max-width: 650px) {
          width: inherit;
        }
      }

      .project-img {
        background-image: url(../../static/BrewRank.png);
        background-size: cover;
        border: 1px solid #bcbcbc;
        border-radius: 5px;
        height: 200px;
        width: 100%;

        &:hover {
          box-shadow: 3px 3px 3px darken(#bcbcbc, 5%)
        }

        @media screen and (max-width: 500px) {
          height: 120px;
          width: 250px;
        }
      }

      .project-info {
        width: 40%;

        @media screen and (max-width: 500px) {
          width: 90%;
        }

        .project-title {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
