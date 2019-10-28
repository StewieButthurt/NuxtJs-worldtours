<template>
	<transition name="fade" 
				enter-active-class="animated fadeInLeft" 
				leave-active-class="animated fadeOutLeft"
				mode="out-in" 
				appear
				>
		<div class="mobile-menu">
			<nuxt-link no-prefetch class="menu-link menu-link__modile"  @click.native="clickMobileLink()" to="/tours">Туры</nuxt-link>
			<nuxt-link no-prefetch class="menu-link menu-link__modile"  @click.native="clickMobileLink()" to="/about">О Нас</nuxt-link>
			<nuxt-link no-prefetch class="menu-link menu-link__modile"  @click.native="clickMobileLink()" to="/contacts">Контакты</nuxt-link>
		</div>
	</transition>
</template>

<script>
	export default {
		methods: {
			clickMobileLink() {
				this.$emit('clickMobileLink')
			}
		}
	}
</script>

<style lang="sass">
	@import "../assets/smart-grid.sass"
	
	.mobile-menu
		display: none
		position: fixed
		top: 0px
		left: 0px
		height: 100vmax
		color: white
		font-size: 24px
		background:  linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))
		+wrapper()
		flex-direction: column
		margin: 0 auto
		align-items: center
		+size(3)
		+size-xs(5)
		+size-xxs(7)
		align-content: center
		padding-top: 60px
		+ms(display, flex)
		+xxs(width, 150px)
		flex-wrap: wrap 
		z-index: 30




	.menu-link__modile
		margin-top: 20px

	.menu-link
	  display: flex 
	  margin-right: 15px
	  margin-left: 15px
	  cursor: pointer
	  text-decoration: none 
	  color: #ffffff
	
	.menu-link:hover 
	  color: #a3a3a3

	.menu-link__modile
		margin-top: 20px

</style>