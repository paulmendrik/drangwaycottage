<template>
<div>
<div v-for="(slice, index) in slices" :key="'slice-' + index">
<template v-if="slice.slice_type === 'banner'">
<Banner :slice="slice"/>
</template>
</div>
<Nav/>
<h1 class="uk-heading-primary">{{ $prismic.asText(gallery.title) }}</h1>

<div v-for="(slice, index) in slices" :key="'slice-' + index">
<template v-if="slice.slice_type === 'gallery'">
<Photos :slice="slice"/>
</template>
</div>


</div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Banner from "~/components/Banner.vue";
import Photos from "~/components/Photos.vue";

export default {
  name: "Gallery",
  layout: 'gallery',
  transition: "page",
  props: ['slice'],
  components: { Nav, Banner, Photos },
  head () {
    return {
      title: 'Drangway Cotttage - Photo Gallery',
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const gallery = (await $prismic.api.getSingle('gallery')).data

      return {
        gallery,
        slices: gallery.body
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>

