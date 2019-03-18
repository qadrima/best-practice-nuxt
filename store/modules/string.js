const state = {
    hellow_bro : 'Hellow Bro'
}

const getters = {
	paramString: (state) => (string) => {
    	return state.hellow_bro +' '+ string;
  	}
}

const actions = {}

const mutations = {}

export default {state, actions, mutations, getters}
