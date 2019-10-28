<template>
	<div class="about">
		<div class="about__title">
			ваш отдых - наша профессия
		</div>
		<div class="section-about-us">
			<div class="section-about-us__img">
				<img src="~/assets/about-1.png">
			</div>
			<div class="section-about-us__descr">
				worldtours - это современный, удобный и<br> 
				функциональный сервис для путешествий<br>
				в самые популярные страны мира.<br>
				<br>
				<br>
				мы работаем на территории Южного<br> 
				округа России (кроме республики Крым),<br> 
				<br>
				а именно:<br>
				<br>
				в республике Адыгея,<br>
				<br> 
				в Астраханской области,<br>
				<br> 
				в волгоградской области,<br> 
				<br>
				в краснодарском крае,<br> 
				<br>
				в ростовской области<br> 
				<br>	
				и в г. Севастополь.<br>
			</div>
		</div>
		<div class="section-about-us flex-revers">
			<div class="section-about-us__descr">
				Главные достоинства нашего сервиса - это<br> 
				комфорт и безопасность наших клиентов.<br>
				Выбирая Worldtours, вы получаете:<br> 
				<br>	
				- перелёт бизнес класса в обе стороны<br>
				<br>
				- Трансфер от аэропорта до отеля<br>
				<br>
				- полный пансион в любом выбранном<br> 
				  вами отеле<br>
				<br>
				Все эти услуги входят в стоимость<br> 
				каждого тура<br> 
				который предлагает наша компания.<br>
				Мы так же учитываем ваши пожелания и<br> 
				можем включить их в программу тура<br> 
				на любом этапе.<br> 
				всё, что от вас потребуется - это выбрать<br> 
				направление, оформить заявку<br> 
				и дождаться звонка оператора<br> 
				всё остальное мы с увереностью<br> 
				возьмем на себя<br>
			</div>
			<div class="section-about-us__img mr-108 mr-108">
				<img src="~/assets/about-2.png">
			</div>
		</div>
		<div class="we-company">
			мы - серьезная компания,<br> 
			поэтому мы готовы предоставить вам гарантии качества<br>
			Если вы, по какой-либо причине,<br> 
			останетесь неудовлетворены<br>
			мы готовы вернуть вам до 100% стоимости тура<br>
		</div>
		<div class="select-worldtours">
			Выбирая Worldtours<br> 
			<br>
			-
			<br>
			Вы делаете выбор в пользу качества, комфорта и спокойствия 
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="sass">
	@import "@/assets/smart-grid.sass"

	.about
		display: flex
		flex-direction: column
		align-content: center
		flex-wrap: wrap 
		background-color: #e8f0ff
		color: #0c303c
		font-family: "Century Gothic"
		text-transform: uppercase

	.about__title
		font-size: 30px
		margin-top: 94px
		margin-bottom: 75px
		text-align: center
		+xs(font-size, 25px)
		+xs(padding-left, 10px)
		+xs(padding-right, 10px)

	.section-about-us
		display: flex
		justify-content: space-around
		flex-wrap: wrap
		width: 100%
		max-width: 1108px 
		margin-bottom: 100px

	.section-about-us__img
		width: 434px
		height: 635px
		margin-left: 20px
		margin-right: 20px
		+xs(width, 280px)
		+xs(height, 481px)

	.section-about-us__img img
		width: 100%
		height: 100%

	.section-about-us__descr
		padding: 102px 0px 0px 0px
		font-size: 18px
		margin-left: 20px
		margin-right: 20px

	.mr-108
		margin-top: 108px
	
	.flex-revers
		flex-wrap: wrap-reverse

	.we-company
		text-align: center
		font-size: 20px
		margin-bottom: 120px
		margin-top: 63px
		margin-left: 20px
		margin-right: 20px

	.select-worldtours
		font-size: 25px
		text-align: center
		margin-bottom: 150px
		margin-left: 20px
		margin-right: 20px
		+xs(font-size, 25px)
</style>