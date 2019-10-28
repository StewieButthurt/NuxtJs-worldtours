<template>
	<div :key="indexKey">
		<div class="hotel" key="hotel">
			<nuxt-link no-prefetch :to="`${city}/${titleUrl}`" class="hotel__img" >
				<img :src="require(`~/assets/${img}`)">
			</nuxt-link>
			<div class="hotel__descr" key="otel__descr">
				<div class="hotel__descr-title" key="hotel__descr-title">
					{{title}}
				</div>
				<div class="hotel__descr-price" key="hotel__descr-price">
					{{price}}
				</div>
				<div class="hotel__descr-descr" key="hotel__descr-descr">
					{{descr}}
				</div>
				<div 
					class="hotel__descr-button" 
					key="hotel__descr-button" 
					v-if="buttonAccess"
					@click="selectedHotel(title)"
					>
					<span>выбрать этот отель</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	
	export default {
		computed: {
			buttonHotelAccess() {
				return this.$store.getters['city/buttonHotelAccess']
			}
		},
		props: [
			'title',
			'price',
			'descr',
			'img',
			'indexKey',
			'buttonAccess',
			'city',
			'titleUrl',
			'cityRU',
			'countryRU'
		],
		data() {
			return {
				accessSliderHotel: false
			}
		},
		methods: {
			selectedHotel(hotel) {
				this.$store.dispatch('city/buttonHotel')
				this.$store.dispatch('city/clickCityButton')

				if(this.buttonHotelAccess === true) {
					let cityRU = this.cityRU
					let countryRU = this.countryRU
					let context = this
					async function content({cityRU, countryRU, context}) {
						
						await context.$store.dispatch('city/selectedHotel', {hotel})
						await context.$store.dispatch('city/selectedCityTour', {cityRU})
						await context.$store.dispatch('city/selectedCountryTour', {countryRU})
						context.$store.dispatch('city/form')
					}
					
					content({cityRU, countryRU, context})
					
					// this.$router.push('/contacts')
				} else {
					this.$scrollTo('#panel')
				}
			}
		}
	}
</script>

<style lang="sass">
	@import "~/assets/smart-grid.sass"


	.hotel
		margin-bottom: 117px
		display: flex
		justify-content: center
		user-select: none 
		+md(margin-bottom, 31px)
		+ms(margin-bottom, 65px)
		+ms(flex-direction, column)
		+ms(align-items, center)
		+xs(margin-bottom, 70px)
		
	
	.hotel__container
		+wrapper

	.hotel__img
		width: 394.5px
		height: 264px
		cursor: pointer
		+md(width, 304px)
		+md(height, 174px)
		+ms(width, 430px)
		+ms(height, 304px)
		+xs(width, 280px)
		+xs(height, 154px)

	.hotel__img img
		width: 100%
		height: 100%

	.hotel__descr
		width: 398px
		min-height: 264px
		margin-left: 49px
		display: flex
		flex-direction: column
		justify-content: space-between
		+md(justify-content, flex-start)
		+md(margin-left, 30px)
		+ms(width, 430px)
		+ms(margin-top, 50px)
		+xs(width, 270px)
		+xs(margin-left, 0px)


	.hotel__descr-title
		color: #284e6c
		font-size: 26px
		text-transform: uppercase
		font-family: "Century Gothic"
		margin-bottom: 13.6px
		width: 100%
		+md(font-size, 21px)
		+md(margin-bottom, 20px)
		+ms(font-size, 27px)
		+xs(font-size, 22px)

	.hotel__descr-price
		color: #c95b87
		font-family: "Century Gothic"
		font-size: 25px
		font-style: italic
		text-transform: uppercase
		width: 100%
		+md(font-size, 20px)
		+ms(font-size, 25px)
		+xs(font-size, 20px)

	.hotel__descr-descr
		color: #15505d
		font-family: "Century Gothic"
		font-size: 15px
		font-style: italic
		text-transform: uppercase
		width: 100%
		margin-top: 13.6px
		margin-bottom: 32.7px
		+md(margin-top, 20px)
		+md(font-size, 14px)
		+ms(font-size, 17px)
		+ms(margin-bottom, 40px)


	.hotel__descr-button
		width: 201px
		height: 38px
		background-color: #cccccc
		color: #ffffff
		font-family: "Century Gothic"
		font-size: 16px
		text-transform: uppercase
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap 
		cursor: pointer
		transition-duration: 0.3s
		text-decoration: none
		+md(width, 180px)
		+md(height, 36px)
		+md(font-size, 14px)
		+ms(width, 210px)
		+ms(height, 44px)
		+ms(font-size, 16px)
		+ms(margin, 0 auto)

	.hotel__descr-button:active
		transition-duration: 0.3s
		transform: scale(0.9)

	
   

</style>