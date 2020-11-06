<template>
<div>
<div v-for="(slice, index) in slices" :key="'slice-' + index">
<template v-if="slice.slice_type === 'banner'">
<Banner :slice="slice"/>
</template>
</div>
<Nav/>
<h1 class="uk-heading-primary">{{ $prismic.asText(home.title) }}</h1>
<div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" :data-src="home.image.url" uk-img></div>

  <prismic-rich-text :field="home.content"/>

</div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Banner from "~/components/Banner.vue";

export default {
  name: "Home",
  layout: 'home',
  transition: "page",
  props: ['slice'],
  components: { Nav, Banner },
  head () {
    return {
      title: 'Drangway Cotttage',
    }
  },

  async asyncData({ $prismic, error }) {
    try {
      const home = (await $prismic.api.getSingle('home')).data

      return {
        home,
        slices: home.body
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>



