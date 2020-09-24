<template>
  <div id="app">
    <div class="container header">
      <div class="header__logo"><img src="/static/img/logo.jpg"/></div>
      <div class="header__phone"></div>
      <div class="header__time"></div>
      <div class="header__mail"></div>
      <div class="header__social"></div>
    </div>
    <div id="nav">
      <router-link to="/">На главную</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  display: grid;
}
</style>
