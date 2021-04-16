import Vue from 'vue'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import 'vue-awesome/icons/flag'

Vue.config.productionTip = false

Vue.component('v-icon', Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')
