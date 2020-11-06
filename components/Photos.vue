<template>
<div class="uk-child-width-1-4 uk-grid-collapse uk-margin-bottom" uk-grid uk-lightbox="animation: slide">
<div  v-for="(item, i) in slice.items" :key="i" class="uk-margin-small-bottom">
<a class="uk-inline" :href="item.image.url">
<prismic-image :field="item.image" uk-img/>
</a>
</div>
</div>

</template>

<script>
export default {
  props: ['slice'],
  name: 'Photos'
}
</script>

