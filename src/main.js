/*
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'

import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

import './common/stylus/index.styl'

// Vue.config.productionTip = false

/!* eslint-disable no-new
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
}); *!/

/!* let app = Vue.extend(App);
let router = new VueRouter();
router.map({
  '/goods': {
    component: goods
  }
});
router.start(app, '#app'); *!/
// let app = Vue.extend(App);

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]
const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
  // hashbang: false,
  // history: true
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app')

router.push('/goods')
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

import './common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
