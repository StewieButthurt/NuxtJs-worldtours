<template>
	<div class="swiper-slide">
		<img :src="img">
		<div class="swiper-slide__mask"></div>
	</div>
</template>

<script>
	export default {
		props: [
			'img'
		]
}
</script>

<style lang="sass" scoped>
	@import "../assets/smart-grid.sass"
	

	.swiper-slide img
		width: 100%
		height: 100%

	.swiper-slide.swiper-slide-active img
		width: 100%
		height: 100%

	.swiper-slide__mask
		position: absolute
		left: 0px
		top: 0px
		background-color: black
		z-index: 1
		width: 100%
		height: 100%
		opacity: 0

</style>