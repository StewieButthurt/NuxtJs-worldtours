export const state = () => ({
	hotels: [],
	clickButtomTimeChange: false
})

export const mutations = {
	leave(state) {
		let j, temp; 
		for(var i = state.hotels[0].length - 1; i > 0; i--){
			j = Math.floor(Math.random()*(i + 1));
			temp = state.hotels[0][j];
			state.hotels[0][j] = state.hotels[0][i];
			state.hotels[0][i] = temp
		}
	},
	downloadHotels(state, {response, city}) {
		state.hotels = []
		state.hotels.push(response.result.hotels[city])
	}
}

export const actions = {
	
	leave({commit}) {
		commit('leave')
	},
	async fetch({commit}, {city}) {
		let response = await this.$axios.$get(`/hotels/${city}`)
		commit('downloadHotels', {response, city})
	}
}

export const getters = {
	hotels: state => state.hotels[0]
}