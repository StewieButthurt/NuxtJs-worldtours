<template>
  <div class="main-background">
      <app-navbar />
      <nuxt />
      <app-footer />
  </div>
</template>


<script>
	import AppNavbar from '@/components/Navbar'
	import AppFooter from '@/components/footer'

	export default {
		components: {
			AppNavbar,
			AppFooter
		}
	}
</script>

<style lang="sass">
	@import "../assets/smart-grid.sass"

	.main-background
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url("../assets/back.png")
		background-size: cover
		margin: 0 auto
		width: 100%
		height: 66px


	

	body	
		margin: 0px
	


</style>
