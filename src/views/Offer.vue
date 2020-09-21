<template>
  <div class="about">
    <mdb-carousel
    slide
    :items="imgs"
    :interval="2000"
    indicators
  ></mdb-carousel>
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
      imgs: []
    }
  },
  computed: {
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
    })
  }
}
</script>
