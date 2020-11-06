<template>
  <div>
    <div v-for="(slice, index) in slices" :key="'slice-' + index">
      <template v-if="slice.slice_type === 'banner'">
        <Banner :slice="slice"/>
      </template>
    </div>
    <Nav/>

<h1 class="uk-heading-primary">{{ $prismic.asText(contact.title) }}</h1>
<div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" :data-src="contact.image.url" uk-img></div>
<div class="uk-grid-collapse uk-margin-top" uk-grid>
<div class="uk-width-1-4 uk-flex-last">

<prismic-image :field="contact.contentimage01" class="uk-margin-bottom" uk-img/>
<prismic-image :field="contact.contentimage02" class="uk-margin-bottom" uk-img/>

</div>
<div class="uk-width-3-4 uk-flex-first">
<prismic-rich-text :field="contact.content"/>
</div>
</div>

</div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Banner from "~/components/Banner.vue";

export default {
  name: "Contact",
  layout: 'contact',
  transition: "page",
  props: ['slice'],
  components: { Nav, Banner },
  head () {
    return {
      title: 'Drangway Cotttage - Contact',
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const contact = (await $prismic.api.getSingle('contact')).data

      return {
        contact,
        slices: contact.body
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>

