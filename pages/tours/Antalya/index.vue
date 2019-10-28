<template>
	<div>
		<div class="tours-hotels-city__container">
			<div class="tours-hotels-city">
			</div>
			<div class="container-city">
				<div class="tours-hotels-city__title">
					Анталья
				</div>
				<div class="container-city-info">
					<div class="city__weather-icon" v-if="loader === true">
						<transition
								enter-active-class="animated fadeIn"
								appear
								key="transition-weather-icon"
					  		>
							<div class="city__icon">
								<img :src="`http://openweathermap.org/img/wn/${info.data.icon}@2x.png`" alt="weather">
							</div>
						</transition>
						<transition
								enter-active-class="animated fadeIn"
								appear
								key="transition-weather"
					  		>
							<div class="city__weather">
								{{tempC}} ℃
							</div>
						</transition>
					</div>
						<transition
								enter-active-class="animated fadeIn delay-2s"
								appear
								key="transition-city-tours"
					  		>
					  		<div class="city__number-rounds">
					  			<div class="city__number-rounds-container">
					  				<div class="city__number-rounds-text">
					  					количество туров<br> 
					  					в этот город
					  				</div>
					  				<div class="city__number-rounds-ellipse">
					  				</div>
					  				<div class="city__number-rounds-figure">
					  					5
					  				</div>
					  			</div>
					  		</div>
					  	</transition>
				</div>
			</div>
		</div>
		<div class="city__panel">
			<div class="container-panel">
				<div class="city__tour-from" :class="{'city__error' : fromCityError}"  v-click-outside="onClickOutside" @click="choiceCountriesCheck()">
					<div class="city__tour-from-city">
						тур из {{fromCity}}
					</div>
					<div class="city__slash">
					</div>
					<div class="city__tour-where-city">
						Анталья
					</div>
					<div class="city__choice-countries" v-if="choiceCountries">
					 	<div class="city__choice-countries-wrapper"
							  v-for="(item, index) in listCountries"
							  @click="choiceCity(index)"
					 	>
					 		{{item}}
					 	</div>
					</div>
				</div>
				<div class="city__date" @click="popupDisplay = 'block'" :class="{'city__error' : dataAccessError}">
					<no-ssr>
						<date-picker  :shortcuts="shortcuts" :popupStyle="{ top: '120%', left: '0%'}" @input="changeTime" class="city__check-in-date" v-model="times"  :range="true" :lang="lang"></date-picker>
					</no-ssr>
				</div>
				<div class="city__number-people" v-click-outside="onClickOutsidePeople" @click="numberPeopleStatusChange()" :class="{'city__error' : numberPeopleError}">
					{{numberPeople}}
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 width="3vw" height="3vw" viewBox="0 0 80.13 80.13" style="enable-background:new 0 0 80.13 80.13;" xml:space="preserve"
						>
					<g>
						<path d="M48.355,17.922c3.705,2.323,6.303,6.254,6.776,10.817c1.511,0.706,3.188,1.112,4.966,1.112
							c6.491,0,11.752-5.261,11.752-11.751c0-6.491-5.261-11.752-11.752-11.752C53.668,6.35,48.453,11.517,48.355,17.922z M40.656,41.984
							c6.491,0,11.752-5.262,11.752-11.752s-5.262-11.751-11.752-11.751c-6.49,0-11.754,5.262-11.754,11.752S34.166,41.984,40.656,41.984
							z M45.641,42.785h-9.972c-8.297,0-15.047,6.751-15.047,15.048v12.195l0.031,0.191l0.84,0.263
							c7.918,2.474,14.797,3.299,20.459,3.299c11.059,0,17.469-3.153,17.864-3.354l0.785-0.397h0.084V57.833
							C60.688,49.536,53.938,42.785,45.641,42.785z M65.084,30.653h-9.895c-0.107,3.959-1.797,7.524-4.47,10.088
							c7.375,2.193,12.771,9.032,12.771,17.11v3.758c9.77-0.358,15.4-3.127,15.771-3.313l0.785-0.398h0.084V45.699
							C80.13,37.403,73.38,30.653,65.084,30.653z M20.035,29.853c2.299,0,4.438-0.671,6.25-1.814c0.576-3.757,2.59-7.04,5.467-9.276
							c0.012-0.22,0.033-0.438,0.033-0.66c0-6.491-5.262-11.752-11.75-11.752c-6.492,0-11.752,5.261-11.752,11.752
							C8.283,24.591,13.543,29.853,20.035,29.853z M30.589,40.741c-2.66-2.551-4.344-6.097-4.467-10.032
							c-0.367-0.027-0.73-0.056-1.104-0.056h-9.971C6.75,30.653,0,37.403,0,45.699v12.197l0.031,0.188l0.84,0.265
							c6.352,1.983,12.021,2.897,16.945,3.185v-3.683C17.818,49.773,23.212,42.936,30.589,40.741z"/>
					</g>
					</svg>
					<div class="city__number-people-choice" v-if="numberPeopleStatus">
						<div class="city__number-people-button" @click="numberPeopleChange('1 человек')">
							1
						</div>
						<div class="city__number-people-button" @click="numberPeopleChange('2 человека')">
							2
						</div>
						<div class="city__number-people-button" @click="numberPeopleChange('3 человека')">
							3
						</div>
						<div class="city__number-people-button" @click="numberPeopleChange('4> человека')">
							4>
						</div>
					</div>
				</div>
				<div class="city__button-search" @click="clickCityButton()">
					искать
				</div>
			</div>
		</div>
		<div class="city__tour-from-mobile" v-show="choiceCountriesMobile === true">
			<div class="city__choice-countries-wrapper-mobile"
				 v-for="(item, index) in listCountries"
				 @click="choiceCity(index)"
			>
				{{item}}
			</div>
		</div>

		<div class="city__all-offers">
			<div class="city__all-offers-title">
				все предложения
			</div>
			<transition
				enter-active-class="animated fadeIn"
				leave-active-class="animated fadeOut"
				appear
				v-on:leave="leave"
			>
	  			<div class="city__all-offers-hotels" v-show="clickButton === true">
	  				<app-hotel
	  					v-for="(item, index) in hotels"
	  					:key="item.title"
	  					:title="item.title"
	  					:titleUrl="item.titleUrl"
	  					:price="item.price"
	  					:descr="item.descr"
	  					:img="item.img"
	  					:indexKey="item.title"
	  					:buttonAccess="buttonAccess"
	  					:city="city"
	  					:cityRU="cityRU"
	  					:countryRU="countryRU"
	  				></app-hotel>
	  			</div>
  			</transition>
		</div>
	</div>
</template>

<script>
	let DatePicker = null
	if (process.browser) {
	  DatePicker = require('vue2-datepicker').default
	}

	import AppHotel from '~/components/hotel'
	import * as nprogress from 'nprogress'

	if(process.browser) {
		nprogress.set(0.0);   
		nprogress.set(0.4);
		nprogress.set(1.0);
	}

	export default {
		head: {
			title: 'Туры | Анталья'
		},
		data() {
			return {
				city: 'Antalya',
				cityRU: 'Анталья',
				countryRU: 'Турция',
				popupDisplay: '',
				loader: false,
				windowWidth: '',
				lat: '36.887084',
				lon: '30.703267',
				times: '',
				shortcuts: [
				  {
				    text: 'Today',
				    onClick: () => {
				      this.times = [new Date(), new Date()]				      
				    }
				  }
				],
				vcoConfig: {
			        handler: this.handler,
			        events: ['dblclick', 'click'],
			        isActive: true
				},
				  
			      lang: {
			              days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			              months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
			              pickers: ['следующие 7 дней', 'следующие 30 дней', 'предыдущие 7 дней', 'предыдущие 30 дней'],
			              placeholder: {
			                dateRange: 'ДАТА ЗАЕЗДА / ОТЪЕЗДА'
			              }
			      },
			      timePickerOptions:{
			        start: '00:00',
			        step: '00:30',
			        end: '23:30'
			      }
			}
		},
		mounted() {
			nprogress.start()
			this.$axios.post('/tours', {
				lat: this.lat,
				lon: this.lon
			}).then(response => (
					this.$store.dispatch('city/updateWeather', {response}),
					this.loader = true,
					nprogress.done()
				))
			   .catch(function(error) {
    				console.log(error);
    				this.loader = false
    				nprogress.done()
 				})

			if(process.browser) {
				this.windowWidth = window.innerWidth
			}

			this.times = this.time

			let city = 'antalyaHotels'

			if(this.cityStore !== city) {
				nprogress.start()
				this.$store.dispatch('hotels/fetch', {city})
				this.$store.dispatch('city/cityStore', {city})
				nprogress.done()
			}
		},
		computed: {
			tempC() {
				return Math.trunc(this.info.data.temp - 273.15)
			},
			hotels() {
				return this.$store.getters['hotels/hotels']
			},
			AccessTourFrom() {
				return this.$store.getters['city/AccessTourFrom']
			},
			buttonAccess() {
				return this.$store.getters['city/buttonAccess']
			},
			clickButton() {
				return this.$store.getters['city/clickButton']
			},
			dataAccess() {
				return this.$store.getters['city/dataAccess']
			},
			dataAccessError() {
				return this.$store.getters['city/dataAccessError']
			},
			fromCityError() {
				return this.$store.getters['city/fromCityError']
			},
			numberPeopleError() {
				return this.$store.getters['city/numberPeopleError']
			},
			info() {
				return this.$store.getters['city/info']
			},
			loaderCalendar() {
				return this.$store.getters['city/loaderCalendar']
			},
			numberPeople() {
				return this.$store.getters['city/numberPeople']
			},
			numberPeopleStatus() {
				return this.$store.getters['city/numberPeopleStatus']
			},
			fromCity() {
				return this.$store.getters['city/fromCity']
			},
			choiceCountries() {
				return this.$store.getters['city/choiceCountries']
			},
			choiceCountriesMobile() {
				return this.$store.getters['city/choiceCountriesMobile']
			},
			listCountries() {
				return this.$store.getters['city/listCountries']
			},
			time() {
				return this.$store.getters['city/time']
			},
			changeTime() {
				if(this.times !== '') {
					let item = this.times
					this.$store.dispatch('city/onClick', {item})
					this.times = this.time
				}
			},
			clickButtomTimeChange() {
				return this.$store.getters['hotels/clickButtomTimeChange']
			},
			cityStore() {
				return this.$store.getters['city/cityStore']
			}

		},
		methods: {
			onClick() {
				this.$store.dispatch('city/onClick')
			},
			choiceCity(index) {
				this.$store.dispatch('city/choiceCity', {index})

				if(this.windowWidth < 768) {
					this.$store.dispatch('city/choiceCityMobile')
				}
			},
			choiceCountriesCheck() {
				if(this.windowWidth >= 768 && this.choiceCountries === false ) {
					this.$store.dispatch('city/choiceCountriesCheckTrue')
				}

				if(this.windowWidth <= 768) {
					this.$store.dispatch('city/choiceCountriesCheckTrueMobile')
				}

			},
			onClickOutside (event, el) {
				 this.$store.dispatch('city/onClickOutside')
			},
			clickButtonTime() {
				this.$store.dispatch('city/clickButtonTime')
			},
			onClickOutsidePeople (event, el) {
				 this.$store.dispatch('city/onClickOutsidePeople')
			},
			leave: function (el, done) {
				this.$store.dispatch('hotels/leave')
				this.$store.dispatch('city/buttonAccessChange')	
				this.$store.dispatch('city/clickButtonTime')

			},
			clickCityButton() {
				this.$store.dispatch('city/clickCityButton')
			},
			numberPeopleChange(text) {
				this.$store.dispatch('city/numberPeopleChange', {text})
			},
			numberPeopleStatusChange() {
				this.$store.dispatch('city/numberPeopleStatusChange')
			}
		}, 
		components: {
			DatePicker,
			AppHotel
		}
	}
</script>


<style lang="sass">

	@import "@/assets/smart-grid.sass"
	
	.tours-hotels-city__container
		position: relative
		min-height: 300px
		width: 100%

	.container-city
		+wrapper()
		position: relative
		left: 0px
		right: 0px
		height: 100%
		display: flex
		justify-content: space-between  
		flex-wrap: wrap
		+xs(flex-direction, column)
		+xs(align-items, center)

	.container-city-info
		display: flex
		flex-direction: column
		margin-right: 44px
		margin-top: 42px
		+xs(margin-right, 0px)
		+xs(margin-bottom, 42px)


	.tours-hotels-city	
		width: 100%
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url("../../../assets/city-turkey/antalya.jpg") 
		background-size: cover
		background-position: 10% 50%
		height: 100%
		filter: blur(0.2vw)
		position: absolute
		z-index: 10

	.tours-hotels-city__title
		color: #ffffff
		text-transform: uppercase
		font-family: "Century Gothic"
		font-size: 60px
		z-index: 20
		margin-top: 50px
		margin-left: 50px
		text-shadow: 3px 3px 3px black
		+ms(font-size, 40px)
		+xs(margin-left, 0px)

	.city__weather
		color: #ffffff
		font-size: 50px
		font-family: "Century Gothic"
		z-index: 10
		text-shadow: 0px 3px 5px black
		+ms(font-size, 35px)


	.city__weather-icon
		z-index: 2
		display: flex 
		align-items: center
		z-index: 10
		justify-content: center
		padding-right: 46px
		+ms(margin-bottom, 10px)
		
	
	.city__icon
		width: 80px
		height: 80px
		z-index: 2
		z-index: 10
		+ms(width, 60px)
		+ms(height, 60px)


	.city__icon img 
		height: 100%
		width: 100%

	.city__number-rounds
		display: flex
		flex-direction: column
		align-content: center
		flex-wrap: wrap
		color: #ffffff
		font-family: "Century Gothic"
		font-size: 26px
		text-transform: uppercase
		z-index: 10
		text-shadow: 0px 2px 3px black
		+md(font-size, 19px)

	.city__number-rounds-container
		display: flex
		flex-direction: column
		align-items: center
		position: relative

	.city__number-rounds-text
		text-align: center
		margin-bottom: 10px

	.city__number-rounds-ellipse
		width: 50px
		height: 50px
		border: 3px solid white
		border-radius: 30px
		box-shadow: 0px 2px 3px black
		+ms(width, 40px)
		+ms(height, 40px)
		+ms(border, 2px solid white)

		

	.city__number-rounds-img img
		width: 100%
		height: 100%

	.city__number-rounds-figure
		position: absolute
		left: 47%
		top: 66%
		font-size: 25px
		+sm(font-size, 21px)
		+md(left, 46%)
		+md(top, 62%)
		+xs(left, 46%)
		+xs(top, 65%)

	.city__panel	
		width: 100%
		background-color: #1a556e
		box-shadow: 0 0 0.5vw 0.15vw rgb(0, 0, 0)
		display: flex
		justify-content: center
		flex-wrap: wrap
		color: #7a9ab2
		font-size: 18px
		text-transform: uppercase
		font-style: italic
		font-family: "Century Gothic"
		user-select: none 
		position: relative
		+lg(font-size, 15px)
		+md(font-size, 13px)
		+ms(padding-top, 20px)
		+ms(padding-bottom, 20px)
		+ms(font-size, 15px)

	.container-panel
		+wrapper()
		display: flex
		padding-left: 0px
		padding-right: 0px
		+ms(flex-direction, column)

	.city__tour-from
		display: flex
		width: 300px
		height: 50px
		background-color: white
		position: relative
		align-items: center
		transition-duration: 0.3s
		cursor: pointer
		margin-top: 15px
		margin-bottom: 15px
		+lg(width, 280px)
		+md(width, 230px)
		+md(height, 41px)
		+ms(width, 400px)
		+ms(height, 40px)
		+xs(width, 260px)

	.city__tour-where-city
		top: 22%
		right: 16%
		display: flex
		margin: 0vw 2vw 0vw 1vw
		

	.city__tour-from-city
		top: 22%
		left: 6%
		cursor: pointer 
		display: flex
		flex-wrap: wrap
		margin: 0px 10px 0px 10px

	.city__choice-countries
		position: absolute
		z-index: 14
		width: 300px
		height: 134.2px
		top: 100%
		background-color: white
		flex-direction: column
		overflow: auto
		display: flex
		box-shadow: 0 5px 14px 0 rgba(0,0,0,.25)
		+lg(width, 280px)
		+md(width, 230px)


	.city__choice-countries-wrapper
		cursor: pointer
		padding: 0vw 1vw 0vw 2vw
		

	.city__choice-countries-wrapper:hover
		background-color: #1a556e
		color: white

	.city__date
		width: 270px
		height: 50px
		position: relative
		display: flex
		align-items: center
		background-color: white
		margin-left: 4.46px
		transition-duration: 0.3s
		margin-top: 15px
		margin-bottom: 15px
		+lg(width, 230px)
		+md(width, 180px)
		+md(height, 41px)
		+ms(max-width, inherit)
		+ms(margin-left, 0px)
		+ms(width, 400px)
		+ms(height, 40px)
		+ms(font-size, 15px)
		+xs(width, 260px)

	.city__check-in-date
		text-align: center
		cursor: pointer

	.city__slash	
		height: 2.37vw
		width: 1px
		background-color: #7a9ab2

	.mx-input
		border: none
		border-radius: 0px
		box-shadow: none
		font-size: 16px
		color: #7a9ab2
		height: 100%
		+lg(font-size, 14px)
		+md(font-size, 12px)
		+ms(font-size, 15px)
	
	.mx-input::placeholder
		color: #7a9ab2
		font-style: italic
		font-family: "Century Gothic"
		padding-left: 1vw
		+ms(padding-left, 1px)

	.mx-input-wrapper
		display: flex
		align-items: center
		height: 100%


	.mx-input-wrapper input
		padding: 0px 0px 0px 10px
		position: inherit
		cursor: pointer
		+md(padding, 5px)
		+ms(width, 192px)
		+ms(padding, 0px 0px 0px 9px)
		+ms(display, flex)
		+ms(justify-content, center)

	.city__number-people
		height: 50px
		width: 270px
		background-color: white
		margin-left: 4.77px
		display: flex
		align-items: center
		flex-wrap: wrap
		cursor: pointer
		z-index: 10
		position: relative
		justify-content: center
		transition-duration: 0.3s
		margin-top: 15px
		margin-bottom: 15px
		+lg(width, 230px)
		+md(width, 180px)
		+md(height, 41px)
		+ms(width, 391px)
		+ms(height, 40px)
		+ms(max-width, inherit)
		+ms(margin-left, 0px)
		+ms(justify-content, flex-start)
		+ms(padding, 0px 0px 0px 10px)
		+xs(width, 250px)

	.city__number-people svg
		width: 24.2px
		height: 24.2px
		margin-left: 10px
		+md(width, 20px)
		+md(height, 20px)
		+md(margin-left, 5px)
		+ms(margin-left, 10px)
		+ms(width, 30px)
		+ms(height, 30px)

	.mx-input-append
		width: 40px
		padding: 0px
		position: inherit
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		+lg(width, 30px)
		+ms(width, 30px)
		+ms(margin-left, 10px)
		

	.mx-input-append svg
		width: 40px
		height: 40px
		+md(width, 30px)
		+md(height, 30px)
		+ms(width, 30px)
		+ms(height, 30px)


	.mx-datepicker-range
		width: 100%

	.city__number-people-choice
		position: absolute
		top: 100%
		left: 0%
		width: 270px
		background-color: white
		display: flex
		justify-content: center
		box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.25)
		cursor: default
		z-index: 10
		+lg(width, 230px)
		+md(width, 180px)

	.city__number-people-button
	 	display: flex
	 	border: 1px solid grey
	 	color: #7a9ab2
	 	width: 37px
	 	height: 37px
	 	border-radius: 10px
	 	margin: 12.3px 
	 	justify-content: center
	 	align-content: center
	 	flex-wrap: wrap
	 	cursor: pointer
	 	+md(width, 27px)
	 	+md(height, 27px)
	 	+md(margin, 5.3px)

	.city__number-people-button:hover
		background-color: #1a556e
		color: white
		border: 1px solid #1a556e

	.city__button-search
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		background-color: #95a0a4
		width: 160px
		height: 50px
		color: white
		margin-left: 20px
		text-transform: uppercase
		font-family: "Century Gothic"
		cursor: pointer
		z-index: 10
		transition-duration: 0.3s
		border-radius: 8px
		margin-top: 15px
		margin-bottom: 15px
		font-size: 19px
		+md(width, 140px)
		+md(height, 41px)
		+ms(width, 160px)
		+ms(height, 39px)
		+ms(margin, 0 auto)
		+ms(margin-top, 15px)
		+ms(z-index, 1)

	
	.city__button-search:active
		transition-duration: 0.3s
		transform: scale(0.9)
	
	.city__error
		box-shadow: 0px 0px 6px 5px rgba(255, 0, 0, 0.5)


	.city__all-offers
		display: flex
		flex-direction: column
		align-content: center
		flex-wrap: wrap
		background-color: #e8f0ff
		padding-top: 92px
		+md(padding-top, 50px)

	.city__all-offers-title
		color: #244b69
		font-family: "Century Gothic"
		font-style: italic
		text-transform: uppercase
		font-size: 23px
		text-align: center
		margin-bottom: 76px
		+md(font-size, 20px)
		+md(margin-bottom, 50px)

	.city__all-offers-hotels
		+wrapper()
		display: flex
		justify-content: center
		flex-direction: column

	.mx-datepicker-range
		height: 100%

	.city__tour-from-mobile
		position: absolute
		top: 0px
		left: 0px
		width: 100%
		min-height: 100vh
		background:  linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)) 
		z-index: 40
		display: flex
		justify-content: center
		flex-direction: column
		
	.city__choice-countries-wrapper-mobile
		color: white
		font-size: 25px
		margin-top: 50px
		text-align: center
		cursor: pointer
	
	.mx-range-wrapper
		display: flex
		+ms(flex-direction, column)
		+ms(width, 300px)
	

	
</style>