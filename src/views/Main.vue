<template>
  <div class="main container">
    <!-- <img alt="Vue logo" src="../assets/logo.png" :class="['animated', {'animate__bounceIn': flag }]" @click="flag = !flag"> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" class="wow animate__bounceIn" > -->
    <h1 class="d-flex justify-content-start">Горящие туры</h1>
    <div class="mt-4">
      <div :class="['animated main__cards d-flex justify-content-center', {'animate__zoomOut': isLoading }]" v-show="!isLoading">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div :class="['animated main__cards ', {'animate__fadeInLeft': isLoading }]" v-show="isLoading">
        <div
          v-for="(tur, index) in turs"
          :key="index"
          :class="['animated', {'animate__fadeIn': isLoading }]"
        >
          <Card :data="tur"></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Main',
  components: {
    Card
  },
  data: function () {
    return {
      turs: [],
      isLoading: false
    }
  },
  mounted () {
    this.axios.get('https://anexkrk.alyans.ru/site/').then((response) => {
      this.turs = response.data.result
      this.turs = [...this.turs, ...this.turs]
      this.isLoading = true
    })
  }
}
</script>

<style lang="scss">
@import "~animate.css";
.main {
  &__cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
    @media screen and (min-width: 480px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 1200px) {
      grid-gap: 16px;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>>
