<template>
	<div>
		<div class="tours-background">
			<div class="container">
				<div class="tours">
					<app-tour
						v-for="(item, index) in info"
						:key="index"
						:country="item.country"
						:scrollTo="item.scroll"
						:img="item.img"
						:indexTour="index"
						class="app-tour"
						@clickTours="clickTours(item.tour)"
					></app-tour>
				</div>
			</div>
		</div>
		<div class="container mobile-country">
			<div class="mobile-country__direction">
				Выбираем направление
			</div>
			<div class="mobile-country__container-wrapper">
				<div class="mobile-country__container first-element">
					<div class="mobile-country__contry"  v-scroll-to="'#scrollHere'" @click="clickTours('infoTourGreece')">
						Греция
					</div>
					<div class="mobile-country__contry"  v-scroll-to="'#scrollHere'" @click="clickTours('infoTourEgypt')">
						Египет
					</div>
					<div class="mobile-country__contry"  v-scroll-to="'#scrollHere'" @click="clickTours('infoTourItaly')">
						Италия
					</div>
				</div>
				<div class="mobile-country__container">
					<div class="mobile-country__contry"  v-scroll-to="'#scrollHere'" @click="clickTours('infoTourUAE')">
						ОАЭ
					</div>
					<div class="mobile-country__contry"  v-scroll-to="'#scrollHere'" @click="clickTours('infoTourTurkey')">
						Турция
					</div>
					<div class="mobile-country__contry"  v-scroll-to="'#scrollHere'" @click="clickTours('infoTourThailand')">
						Таиланд 
					</div>
				</div>
			</div>	
		</div>
			<div class="country__background" id="scrollHere">
  				<transition
  					enter-active-class="animated fadeIn"
  					appear
  					key="transition-slider-greece"
  		  		>
  			  		<app-slider
  			  			v-for="(item, index) in countryTour"
  			  			:key="item.city1"
  			  			:country="item.country"
  			  			:city1="item.city1"
  			  			:lat1="item.lat1"
  			  			:lon1="item.lon1"
  			  			:hotel1="item.hotel1"
  			  			:city1EN="item.city1EN"
  			  			:descrMain1="item.descrMain1"
  			  			:descrBottom1="item.descrBottom1"
  			  			:numberRounds1="item.numberRounds1"
  			  			:city2="item.city2"
  			  			:lat2="item.lat2"
  			  			:lon2="item.lon2"
  			  			:hotel2="item.hotel2"
  			  			:city2EN="item.city2EN"
  			  			:descrMain2="item.descrMain2"
  			  			:descrBottom2="item.descrBottom2"
  			  			:numberRounds2="item.numberRounds2"
  			  			:city3="item.city3"
  			  			:lat3="item.lat3"
  			  			:lon3="item.lon3"
  			  			:hotel3="item.hotel3"
  			  			:city3EN="item.city3EN"
  			  			:descrMain3="item.descrMain3"
  			  			:descrBottom3="item.descrBottom3"
  			  			:numberRounds3="item.numberRounds3"
  			  			:img1="item.img1"
  			  			:img2="item.img2"
  			  			:img3="item.img3"
  			  			:idScroll="item.idScroll"
  			  		></app-slider>
  		  		</transition>
			</div>
		</div>
</template>


<script>
	import AppTour from '~/components/tour'
	import AppSlider from '~/components/country-slider'
	import * as nprogress from 'nprogress'

	if(process.browser) {
		nprogress.set(0.0);   
		nprogress.set(0.4);
		nprogress.set(1.0);
	}

	export default {
		head: {
			title: 'Туры'
		},
		components: {
			AppTour,
			AppSlider
		},
		computed: {
			countryTour() {
				return this.$store.getters['tours/countryTour']
			},
			activeTour() {
				return this.$store.getters['tours/activeTour']
			}
		},
		methods: {
			async clickTours(tour) {
				this.$store.dispatch('tours/activeTour')
				nprogress.start()
				await this.$store.dispatch('tours/fetch', {tour})
				nprogress.done()
			}
		},
		data() {
			return {
				info: [
					{
						country: 'Греция',
						tour: 'infoTourGreece',
						img: require('~/assets/Greece.png')
					},
					{
						country: 'ОАЭ',
						tour: 'infoTourUAE',
						img: require('~/assets/UAE.png')
					},
					{
						country: 'Египет',
						tour: 'infoTourEgypt',
						img: require('~/assets/Egypt.png')
					},
					{
						country: 'Таиланд',
						tour: 'infoTourThailand',
						img: require('~/assets/Thailand.png')
					},
					{
						country: 'Италия',
						tour: 'infoTourItaly',
						img: require('~/assets/Italy.png')
					},
					{
						country: 'Турция',
						tour: 'infoTourTurkey',
						img: require('~/assets/Turkey.png')
					}
				],
			}
		}
	}
</script>


<style lang="sass">
	@import "@/assets/smart-grid.sass"
	
	.mobile-country__direction
		font-family: "Century Gothic"
		font-size: 24px
		text-transform: uppercase
		color: #1b4c4c
		+xs(margin-top, 37px)
		+xs(margin-bottom, 50px)
		+xs(text-align, center)

	.tours-background
		margin: 0 auto
		width: 100%
		background: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)),url("../../assets/MaketAnimationMobila.psd.png") no-repeat no-repeat center 40% 
		background-size: cover
		height: 92vh
		max-height: 900px
		+sm(display, none)

	.mobile-country__container-wrapper
		display: flex
		+xs(flex-direction, column)

	
	.tours
		width: 100%
		height: 90vh
		max-height: 800px
		display: flex
		justify-content: space-around
		font-family: "Century Gothic"
		flex-wrap: wrap
		align-content: space-around
		overflow: visible
		+ms(justify-content, center)
		+xs(max-height, inherit)

	.tours__country
		background-color: #e5ecf1

	.container
		position: relative 
		+wrapper()
		height: 90vh
		+size(11)
		+xs(height, inherit)
	
	.mobile-country
		display: none
		justify-content: center
		align-content: center
		flex-wrap: wrap
		flex-direction: column
		+sm(display, flex)
		font-weight: 400
		font-family: "Century Gothic"
		+xs(justify-content, inherit)	
		+xs(margin-bottom, 50px)

	.mobile-country__contry
		margin: 5px
		font-size: 30px
		margin-top: 50px
		color: #1a556e
		font-family: "Century Gothic"
		text-transform: uppercase
		cursor: pointer

	.country__background
		margin: 0 auto
		width: 100%
		background-color: #e8f0ff
		background-size: cover
		min-height: 100vh
		+sm(background-color, white)
		+xs(min-height, inherit)

	.mobile-country__container
		display: flex
		flex-direction: column
		align-items: center

	.first-element
		margin-right: 64px
		+xs(margin-right, 0px)


</style>