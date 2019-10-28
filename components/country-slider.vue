<template>
	<div class="container-slider" v-if="activeTour">
		<div class="container-slider__title">
			{{country}}
		</div>
		<div v-swiper:mySwiper="swiperOption">
		    <div class="swiper-wrapper">
		      <img-slides
				v-for="(item, index) in info"
				:key="item.city1"
				:city="item.city"
				:img="item.img"
				:lat="item.lat"
				:lon="item.lon"
				:numberRounds="item.numberRounds"
				:hotel="item.hotel"
				:descrMain="item.descrMain"
		      ></img-slides>
		    </div>
		    <div class="swiper-pagination"></div>
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		 </div>
		 <div class="container-slider__descr">
		 	{{numberTextParams}}
		 </div>
		 <div class="container-slider__descr-mobile">
		 	{{numberTextParams}}
		 </div>
		 <nuxt-link no-prefetch  class="container-slider__button" :to="`/tours/${sliderCountCity}`">
		 	<span>выбрать этот город</span>
		 </nuxt-link>
	</div>
</template>

<script>

	import ImgSlides from './img-slides'


	export default {
		props: [
			'country',
			'city1',
			'lat1',
			'lon1',
			'hotel1',
			'city1EN',
			'descrMain1',
			'descrBottom1',
			'numberRounds1',
			'city2',
			'lat2',
			'lon2',
			'hotel2',
			'city2EN',
			'descrMain2',
			'descrBottom2',
			'numberRounds2',
			'city3',
			'lat3',
			'lon3',
			'hotel3',
			'city3EN',
			'descrMain3',
			'descrBottom3',
			'numberRounds3',
			'img1',
			'img2',
			'img3'		
		],
		data() {
			return {
				info: [
					{
						city: this.city1,
						img: this.img1,
						lat: this.lat1,
						lon: this.lon1,
						numberRounds: this.numberRounds1,
						hotel: this.hotel1,
						descrMain: this.descrMain1
					},
					{
						city: this.city2,
						img: this.img2,
						lat: this.lat2,
						lon: this.lon2,
						numberRounds: this.numberRounds2,
						hotel: this.hotel2,
						descrMain: this.descrMain2
					},
					{
						city: this.city3,
						img: this.img3,
						lat: this.lat3,
						lon: this.lon3,
						numberRounds: this.numberRounds3,
						hotel: this.hotel3,
						descrMain: this.descrMain3
					}
				],
		        swiperOption: {
		          navigation: {
		                      nextEl: '.swiper-button-next',
		                      prevEl: '.swiper-button-prev'
		          },
		          on: {
		          	slideNextTransitionStart : () => {
		          		if(this.sliderCount === 3) {
		          			sliderCount = 3;
		          		} else {
		          			this.sliderCount++
		          		}
			        },
			        slidePrevTransitionStart : () => {
			          	if(this.sliderCount === 1) {
		        			this.sliderCount = 1;
		        		} else {
		        			this.sliderCount--;
		        		}
			          }
		          // some swiper options...
		          },
		        },
		        sliderCount: 1
			}
		},
		components: {
			ImgSlides
		},
		computed: {
			numberTextParams() {
				if(this.sliderCount === 1) {
					return this.descrBottom1;
				} else if( this.sliderCount === 2) {
					return this.descrBottom2;
				} else if(this.sliderCount === 3) {
					return this.descrBottom3;
				}
			},
			sliderCountCity() {
				if(this.sliderCount === 1) {
					return this.city1EN;
				} else if(this.sliderCount === 2) {
					return this.city2EN;
				} else if(this.sliderCount === 3) {
					return this.city3EN;
				}
			},
			activeTour() {
				return this.$store.getters['tours/activeTour']
			}
		}
	}
</script>


<style lang="sass">

	@import "../assets/smart-grid.sass"

	.container-slider
		+wrapper()
		+size(9)
		+size-md(11)
		padding-top: 2.66vmax
		// min-height: 100vh
		padding-bottom: 4vw

	.container-slider__title
		text-align: center
		color: #17404a
		font-size: 36px
		font-family: "Century Gothic"
		margin-bottom: 2.66vmax
		+xs(font-size, 28px)

	.carousel-style
		height: 65.12vh
	

	.swiper-button-prev
		background-image: url('../assets/arrow-left.png')
		+md(background-size, 28px 54px)
		+md(height, 51px)
		+md(width, 30px)
		+sm(width, 21px)
		+sm(height, 39px)
		+sm(background-size, 32px 40px)
		+xs(background-size, 20px 28px)
		+xxs(background-size, 15px 21px)
		+xxs(left, 2px)

	.swiper-button-prev:focus
		outline: none


	.swiper-button-next
		background-image: url('../assets/arrow-right.png')
		+md(background-size, 28px 54px)
		+md(height, 51px)
		+md(width, 30px)
		+sm(width, 21px)
		+sm(height, 39px)
		+sm(background-size, 32px 40px)
		+xs(background-size, 20px 28px)
		+xxs(background-size, 15px 21px)
		+xxs(right, 2px)


	.swiper-button-next:focus
		outline: none

	.swiper-container
		// max-width: 970px
		// max-height: 540px

	.container-slider__descr
		max-width: 60vmax
		text-align: center
		color: #15505d
		text-transform: uppercase
		font-style: italic
		font-family: "Century Gothic"
		margin-top: 2vw
		font-size: 1.5vw
		+md(font-size, 2.1vw)
		+xs(display, none)
		margin: 0 auto 
		margin-top: 3vmax

	.container-slider__descr-mobile
		display: none
		text-align: center
		color: #15505d
		text-transform: uppercase
		font-style: italic
		font-family: "Century Gothic"
		margin-top: 2vw
		font-size: 1.5vw
		+md(font-size, 2.1vw)
		+xs(display, block)
		+xs(font-size, 3.1vw)
		+xxs(font-size, 4.1vw)


	.container-slider__button
		display: flex
		justify-content: center
		flex-wrap: wrap
		align-content: center
		box-shadow: -0.12vw 0.25vw 0.43vw 0.06vw rgba(0, 0, 0, 0.71)
		border-radius: 10px
		border: 0.12vw solid #287b8e
		color: #287b8e
		width: 289px
		height: 62px
		margin: 0 auto
		font-size: 23px
		margin-top: 4vw
		text-decoration: none
		transition-duration: 0.3s
		+md(width, 29.62vw)
		+md(height, 6vw)
		+md(font-size, 2.3vw)
		+sm(width, 38.62vw)
		+sm(height, 7vw)
		+sm(font-size, 2.5vw)
		+xs(font-size, 3vw)
		+xs(height, 8vw)
		+xs(width, 40.62vw)
		+xxs(height, 5vw)
		+xxs(width, 40.62vw)
		+xxs(font-size, 2.5vw)
		+xxs(box-shadow, -0.20vw 0.40vw 0.60vw 0.1vw rgba(0, 0, 0, 0.71))

	.container-slider__button span
		text-transform: uppercase 
		font-family: "Century Gothic"
		text-shadow: -0.2vw 0.3vw 0.4vw black
		+xs(text-shadow, -0.2vw 0.3vw 0.8vw black)
		+xxs(text-shadow, -0.2vw 0.5vw 0.6vw black)

	.container-slider__button:active
		transition-duration: 0.3s
		transform: scale(0.9)



		
</style>