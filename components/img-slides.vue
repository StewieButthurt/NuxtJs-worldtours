<template>
	<div class="swiper-slide" v-if="activeTour">
		<img :src="require('~/assets/' + img)">
		<div class="swiper-slide__title">
			{{city}}
		</div>
		<div class="swiper-slide__descr">
			{{descrMain}}
		</div>
		<div class="swiper-slide__mask"></div>
		<div class="swiper-slide__weather-icon" v-if="loader === true">
			<transition
					enter-active-class="animated fadeIn"
					appear
					key="transition-weather-icon"
		  		>
				<div class="swiper-slide__icon">
					<img :src="`http://openweathermap.org/img/wn/${info.data.icon}@2x.png`" alt="weather">
				</div>
			</transition>
			<transition
					enter-active-class="animated fadeIn"
					appear
					key="transition-weather"
		  		>
				<div class="swiper-slide__weather">
					{{tempC}} ℃
				</div>
			</transition>
		</div>
		<div class="swiper-slide__number-rounds">
			<div class="swiper-slide__number-rounds-container">
				<div class="swiper-slide__number-rounds-text">
					количество туров<br> 
					в этот город
				</div>
				<div class="swiper-slide__number-rounds-img">
					<img src="../assets/ellipse.png">
				</div>
				<div class="swiper-slide__number-rounds-figure">
					{{numberRounds}}
				</div>
				<div class="swipe-slider__scores-tourists-text">
					Оценки туристов
				</div>
				<div class="swipe-slider__scores-tourists-numbers">
					<span>{{hotel}}/10</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				info: null,
				loader: false
			}
		},
		props: [
			'city',
			'img',
			'lat',
			'lon',
			'numberRounds',
			'hotel',
			'descrMain'
		],
		mounted() {
			this.$axios.post('/tours', {
				lat: this.lat,
				lon: this.lon
			}).then(response => (
					this.info = response,
					this.loader = true
			   ))
			   .catch(function(error) {
    				console.log(error);
 				})
		},
		computed: {
			tempC() {
				return Math.trunc(this.info.data.temp - 273.15)
			},
			activeTour() {
				return this.$store.getters['tours/activeTour']
			}
		}
}
</script>

<style lang="sass">
	@import "../assets/smart-grid.sass"
	

	.swiper-slide img
		width: 100%
		height: 100%

	.swiper-slide__title
		font-size: 3.3vw
		text-transform: uppercase
		color: #ffffff
		font-family: "Century Gothic"
		position: absolute
		left: 11.26%
		top: 11.32%
		z-index: 2
		+lg(font-size, 3.53vw)
		+md(font-size, 3.83vw)
		+sm(font-size, 5.83vw)

	.swiper-slide__descr
		max-width: 36vmax
		position: absolute
		font-size: 1.50vw
		left: 11.26%
		top: 23.60%
		color: #ffffff
		text-transform: uppercase
		font-family: "Century Gothic"
		font-weight: 400
		z-index: 2
		+lg(font-size, 1.35vmax)
		+md(font-size, 1.65vmax)
		+sm(display, none)

	.swiper-slide__mask
		position: absolute
		left: 0px
		top: 0px
		background-color: black
		z-index: 1
		width: 100%
		height: 99%
		opacity: 0.3
		+xs(height, 98%)
		+xxs(height, 97.5%)

	.swiper-slide__weather
		color: #ffffff
		font-size: 3.3vw
		font-family: "Century Gothic"
		z-index: 2
		+lg(font-size, 3.44vw)
		+md(font-size, 3.74vw)
		+sm(font-size, 4.2vw)

	.swiper-slide__icon
		width: 4.44vw
		height: 4.44vw
		z-index: 2
		margin: 1.2vmax 1vmax 1vmax 1vmax
		+md(width, 4.74vw)
		+md(height, 4.74vw)
		+sm(width, 5.74vw)
		+sm(height, 5.74vw)

	.swiper-slide__icon img 
		height: 100%
		width: 100%

	.swiper-slide__weather-icon
		position: absolute
		top: 8.32%
		right: 9.50%
		z-index: 2
		display: flex 
		align-items: center
		+sm(top, 11.32%)

	.swiper-slide__number-rounds
		position: absolute
		top: 31%
		right: 5.3%
		z-index: 2
		display: flex
		flex-direction: column
		align-content: center
		flex-wrap: wrap
		color: #ffffff
		font-family: "Century Gothic"
		width: 16vw
		min-height: 18vw
		font-size: 1.50vw
		text-transform: uppercase
		+sm(font-size, 2vw)
		+sm(width, 21vw)


	
	.swiper-slide__number-rounds-figure-container
		position: relative
		top: 0.50vmax
		right: 1.50vmax

	.swiper-slide__number-rounds-container
		position: relative
		width: 16vw
		min-height: 18vw
		+sm(width, 21vw)

	.swiper-slide__number-rounds-text
		position: absolute
		top: 0px
		left: 0px
		text-align: center
	
	.swiper-slide__number-rounds-img
		width: 4.5vw
		position: absolute
		+sm(width, 5.5vw)
		+sm(left, 35%)
		+sm(top, 33%)
		left: 34%
		top: 25%
		

	.swiper-slide__number-rounds-img img
		width: 100%
		height: 100%
	

	.swiper-slide__number-rounds-figure
		position: absolute
		left: 45%
		top: 30%
		font-size: 2vw
		+sm(font-size, 3vw)
		+sm(left, 44%)
		+sm(top, 39%)

	.swipe-slider__scores-tourists-text
		position: absolute
		left: 0px
		top: 70%
		width: 100%
		text-align: center
		+sm(top, 77%)

	.swipe-slider__scores-tourists-numbers
		position: absolute
		left: 0px
		top: 88%
		width: 100%
		display: flex
		justify-content: center
		font-size: 2vw
		+sm(font-size, 3vw)
		+sm(top, 98%)
		

	.swipe-slider__scores-tourists-numbers span
		border: 2px solid #ffffff
		border-radius: 10px
		padding: 0.3vw 1.3vw 0.3vw 1.3vw
		+sm(border, 1px solid #ffffff)


</style>