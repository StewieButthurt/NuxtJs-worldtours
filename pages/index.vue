<template>
	  <div class="main">
	  		<div class="container-main">
	  			  		<transition
	  			  			key="transition-logo"
	  			    		enter-active-class="animated bounceIn" 
	  			    		appear
	  			    	>
	  				  		<div class="main__logo-title">
	  							<div class="logo-title_logo main__logo">
	  								<img src="../assets/logo.png">
	  							</div>
	  					 		<div class="main_title">
	  					 			Worldtours 
	  					 		</div>
	  				  		</div>
	  			  		</transition>
	  			  		
	  			  		<transition
	  						enter-active-class="animated fadeIn delay-1s"
	  						appear
	  						key="transition-text"
	  			  		>
	  			  			<div class="main_descr">
	  			  				Это лучшее турагенство  во всем южном округе.<br> 
	  			  				мы предлагаем вам качественный отдых<br>
	  			  				по приятным ценам.<br>
	  			  				С нами ваше путешествие<br> 
	  			  				станет незабываемым!<br>
	  			  			</div>
	  			  		</transition>

	  			  		<transition
	  						enter-active-class="animated bounceIn delay-2s"
	  						appear
	  						key="transition-button"
	  			  		>
	  			  			<nuxt-link class="main_button" to="/tours">
	  			  				Заказать тур
	  			  			</nuxt-link>
	  			  		</transition>
	  		</div>
	  </div>
</template>

<script>

export default {
	layout: 'empty',
	head: {
		title: 'Worldtours'
	}
}
</script>

<style lang="sass" scoped>

@import "../assets/smart-grid.sass"
	
.main 
	background-image: linear-gradient(rgba(0, 0, 0,0.3), rgba(0, 0, 0, 0.3)),url("../assets/back.png")
	background-size: cover
	background-position:  50% 50%
	height: 100vh
	width: 100%
	display: flex
	justify-content: center
	flex-wrap: wrap
	align-content: center
	font-family: 'Arsenal-Regular', sans-serif
	flex-direction: column
	align-items: center

.container-main
	+wrapper()

	
.main_title	
	font-size: 29px
	color: #ffffff
	text-transform: uppercase
	+xs(font-size, 23px)

.main_line
	width: 50px
	height: 3px
	background-color: white
	margin-top: 30px

.main_descr
	text-align: center
	font-size: 23px
	margin-top: 46px
	color: #ffffff
	text-transform: uppercase
	width: 100%
	+xs(font-size, 18px)


.main_button
	text-transform: uppercase
	font-size: 25px
	width: 286px
	height: 48px
	border-radius: 20px
	border: 1px solid #7c7c7c
	margin: 0 auto
	margin-top: 60px
	cursor: pointer
	transition-duration: 0.3s
	color: #ffffff
	text-decoration: none
	display: flex
	justify-content: center
	align-items: center
	+xs(width, 202px)
	+xs(height, 37px)
	+xs(font-size, 18px)
	

.main_button:active
	transition-duration: 0.3s
	transform: scale(0.9)

.main__logo-title
	display: flex
	align-content: center
	align-items: center
	flex-direction: column
	margin-right: 0px

.main__logo
	height: 102px
	width: 102px
	margin-bottom: 25px
	margin-right: 0px
	+xs(width, 80px)
	+xs(height, 80px)


	



</style>
