import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ed6087e = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _ec74b156 = () => interopDefault(import('../pages/activities.vue' /* webpackChunkName: "pages/activities" */))
const _6bf51168 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _28e0a54a = () => interopDefault(import('../pages/cottage.vue' /* webpackChunkName: "pages/cottage" */))
const _2d2d08cc = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _f83cd59c = () => interopDefault(import('../pages/prices.vue' /* webpackChunkName: "pages/prices" */))
const _52534dcc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _4ed6087e,
    name: "prismic-preview"
  }, {
    path: "/activities",
    component: _ec74b156,
    name: "activities"
  }, {
    path: "/contact",
    component: _6bf51168,
    name: "contact"
  }, {
    path: "/cottage",
    component: _28e0a54a,
    name: "cottage"
  }, {
    path: "/gallery",
    component: _2d2d08cc,
    name: "gallery"
  }, {
    path: "/prices",
    component: _f83cd59c,
    name: "prices"
  }, {
    path: "/",
    component: _52534dcc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
