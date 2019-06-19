import Vue from 'vue'
import './assets/css/common.css'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false//关掉警告提示



new Vue({
	store,
	render:h=>h(App)
}).$mount('#app')