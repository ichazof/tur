<template>
  <div id="app">
    <!-- <div class="container header">
      <div class="header__logo">
        <router-link to="/"><img src="./static/logo.jpg" /></router-link>
      </div>
      <div class="header__phone">
        <i class="text-danger fas fa-mobile-alt"></i>
        <div class="title">Звоните нам</div>
        <div class="content">+73422250996</div>
      </div>
      <div class="header__time">
        <i class="text-danger far fa-clock"></i>
        <div class="title">мы работаем</div>
        <div class="content">24 часа</div>
      </div>
      <div class="header__mail">
        <i class="text-danger far fa-envelope"></i>
        <div class="title">email</div>
        <div class="content">point1@alyans.ru</div>
      </div>
      <div class="header__social">
        <a class="btn-floating btn-sm btn-tw" type="button" role="button"
          ><i class="fab fa-twitter"></i
        ></a>
        <a class="btn-floating btn-sm btn-tw" type="button" role="button"
          ><i class="fab fa-twitter"></i
        ></a>
        <a class="btn-floating btn-sm btn-tw" type="button" role="button"
          ><i class="fab fa-twitter"></i
        ></a>
        <a class="btn-floating btn-sm btn-tw" type="button" role="button"
          ><i class="fab fa-twitter"></i
        ></a>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">На главную</router-link>
    </div> -->
    <router-view />
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import Footer from '@/components/Footer'
export default {
  components: {
    // Footer
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

$image-path: "~@/../mdb/mdbvue/img";
@import "~@/../mdb/mdbvue/scss/mdb-free.scss";

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.header {
  padding-top: 10px;
  display: grid;
  row-gap: 12px;
  justify-items: center;
  grid-template-areas:
        "logo"
        "phone"
        "time"
        "mail"
        "social";
  @media screen and (min-width: 480px) {
    // justify-items: start;
    grid-template-columns: 1fr 200px;
    grid-template-areas:
          "logo phone"
          "logo time"
          "social mail";
  }
  @media screen and (min-width: 640px) {
    padding-top: 20px;

    grid-template-areas:
          "logo phone time "
          "social mail time ";
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    grid-template-areas: "logo phone time mail social";
  }
  @media screen and (min-width: 1200px) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  }
  &__phone,
  &__time,
  &__mail {
    display: grid;
    grid-template-areas:
      "title"
      "cont";
    @media screen and (min-width: 480px) {
      justify-self: start;
      column-gap: 12px;
      grid-template-areas:
        "icon title"
        "icon cont";
    }
    @media screen and (min-width: 960px) {
      justify-self: center;
    }
    @media screen and (min-width: 1200px) {
      column-gap: 12px;
      grid-template-areas:
        "icon title"
        "icon cont";
    }

    .content {
      grid-area: cont;
      font-weight: 700;
      justify-self: center;
      @media screen and (min-width: 480px) {
        justify-self: start;
      }
      align-self: baseline;
    }
    .title {
      text-transform: uppercase;
      grid-area: title;
      @media screen and (min-width: 480px) {
        justify-self: start;
      }
      justify-self: center;
      align-self: end;
    }
    i {
      grid-area: icon;
      justify-self: end;
      align-self: center;
      display: none;
      @media screen and (min-width: 480px) {
        display: block;
      }
    }
  }
  &__social {
    grid-area: social;
    align-self: center;
  }
  &__mail {
    grid-area: mail;
  }
  &__phone {
    grid-area: phone;
  }
  &__time {
    grid-area: time;
  }
  &__logo {
    grid-area: logo;
  }
}
</style>
