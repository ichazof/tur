<template>
  <div class="offer container">
    <div :class="['offer__wrapper', 'animated', {'animate__fadeIn': isLoading }]">
      <div class="offer__info">
        <i class="fas fa-star yellow-text" v-for="(star, index) in stars" :key="index" />
        <div class="offer__hotel mt-2">
          {{ name }}
        </div>
        <div class="offer__description mt-2">
          {{ description }}
        </div>
      </div>

    <mdb-carousel
    slide
    :items="imgs"
    :interval="4000"
    indicators
  ></mdb-carousel>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Offer',
  props: {
    id: String
  },
  components: {

  },
  data: function () {
    return {
      data: {},
      imgs: [],
      isLoading: false
    }
  },
  computed: {
    stars () {
      return Number(this.data?.PROPERTY_320?.value || 0)
    },
    description () {
      return this.data?.DESCRIPTION || ''
    },
    name () {
      return this.data?.NAME || ''
    }
  },
  mounted () {
    this.axios.get(`https://anexkrk.alyans.ru/site/get-product.php?id=${this.id}`).then((response) => {
      this.data = response.data
      this.imgs = this.data?.PROPERTY_152?.map((el) => {
        console.log(el)
        const src = 'https://turizm.bitrix24.ru/' + el?.value?.downloadUrl
        const x = {
          img: true,
          src,
          mask: 'black-light',
          alt: 'First Slide'
        }
        return x
      })
      this.isLoading = true
    })
  }
}
</script>

<style lang="scss" scoped>
.offer {
  &__wrapper {
    display: grid;
      grid-template-columns: 1fr;
      grid-gap: 30px;
    @media screen and (min-width: 640px) {
      grid-template-columns: 2fr 3fr;
    }
  }
  &__info {
    align-self: center;
    padding-bottom: 80px;
  }
  &__hotel {
    font-weight: 700;
    font-size: 26px;
  }
  &__description {
    text-align: left;
  }
}
</style>
