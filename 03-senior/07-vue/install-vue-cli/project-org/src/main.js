import Vue from 'vue'

Vue.config.productionTip = false//关掉警告提示

import App from './App.vue'

new Vue({
	render:h=>h(App)
}).$mount('#app')