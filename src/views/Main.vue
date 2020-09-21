<template>
  <div class="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png" :class="['animated', {'animate__bounceIn': flag }]" @click="flag = !flag"> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" class="wow animate__bounceIn" > -->

    <div class>
      <div class="main__cards container">
        <div v-for="(tur, index) in turs" :key="index" class="">
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
      turs: []
    }
  },
  mounted () {
    this.axios.get('https://anexkrk.alyans.ru/site/').then((response) => {
      this.turs = response.data.result
      this.turs = [
        ...this.turs,
        ...this.turs,
        ...this.turs,
        ...this.turs,
        ...this.turs
      ]
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
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>>
