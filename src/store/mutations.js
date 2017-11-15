import * as types from './mutation-types'

const mutations = {
	[types.SET_PARAMSLIST](state, paramslist) {
	    state.paramsList = paramslist
	},
}

export default mutations