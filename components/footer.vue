<template>
	<div class="footer">
		<div class="content-footer">
			© 2019 Wordtours, Designed by Kira Rimalo
		</div>
	</div>
</template>

<style lang="sass">
	@import "~/assets/smart-grid.sass"

	.footer
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url("../assets/footer.png")
		background-size: cover
		height: 100px
		width: 100%
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		color: white
		text-transform: uppercase
		font-family: "Century Gothic"
		font-size: 18px
		text-align: center

	.content-footer
		+wrapper()
</style>