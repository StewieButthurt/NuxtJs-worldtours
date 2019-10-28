<template>
	<div class="navbar" id="panel">
		<nuxt-link no-prefetch exact class="logo-title" to="/tours">
			<div class="logo-title_logo">
				<img src="../assets/logo.png">
			</div>
			<div class="logo-title_title">
				Worldtours
			</div>
		</nuxt-link>
		<ul class="navbar_link">
			<li class="nav-item">
				<nuxt-link no-prefetch class="nav-link" active-class="active" to="/tours">Туры</nuxt-link>
			</li>
			<li class="nav-item">
				<nuxt-link no-prefetch class="nav-link" active-class="active" to="/about">О Нас</nuxt-link>
			</li>
			<li class="nav-item">
				<nuxt-link no-prefetch class="nav-link" active-class="active" to="/contacts">Контакты</nuxt-link>
			</li>
		</ul>
		<div class="hamburger" @click="rotate = !rotate">
		  <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-1': rotate}"></div>
		  <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-2': rotate}"></div>
		  <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-3': rotate}"></div>
		</div>
	  	<app-menu 
			v-show="rotate === true"
			@clickMobileLink="clickMobileLink()"
		>		
		</app-menu>
		
	</div>
</template>


<script>

import AppMenu from './mobile-menu';

export default {
	components: {
	  AppMenu
	},
	data() {
		return {
			rotate: false
		}
	},
	methods: {
		clickMobileLink() {
			this.rotate = false;
		}
	}
}

</script>


<style lang="sass">
	@import "../assets/smart-grid.sass"


	.navbar
		+wrapper()
		+row-flex()
		+size(11)
		display: flex
		justify-content: space-between
		margin: 0 auto
		height: 66px
		align-content: center
		font-family: "Century Gothic"
		align-items: center
		flex-wrap: nowrap
		
	
	
	.logo-title
		display: flex
		align-items: center
		width: 387px
		cursor: pointer
		text-decoration: none
		+ms(margin-left, 40px) 

	.logo-title_logo
		width: 51px
		height: 52px
		margin-right: 21px

	.logo-title_logo img
		width: 100%
		height: 100%
  
	.logo-title_title
		color: #ffffff
		text-transform: uppercase
		font-size: 40px
		display: flex
		+sm(font-size, 30px)
		+xs(font-size, 20px)

	.navbar_link
		display: flex
		+size(4)
		+size-md(5)
		justify-content: space-between
		+ms(display, none)

	.nav-item
		width: 128px
		font-size: 18px
		display: flex
		justify-content: center
		text-transform: uppercase
		color: #ffffff
		text-decoration: none 
		
	.nav-link
		text-decoration: none 
		color: #ffffff



	.active
		color: #ffffff
		border-bottom: 1px solid #ffffff



	.hamburger
	  display: none
	  justify-content: center
	  flex-direction: column
	  cursor: pointer
	  +ms(display, flex)
	  z-index: 40
	  position: fixed

	.hamburger-element
	  transition: 0.2s
	  width: 23px
	  height: 3px 
	  margin: 1px 0px 1px 0px
	  background-color: white
	  border: 1px solid black

	.hamburger-element-rotate-1
	  -webkit-transform: rotate(45deg) translateY(10px)
	   transform: rotate(45deg) translateY(10px)
	   background-color: white
	
	.hamburger-element-rotate-2
		width: 0px
	   	opacity: 0
	   	-webkit-transition: 0.1s
	   	transition: 0.1s
	   	background-color: white
	
	.hamburger-element-rotate-3
		-webkit-transform: rotate(-45deg) translateY(-10px)
		transform: rotate(-45deg) translateY(-10px)
		background-color: white

</style>