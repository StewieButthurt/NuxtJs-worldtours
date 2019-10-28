<template>
	<div class="wrapper-hotels-slider" v-if="accessSliderHotel">
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

	import ImgSlidesHotels from './img-slides-hotels'


	export default {
		props: [
			'img1',
			'img2',
			'img3',		
			'img4',		
			'img5',
			'accessSliderHotel'		
		],
		data() {
			return {
				info: [
					{
						img: this.img1
					},
					{
						img: this.img2
					},
					{
						img: this.img3
					},
					{
						img: this.img4
					},
					{
						img: this.img5
					},
				],
		        swiperOption: {
		          navigation: {
		                      nextEl: '.swiper-button-next',
		                      prevEl: '.swiper-button-prev'
		          },
		          on: {
		          	slideNextTransitionStart : () => {
		          		if(this.sliderCount === 5) {
		          			sliderCount = 5;
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
			ImgSlidesHotels
		}
	}
</script>


<style lang="sass" scoped>

	@import "../assets/smart-grid.sass"

	.container-slider-hotels
		+wrapper()
		+size(2)
		+size-md(11)
		padding-top: 2.66vmax
		padding-bottom: 2.66vmax

	.swiper-slide.swiper-slide-active
		opacity: 1


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


	.swiper-container.swiper-container-initialized.swiper-container-horizontal
		height: 100%

	.wrapper-hotels-slider
		position: fixed
		top: 0px
		left: 0px
		width: 100%
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))
		min-height: 100vh
		z-index: 40
		
</style>