<template>
  <div class="">
    <mdb-card ecommerce>
      <mdb-view hover cascade>
        <router-link :to="`/offer/${data.ID}`">
          <mdb-card-image :src="`https://turizm.bitrix24.ru/${image}`" alt="Card image cap" />
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </router-link>
      </mdb-view>
      <mdb-card-body cascade>
        <h5 class="pink-text pb-2 pt-1">
          <mdb-icon icon="clock" />Culinary
        </h5>
        <mdb-card-title>
          <strong>{{ data.NAME }}</strong>
        </mdb-card-title>
        <mdb-card-text>{{ data.DESCRIPTION }}</mdb-card-text>
        <mdb-card-text>{{ data.PRICE }}</mdb-card-text>
        <mdb-btn color="unique">Купить</mdb-btn>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import { mdbLazyLoad } from 'mdbvue'

export default {
  name: 'Card',
  props: {
    data: Object
  },
  directives: {
    mdbLazyLoad
  },
  computed: {
    image () {
      return this.data?.PROPERTY_152?.[0]?.value?.downloadUrl
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
