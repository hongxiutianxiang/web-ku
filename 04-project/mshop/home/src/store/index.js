import Vue from 'vue'
import Vuex from 'vuex'

//生成store并导出

Vue.use(Vuex);

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
import state from './state.js'

export default new Vuex.Store({
	actions,
	mutations,
	getters,
	state
})