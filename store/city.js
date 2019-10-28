export const state = () => ({
	AccessTourFrom: false,
	cityRU: '',
	countryRU: '',
	cityStore: '',
	selectedHotel: '',
	buttonAccess: false,
	buttonHotel: false,
	buttonHotelAccess: false,
	clickButton: true,
	dataAccess: false,
	dataAccessError: false,
	fromCityError: false,
	numberPeopleError: false,
	info: null,
	loaderCalendar: false,
	numberPeople: 'количество человек',
	numberPeopleStatus: false,
	loader: false,
	fromCity: '_______',
	choiceCountries: false,
	choiceCountriesMobile: false,
	time: '',
	listCountries: [
		'Ростова-на-Дону',
		'Волгограда',
		'Краснодара',
		'Астрахани',
		'Сочи',
		'Волжского',
		'Таганрога',
		'Новороссийска',
		'Шахты',
		'Армавир',
		'Новочеркасска',
		'Волгодонска',
		'Майкопа',
		'Камышина',
		'Батайска',
		'Элисты',
		'Новошахтинска',
		'Севастополь'
	]
})

export const mutations = {
	choiceCity(state, index) {
		state.fromCity = state.listCountries[index]
		state.choiceCountries = false
	},
	onClickOutside(state) {
		state.choiceCountries = false
	},
	choiceCountriesCheckTrue(state) {
		state.choiceCountries = true
	},
	choiceCountriesCheckTrueMobile(state) {
		state.choiceCountriesMobile = true
	},
	choiceCityMobile(state) {
		state.choiceCountriesMobile = false
	},
	clickButtonTime(state) {
		state.clickButton = true
	},
	onClickOutsidePeople(state) {
		state.numberPeopleStatus = false
	},
	clickCityButton(state) {
		if(state.time === '') {
			state.dataAccessError = true
		} 

		// валидация даты
		if(state.time !== '') {
			if(state.time[0] === null) {
				state.dataAccessError = true
			} else if (state.time[1] === null) {
				state.dataAccessError = true
			} else {
				state.dataAccessError = false
			}
		}

		// валидация выбора горда
		if(state.fromCity === '_______') {
			state.fromCityError = true
		}  else {
			state.fromCityError = false
		}

		// валидация кол-ва человек
		if(state.numberPeople === 'количество человек') {
			state.numberPeopleError = true
		} else {
			state.numberPeopleError = false
		}

		// проверка на наличие ошибок
		if(state.dataAccessError === false && state.fromCityError === false 
			&& state.numberPeopleError === false) {
				if(state.buttonHotel === true) {
					state.buttonHotelAccess = true
					state.buttonHotel = false 
				} else {
					state.clickButton = false
					state.buttonHotelAccess = false 
				}	
		} else {
			state.buttonHotelAccess = false
		}
	},
	updateWeather(state, response) {
		state.info = response
		state.loader = true

	},
	onClick(state, item) {
		state.time = item
	},
	numberPeopleChange(state, text) {
		state.numberPeople = text
		state.numberPeopleStatus = false 
	},
	numberPeopleStatusChange(state) {
		state.numberPeopleStatus = !state.numberPeopleStatusChange
	},
	buttonAccessChange(state) {
		state.buttonAccess  = true
	},
	selectedHotel(state, hotel) {
		state.selectedHotel = hotel
	},
	buttonHotel(state) {
		state.buttonHotel = true
	},
	cityStore(state, city) {
		state.cityStore = city
	},
	selectedCityTour(state, cityRU) {
		state.cityRU = cityRU
	},
	selectedCountryTour(state, countryRU) {
		state.countryRU = countryRU
	}
}

export const actions = {
	choiceCity({commit}, {index}) {
		commit('choiceCity', index)
	},
	onClickOutside({commit}) {
		commit('onClickOutside')
	},
	choiceCountriesCheckTrue({commit}) {
		commit('choiceCountriesCheckTrue')
	},
	choiceCountriesCheckTrueMobile({commit}) {
		commit('choiceCountriesCheckTrueMobile')
	},
	choiceCityMobile({commit}) {
		commit('choiceCityMobile')
	},
	clickButtonTime({commit}) {
		commit('clickButtonTime')
	},
	onClickOutsidePeople({commit}) {
		commit('onClickOutsidePeople')
	},
	clickCityButton({commit}) {
		commit('clickCityButton')
	},
	updateWeather({commit}, {response}) {
		commit('updateWeather', response)
	},
	onClick({commit}, {item}) {
		commit('onClick', item)
	},
	numberPeopleChange({commit}, {text}) {
		commit('numberPeopleChange', text)
	},
	numberPeopleStatusChange({commit}) {
		commit('numberPeopleStatusChange')
	},
	buttonAccessChange({commit}) {
		commit('buttonAccessChange')
	},
	selectedHotel({commit}, {hotel}) {
		commit('selectedHotel', hotel)
	},
	buttonHotel({commit}) {
		commit('buttonHotel')
	},
	cityStore({commit}, {city}) {
		commit('cityStore', city)
	},
	form({commit, state}) {
		this.$router.push(`/form?OutTown=${state.fromCity}
			&InTown=${state.cityRU}&country=${state.countryRU}
			&time=${state.time}&numberPeople=${state.numberPeople}
			&hotel=${state.selectedHotel}`)
	},
	selectedCityTour({commit}, {cityRU}) {
		commit('selectedCityTour', cityRU)
	},
	selectedCountryTour({commit}, {countryRU}) {
		commit('selectedCountryTour', countryRU)
	}

}

export const getters = {
	AccessTourFrom: state => state.AccessTourFrom,
	buttonAccess: state => state.buttonAccess,
	clickButton: state => state.clickButton,
	dataAccess: state => state.dataAccess,
	dataAccessError: state => state.dataAccessError,
	fromCityError: state => state.fromCityError,
	numberPeopleError: state => state.numberPeopleError,
	info: state => state.info,
	loaderCalendar: state => state.loaderCalendar,
	numberPeople: state => state.numberPeople,
	numberPeopleStatus: state => state.numberPeopleStatus,
	loader: state => state.loader,
	fromCity: state => state.fromCity,
	choiceCountries: state => state.choiceCountries,
	choiceCountriesMobile: state => state.choiceCountriesMobile,
	listCountries: state => state.listCountries,
	time: state => state.time,
	selectedHotel: state => state.selectedHotel,
	buttonHotelAccess: state => state.buttonHotelAccess,
	cityStore: state => state.cityStore

}