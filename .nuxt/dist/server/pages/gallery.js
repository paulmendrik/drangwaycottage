exports.ids = [4];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("20a14262", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "img{width:100%!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner.vue?vue&type=template&id=19ce6ee8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"uk-grid uk-margin-bottom",attrs:{"ukgrid":""}},_vm._l((_vm.slice.items),function(item,i){return _vm._ssrNode("<div class=\"uk-width-1-4\">","</div>",[_c('prismic-image',{attrs:{"field":item.image,"uk-img":""}})],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Banner.vue?vue&type=template&id=19ce6ee8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  props: ['slice'],
  name: 'Banner'
});
// CONCATENATED MODULE: ./components/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "734b0dd4"
  
)

/* harmony default export */ var Banner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Nav.vue?vue&type=template&id=63770206&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav uk-navbar class=\"uk-navbar-container\">","</nav>",[_vm._ssrNode("<div class=\"uk-navbar-left\">","</div>",[_vm._ssrNode("<ul class=\"uk-navbar-nav uk-visible@m\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"cottage"}},[_vm._v("The Cottage")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"gallery"}},[_vm._v("Gallery")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"activities"}},[_vm._v("Things To Do")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"prices"}},[_vm._v("Prices/Availability")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"contact"}},[_vm._v("Contact")])],1)],2)]),_vm._ssrNode(" <div class=\"uk-navbar-right uk-hidden@m\"><a uk-navbar-toggle-icon href=\"#\" uk-toggle=\"target: #menu\" class=\"uk-navbar-toggle\"></a></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"menu\" uk-offcanvas=\"overlay: true\">","</div>",[_vm._ssrNode("<div class=\"uk-offcanvas-bar\">","</div>",[_vm._ssrNode("<button type=\"button\" uk-close class=\"uk-offcanvas-close\"></button> "),_vm._ssrNode("<ul class=\"uk-nav uk-nav-default\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"cottage"}},[_vm._v("The Cottage")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"gallery"}},[_vm._v("Gallery")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"activities"}},[_vm._v("Things To Do")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"prices"}},[_vm._v("Prices/Availability")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"contact"}},[_vm._v("Contact")])],1)],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Nav.vue?vue&type=template&id=63770206&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Nav.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79630baa"
  
)

/* harmony default export */ var Nav = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery.vue?vue&type=template&id=28002d6e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.slices),function(slice,index){return _vm._ssrNode("<div>","</div>",[(slice.slice_type === 'banner')?[_c('Banner',{attrs:{"slice":slice}})]:_vm._e()],2)}),_vm._ssrNode(" "),_c('Nav'),_vm._ssrNode(" <h1 class=\"uk-heading-primary\">"+_vm._ssrEscape(_vm._s(_vm.$prismic.asText(_vm.gallery.title)))+"</h1> "),_vm._l((_vm.slices),function(slice,index){return _vm._ssrNode("<div>","</div>",[(slice.slice_type === 'gallery')?[_c('Photos',{attrs:{"slice":slice}})]:_vm._e()],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=template&id=28002d6e&

// EXTERNAL MODULE: ./components/Nav.vue + 2 modules
var Nav = __webpack_require__(34);

// EXTERNAL MODULE: ./components/Banner.vue + 4 modules
var Banner = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Photos.vue?vue&type=template&id=4f539818&
var Photosvue_type_template_id_4f539818_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"uk-child-width-1-4 uk-grid-collapse uk-margin-bottom",attrs:{"uk-grid":"","uk-lightbox":"animation: slide"}},_vm._l((_vm.slice.items),function(item,i){return _vm._ssrNode("<div class=\"uk-margin-small-bottom\">","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",item.image.url))+" class=\"uk-inline\">","</a>",[_c('prismic-image',{attrs:{"field":item.image,"uk-img":""}})],1)])}),0)}
var Photosvue_type_template_id_4f539818_staticRenderFns = []


// CONCATENATED MODULE: ./components/Photos.vue?vue&type=template&id=4f539818&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Photos.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Photosvue_type_script_lang_js_ = ({
  props: ['slice'],
  name: 'Photos'
});
// CONCATENATED MODULE: ./components/Photos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Photosvue_type_script_lang_js_ = (Photosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Photos.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Photosvue_type_script_lang_js_,
  Photosvue_type_template_id_4f539818_render,
  Photosvue_type_template_id_4f539818_staticRenderFns,
  false,
  null,
  null,
  "d8d936ae"
  
)

/* harmony default export */ var Photos = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var galleryvue_type_script_lang_js_ = ({
  name: "Gallery",
  layout: 'gallery',
  transition: "page",
  props: ['slice'],
  components: {
    Nav: Nav["a" /* default */],
    Banner: Banner["a" /* default */],
    Photos: Photos
  },

  head() {
    return {
      title: 'Drangway Cotttage - Photo Gallery'
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const gallery = (await $prismic.api.getSingle('gallery')).data;
      return {
        gallery,
        slices: gallery.body
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_galleryvue_type_script_lang_js_ = (galleryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/gallery.vue





/* normalize component */

var gallery_component = Object(componentNormalizer["a" /* default */])(
  pages_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2bfb0bf6"
  
)

/* harmony default export */ var gallery = __webpack_exports__["default"] = (gallery_component.exports);

/***/ })

};;
//# sourceMappingURL=gallery.js.map