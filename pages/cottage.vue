<template>
<div>
<div v-for="(slice, index) in slices" :key="'slice-' + index">
<template v-if="slice.slice_type === 'banner'">
<Banner :slice="slice"/>
</template>
</div>
<Nav/>
<h1 class="uk-heading-primary">{{ $prismic.asText(cottage.title) }}</h1>
<div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" :data-src="cottage.image.url" uk-img></div>

<div class="uk-grid-collapse uk-margin-top" uk-grid>

<div class="uk-width-1-4 uk-flex-last">
<prismic-image :field="cottage.contentimage01" class="uk-margin-bottom" uk-img/>
  <prismic-image :field="cottage.contentimage02" class="uk-margin-bottom" uk-img/>
</div>

<div class="uk-width-3-4 uk-flex-first">
  <prismic-rich-text :field="cottage.content"/>
</div>

</div>



</div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Banner from "~/components/Banner.vue";

export default {
  name: "Cottage",
  layout: 'cottage',
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
      const cottage = (await $prismic.api.getSingle('cottage')).data

      return {
        cottage,
        slices: cottage.body
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>


