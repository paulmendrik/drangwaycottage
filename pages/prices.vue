<template>
<div>
<div v-for="(slice, index) in slices" :key="'slice-' + index">
<template v-if="slice.slice_type === 'banner'">
<Banner :slice="slice"/>
</template>
</div>
<Nav/>
<h1 class="uk-heading-primary">{{ $prismic.asText(prices.title) }}</h1>
<div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" :data-src="prices.image.url" uk-img></div>
<h2>Rental Rates</h2>
<div v-for="(slice, index) in slices" :key="'slice-' + index">
<template v-if="slice.slice_type === 'table'">
<Table :slice="slice" />
</template>
</div>
<div class="uk-width-auto uk-child-width-*1-1@s uk-align-center uk-margin-large-bottom">
<iframe  width="576" height="428" frameborder="0" scrolling="yes" allowtransparency="true" src="https://BookingTracker.com/?5369&amp;I">&lt;a title="Availability Calendar" href="https://BookingTracker.com/?5369&amp;P" target="_cal" onclick="window.open('https://BookingTracker.com/?5369&amp;P&amp;'+location.href,'_cal','width=1,height=1,resizable=1').focus();return(false)"&gt;View Availability Calendar&lt;/a&gt;</iframe>
</div>
</div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Banner from "~/components/Banner.vue";
import Table from "~/components/Table.vue";

export default {
  name: "Prices",
  layout: 'prices',
  transition: "page",
  props: ['slice'],
  components: { Nav, Banner, Table },
  head () {
    return {
      title: 'Drangway Cotttage - Prices',
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const prices = (await $prismic.api.getSingle('prices')).data

      return {
        prices,
        slices: prices.body
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>

