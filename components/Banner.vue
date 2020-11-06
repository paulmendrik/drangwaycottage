<template>
<header class="uk-grid uk-margin-bottom" ukgrid>
<div  v-for="(item, i) in slice.items" :key="i"  class="uk-width-1-4">
  <prismic-image :field="item.image" uk-img/>
</div>
</header>
</template>

<script>
export default {
  props: ['slice'],
  name: 'Banner'
}
</script>
<style>
img {
  width: 100% !important ;
}
</style>
