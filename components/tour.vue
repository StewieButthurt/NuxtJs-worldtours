<template>
	<div class="tour-card-container" :class="{'tour-card-container-between' : evenTur}" @click="$emit('clickTours', indexTour)">
		<a href="#" class="tour-card" 
			:class="{'tour-card-even-tur' : evenTur}"
			 v-scroll-to="'#scrollHere'"
			 @mouseleave="mouseLeaveHoverClasses()" 
			 @mouseenter="hoverClass1 = true">
			<img :class="{'tour-card_img' : hoverClass1}" :src="img" :alt="`${country}-photo`">
			<div class="tour-card_text" :class="{'tour-card__text-specular' : evenTur}">
				{{country}}
			</div>
			<span class="tour-card_mask"></span>
		</a>
	</div>
</template>

<script>

	export default {
		props: [
			'country',
			'img',
			'indexTour'
		],
		data() {
			return {
				hoverClass1: false
			}
		},
		methods: {
			mouseLeaveHoverClasses() {
					this.hoverClass1 = false;
			}
		},
		computed: {
			evenTur() {
				if(((this.indexTour + 1) % 2) === 0) {
					return true
				} else {
				 	return false
				}

			}
		}
	}	
</script>

<style lang="sass">
	@import "../assets/smart-grid.sass"
	
	.tour-card-container
		+size(6)
		display: flex
		+ms(justify-content, center)
		+size-xs(10)
		height: 158px

	.tour-card-container-between
		display: flex
		justify-content: flex-end
		+ms(justify-content, center)

	.tour-card
		width: 32vh
		height: 20vh
		max-width: 344px
		max-height: 215px
		overflow: hidden
		position: relative
		cursor: pointer
		box-shadow: 8px -8px 7px 1px rgba(0, 0, 0, 0.38)



	.tour-card img
		-moz-transition: all 0.2s ease-out
		-o-transition: all 0.2s ease-out
		-webkit-transition: all 0.2s ease-out
		width: 100%
		height: 100%
		
		
	.tour-card_img
		-webkit-transform: scale(1.1)
		-moz-transform: scale(1.1)
		-o-transform: scale(1.1)
		

	.tour-card_text
		position: absolute
		top: 10%
		left: 5%
		color: #ffff
		font-size: 30px
		z-index: 1

	.tour-card__text-specular
		left: inherit
		right: 5%
		



	.tour-card_mask
		position: absolute
		width: 34.5vh
		height: 22.25vh
		top: 0px
		left: 0px
		background-color: black
		opacity: 0

	.tour-card-even-tur
		box-shadow: -9px -7px 7px 1px rgba(0, 0, 0, 0.43)


</style>


