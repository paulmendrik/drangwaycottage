<template>
<div>
<div v-for="(slice, index) in slices" :key="'slice-' + index">
<template v-if="slice.slice_type === 'banner'">
<Banner :slice="slice"/>
</template>
</div>
<Nav/>

<h1 class="uk-heading-primary">{{ $prismic.asText(activities.title) }}</h1>
<div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" :data-src="activities.image.url" uk-img></div>

<prismic-rich-text :field="activities.content"/>



  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Banner from "~/components/Banner.vue";

export default {
  name: "Activities",
  layout: 'activities',
  transition: "page",
  props: ['slice'],
  components: { Nav, Banner },
  head () {
    return {
      title: 'Drangway Cotttage - Activities',
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const activities = (await $prismic.api.getSingle('activities')).data

      return {
        activities,
        slices: activities.body
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>
<style>
</style>
