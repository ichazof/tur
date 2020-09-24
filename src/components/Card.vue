<template>
  <div class="anex-card">
    <mdb-card>
      <mdb-view hover cascade class="">
        <router-link :to="`/offer/${data.ID}`">
          <!-- <img
            :data-src="`https://turizm.bitrix24.ru/${image}`"
            alt="Card image cap"
            class="img-fluid img-rounded "
          />-->
          <div
            class="anex-card__img"
            :style="`background-image: url(https://turizm.bitrix24.ru/${image})`"
          >
          </div>
          <mdb-mask flex-center waves overlay="white-slight" class="anex-card__hov"></mdb-mask>
        </router-link>
      </mdb-view>
      <div class="pt-1 pb-1 pl-3 pr-3">
        <i class="fas fa-star yellow-text" v-for="(star, index) in stars" :key="index" />
        <h5 class>
          <strong>Турция, Мармарис</strong>
        </h5>
        <h6>{{ data.NAME }}</h6>
        <div class="anex-card__price">{{ price }} руб.</div>
        <button type="button" class="btn btn-outline-danger">Купить</button>
      </div>
    </mdb-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: Object
  },

  computed: {
    image () {
      return this.data?.PROPERTY_152?.[0]?.value?.downloadUrl
    },
    stars () {
      return Number(this.data?.PROPERTY_320?.value || 0)
    },
    price () {
      return Number(this.data?.PRICE || 0).toFixed(0)
    },
    nights () {
      return this.data?.PROPERTY_318?.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.anex-card {
  &:hover {
    .anex-card__img {
      background-size: 120% 120%;
    }
  }
  &__img {
    min-height: 200px;
    max-height: 200px;
    // background-size: cover;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transition: 3s;
  }

  &__price {
    font-weight: 700;
  }
}
</style>
