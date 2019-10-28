<template>
	<input  
		class="contacts-input-enter" 
		type="text" 
		:placeholder="placeholder"
		:class="{'inputRedBorder' : redBorder, 
				 'inputGreenBorder' : greenBorder}"
		v-model="text"
		@input="onInput"
		@focus="placeholder = ''"
		@blur="placeholder = name"
		>
</template>

<script>
	import isEmail from 'validator/lib/isEmail';
	import isAlpha from 'validator/lib/isAlpha';
	import isNumeric from 'validator/lib/isNumeric';

	export default {
		data() {
			return {
				text: '',
				placeholder: this.name,
				locale: ['ru-RU']
			}
		},
		props: [
			'name',
			'redBorder',
			'index',
			'greenBorder',
			'value'
		],
		methods: {
			onInput() {
				if( this.name === 'ИМЯ') {
					let validateName = isAlpha(this.text, this.locale);
					this.inputEmit(validateName);
				} else if (this.name === 'E-MAIL') {
					let validateName = isEmail(this.text);
					this.inputEmit(validateName);
				} else if (this.name === '+7XXXXXXXXXX') {
					let validateName = isNumeric(this.text);
					this.inputEmit(validateName);
				}
			},
			inputEmit(validateName) {
				this.$emit('inputValidate', 
					{
						indexElement: this.index,
						resultValidate: validateName,
						inputText: this.text
					})
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import "@/assets/smart-grid.sass"

	.contacts-input-enter
		width: 344px
		height: 56px
		border-radius: 10px
		font-family: "Century Gothic"
		font-size: 24px
		color: #1e4856
		margin-bottom: 85px
		display: flex
		justify-content: center
		+xs(width, 270px)
		+xs(height, 45px)


	input 
		outline: none
		border: 2px solid #abc1c8
		text-align: center

	input::-webkit-input-placeholder 
		font-size: 24px
		color: #b7c4c8
		font-family: "Century Gothic"
		text-transform: uppercase
	
	input:-ms-input-placeholder
		font-size: 24px
		color: #b7c4c8
		font-family: "Century Gothic"
		text-transform: uppercase
	
	input::-ms-input-placeholder
		font-size: 24px
		color: #b7c4c8
		font-family: "Century Gothic"
		text-transform: uppercase
	
	input::-moz-placeholder
		font-size: 24px
		color: #b7c4c8
		font-family: "Century Gothic"
		text-transform: uppercase

	input::placeholder
		font-size: 24px
		color: #b7c4c8
		font-family: 'Century Gothic'
		text-transform: uppercase

	.inputRedBorder
		border: 2px solid #c0301c

	.inputGreenBorder
		border: 2px solid green
		
	
</style>