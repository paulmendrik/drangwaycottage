<template>
  <main class="home">
<div class="uk-container">
<Nuxt/>
<Footer/>
</div>
  </main>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: { Footer }
};
</script>

