import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from "vue2-google-maps"
import {Map} from "vue2-google-maps";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
Vue.config.productionTip = true

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    region: "KR",
    libraries: 'places',
  },
  installComponents: true
})
Vue.component('GmapMap', Map)