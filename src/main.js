import Vue from 'vue'
import App from './App.vue'

// Add shims and polyfills
import 'hybrids/shim'
import { define } from 'hybrids'
import ChipElement from './components/chip'
import IconElement from './components/icon'

define('c-chip', ChipElement)
define('c-icon', IconElement)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/c-\w*/]
new Vue({
  render(h) {
    return h(App)
  }
}).$mount('#app')
