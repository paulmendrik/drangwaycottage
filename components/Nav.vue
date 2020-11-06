<template>
<div>
<nav class="uk-navbar-container" uk-navbar>
<div class="uk-navbar-left">
<ul class="uk-navbar-nav uk-visible@m">
<li><nuxt-link to="/">Home</nuxt-link></li>
<li><nuxt-link to="cottage">The Cottage</nuxt-link></li>
<li><nuxt-link to="gallery">Gallery</nuxt-link></li>
<li><nuxt-link to="activities">Things To Do</nuxt-link></li>
<li><nuxt-link to="prices">Prices/Availability</nuxt-link></li>
<li><nuxt-link to="contact">Contact</nuxt-link></li>
</ul>
</div>
<div class="uk-navbar-right uk-hidden@m">
<a class="uk-navbar-toggle" uk-navbar-toggle-icon href="#" uk-toggle="target: #menu"></a>
</div>
</nav>

<div id="menu" uk-offcanvas="overlay: true">
<div class="uk-offcanvas-bar">
<button class="uk-offcanvas-close" type="button" uk-close></button>
<ul class="uk-nav uk-nav-default">
<li><nuxt-link to="/">Home</nuxt-link></li>
<li><nuxt-link to="cottage">The Cottage</nuxt-link></li>
<li><nuxt-link to="gallery">Gallery</nuxt-link></li>
<li><nuxt-link to="activities">Things To Do</nuxt-link></li>
<li><nuxt-link to="prices">Prices/Availability</nuxt-link></li>
<li><nuxt-link to="contact">Contact</nuxt-link></li>
</ul>
</div>
</div>

</div>
</template>

