exports.ids = [6];
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/prices.vue?vue&type=template&id=6f76174c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.slices),function(slice,index){return _vm._ssrNode("<div>","</div>",[(slice.slice_type === 'banner')?[_c('Banner',{attrs:{"slice":slice}})]:_vm._e()],2)}),_vm._ssrNode(" "),_c('Nav'),_vm._ssrNode(" <h1 class=\"uk-heading-primary\">"+_vm._ssrEscape(_vm._s(_vm.$prismic.asText(_vm.prices.title)))+"</h1> <div"+(_vm._ssrAttr("data-src",_vm.prices.image.url))+" uk-img class=\"uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light\"></div> <h2>Rental Rates</h2> "),_vm._l((_vm.slices),function(slice,index){return _vm._ssrNode("<div>","</div>",[(slice.slice_type === 'table')?[_c('Table',{attrs:{"slice":slice}})]:_vm._e()],2)}),_vm._ssrNode(" <div class=\"uk-width-auto uk-child-width-*1-1@s uk-align-center uk-margin-large-bottom\"><iframe width=\"576\" height=\"428\" frameborder=\"0\" scrolling=\"yes\" allowtransparency=\"true\" src=\"https://BookingTracker.com/?5369&I\">&lt;a title=&quot;Availability Calendar&quot; href=&quot;https://BookingTracker.com/?5369&amp;P&quot; target=&quot;_cal&quot; onclick=&quot;window.open('https://BookingTracker.com/?5369&amp;P&amp;'+location.href,'_cal','width=1,height=1,resizable=1').focus();return(false)&quot;&gt;View Availability Calendar&lt;/a&gt;</iframe></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/prices.vue?vue&type=template&id=6f76174c&

// EXTERNAL MODULE: ./components/Nav.vue + 2 modules
var Nav = __webpack_require__(34);

// EXTERNAL MODULE: ./components/Banner.vue + 4 modules
var Banner = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Table.vue?vue&type=template&id=56236d3a&
var Tablevue_type_template_id_56236d3a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"uk-overflow-auto"},[_vm._ssrNode("<table class=\"uk-table uk-table-striped uk-margin-large-bottom\">","</table>",[_vm._ssrNode("<thead><tr><th>Month</th> <th>Week</th> <th>Price</th> <th>Week</th> <th>Price</th> <th>Week</th> <th>Price</th> <th>Week</th> <th>Price</th> <th>Week</th> <th>Price</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.slice.items),function(item,i){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.month}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.week01}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.price01}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.week02}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.price02}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.week03}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.price03}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.week04}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.price04}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.week05}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td>","</td>",[_c('prismic-rich-text',{attrs:{"field":item.price05}})],1)],2)}),0)],2)])}
var Tablevue_type_template_id_56236d3a_staticRenderFns = []


// CONCATENATED MODULE: ./components/Table.vue?vue&type=template&id=56236d3a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Table.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Tablevue_type_script_lang_js_ = ({
  props: ['slice'],
  name: 'Table'
});
// CONCATENATED MODULE: ./components/Table.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tablevue_type_script_lang_js_ = (Tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Table.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tablevue_type_script_lang_js_,
  Tablevue_type_template_id_56236d3a_render,
  Tablevue_type_template_id_56236d3a_staticRenderFns,
  false,
  null,
  null,
  "2c18f954"
  
)

/* harmony default export */ var Table = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/prices.vue?vue&type=script&lang=js&
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
//
//



/* harmony default export */ var pricesvue_type_script_lang_js_ = ({
  name: "Prices",
  layout: 'prices',
  transition: "page",
  props: ['slice'],
  components: {
    Nav: Nav["a" /* default */],
    Banner: Banner["a" /* default */],
    Table: Table
  },

  head() {
    return {
      title: 'Drangway Cotttage - Prices'
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const prices = (await $prismic.api.getSingle('prices')).data;
      return {
        prices,
        slices: prices.body
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/prices.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_pricesvue_type_script_lang_js_ = (pricesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/prices.vue





/* normalize component */

var prices_component = Object(componentNormalizer["a" /* default */])(
  pages_pricesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "22ee8956"
  
)

/* harmony default export */ var prices = __webpack_exports__["default"] = (prices_component.exports);

/***/ })

};;
//# sourceMappingURL=prices.js.map