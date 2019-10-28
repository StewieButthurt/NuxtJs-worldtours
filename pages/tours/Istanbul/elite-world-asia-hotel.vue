<template>
	<div class="wrapper-hotels-slider">
		<svg @click="clickButton()" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 25 25"  xml:space="preserve">
		<g>
			<path style="fill: white;" d="M12.5,0C5.597,0,0,5.597,0,12.5S5.597,25,12.5,25S25,19.403,25,12.5S19.403,0,12.5,0z M12.5,23.173
				c-5.885,0-10.673-4.788-10.673-10.673S6.615,1.827,12.5,1.827S23.173,6.615,23.173,12.5S18.385,23.173,12.5,23.173z"/>
			<polygon style="fill: white;" points="7.295,14 19,14 19,11 7.295,11 6.295,12.5 	"/>
			<polygon style="fill: white;" points="5.383,12.5 10.883,7 13.742,7 8.242,12.5 	"/>
			<polygon style="fill: white;" points="13.742,18 8.242,12.5 5.383,12.5 10.883,18 	"/>
		</g>
		</svg>
		<div class="container-slider-hotels">
			<div v-swiper:mySwiper="swiperOption">
			    <div class="swiper-wrapper">
			      <img-slides-hotels
					v-for="(item, index) in info"
					:img="item.img"
					:key="index"
			      ></img-slides-hotels>
			    </div>
			    <div class="swiper-pagination"></div>
			    <div class="swiper-button-prev" slot="button-prev"></div>
			    <div class="swiper-button-next" slot="button-next"></div>
			 </div>
		</div>
	</div>
</template>

<script>

	import ImgSlidesHotels from '~/components/img-slides-hotels'


	export default {
		layout: 'empty-white',
		data() {
			return {
				info: [
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/1.jpg')
					},
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/2.jpg')
					},
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/3.jpg')
					},
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/4.jpg')
					},
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/5.jpg')
					},
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/6.jpg')
					},
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/7.jpg')
					},
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/8.jpg')
					},
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/9.jpg')
					},
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/10.jpg')
					},
					{
						img: require('~/assets/city-turkey/istanbul-hotels/elite-world-asia-hotel/11.jpg')
					}
				],
		        swiperOption: {
		          navigation: {
		                      nextEl: '.swiper-button-next',
		                      prevEl: '.swiper-button-prev'
		          }
		        },
			}
		},
		components: {
			ImgSlidesHotels
		},
		methods: {
			clickButton() {
				this.$router.back()
			}
		}
	}
</script>


<style lang="sass" scoped>

	@import "~/assets/smart-grid.sass"

	.container-slider-hotels
		+wrapper()
		+size(9)
		padding-top: 2.66vmax
		padding-bottom: 2.66vmax

	.swiper-slide.swiper-slide-active
		opacity: 1


	.carousel-style
		height: 65.12vh
	

	.swiper-button-prev
		background-image: url('../../../assets/arrow-left.png')
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
		background-image: url('../../../assets/arrow-right.png')
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


	.swiper-container.swiper-container-initialized.swiper-container-horizontal
		height: 100%

	.wrapper-hotels-slider
		width: 100%
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))
		z-index: 40
		min-height: 100vh

	.wrapper-hotels-slider svg
		z-index: 40
		position: fixed
		left: 3%
		top: 5%
		width: 6vw
		height: 6vw
		cursor: pointer

	
</style>