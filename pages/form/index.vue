<template>
	<div>
		<div class="raindrops">
		</div>
		<div class="section-form">
			<div class="last-step">
				Остался Последний шаг
			</div>
			<div class="like">
				<img src="../../assets/like.png">
			</div>
			<div class="form-descr">
				оставьте ваш телефон и наш оператор свяжется с вами в ближайшее время
			</div>
			<div class="form-group">
				<div class="info-client">
					<div class="logo-contacts">
						<img src="../../assets/logo-contacts.png">
					</div>
					<div class="your-tour">
						Ваш Тур
					</div>
					<div class="your-tour">
						Из {{ $route.query.OutTown}} в {{$route.query.InTown}} ({{$route.query.country}})
					</div>
					<div class="your-tour">
						Приезд {{ time.coming }} → Отъезд {{time.departure}}
					</div>
					<div class="your-tour">
						{{ $route.query.numberPeople}}
					</div>
					<div class="your-tour">
						Отель "{{ $route.query.hotel}}"
					</div>
					<div class="your-tour">
						Приятного отдыха!
					</div>
				</div>
				<div class="form-group__form">
					<client-only>
						<app-input
							v-for="(item, index) in inputInfo"
							:key="item.title"
							:name="item.title"
							:redBorder="item.redBorder"
							:greenBorder="item.greenBorder"
							@inputValidate="inputValidate($event)"
							:index="index"
							:value="item.value"
						></app-input>
					</client-only>
					<div class="button-form" :class="{'button-disabled' : !buttonAccess}" @click="sendForm()">
						<span>Отправить</span>
					</div>
					<transition name="fade" 
									enter-active-class="animated fadeIn" 
									leave-active-class="animated fadeOut"
									mode="out-in" 
									appear
									key="formSuccess__svg-false"
									>
						<div v-show="recaptchaCheck === true">
								<recaptcha
									@error="onError"
								    @success="register"
							        @expired="onExpired"
								/>
						</div>
					</transition>
					<div class="formSuccess" v-if="sendFormAccess === false">
						<transition name="fade" 
									enter-active-class="animated fadeIn" 
									leave-active-class="animated fadeOut"
									mode="out-in" 
									appear
									key="formSuccess__svg-false"
									>
							<div class="formSuccess__svg" >
								<svg width="40px" height="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
								<circle style="fill:#D75A4A;" cx="25" cy="25" r="25"/>
								<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16 
									"/>
								<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34 
									"/>
								</svg>
							</div>
						</transition>
						<transition name="fade" 
									enter-active-class="animated fadeIn" 
									leave-active-class="animated fadeOut"
									mode="out-in" 
									appear
									key="formSuccess__text-false"
									>
							<div class="formSuccess__text">
								Ошибка отправки формы! Перезагрузите страницу и попробуйте снова!
							</div>
						</transition>
					</div>
				</div>
			</div>
			<div class="select">
				Спасибо, что выбрали WORLDTOURS!
			</div>
		</div>
	</div>
</template>


<script>
	import AppInput from '@/components/input'
	import * as nprogress from 'nprogress';

	if(process.browser) {
		nprogress.set(0.0);   
		nprogress.set(0.4);
		nprogress.set(1.0);
	}

	export default {
		data() {
			return {
				inputInfo: [
					{
						title: 'ИМЯ',
						redBorder: false,
						greenBorder: false,
						value: '',
						counterButton: 0
					},
					{
						title: 'E-MAIL',
						redBorder: false,
						greenBorder: false,
						value: '',
						counterButton: 0
					},
					{
						title: '+7XXXXXXXXXX',
						redBorder: false,
						greenBorder: false,
						value: '',
						counterButton: 0
					}
				],
				redBorderMessage: false,
				greenBorderMessage: false,
				valueMessage: '',
				buttonAccess: false,
				counter: 0,
				sendFormAccess: null,
				recaptchaCheck: false
			}
		},
		computed: {
			time() {
				let st = this.$route.query.time
				let arr = st.split('),')
				let time1 = new Date(Date.parse(arr[0]))
				let time2 = new Date(Date.parse(arr[1]))
				let coming = `${time1.getDate().toString().padStart(2, "0")}.${(time1.getMonth() + 1).toString().padStart(2, "0")}`
				let departure  = `${time2.getDate().toString().padStart(2, "0")}.${(time2.getMonth() + 1).toString().padStart(2, "0")}`

				return {
					coming: coming,
					departure: departure
				}
			}
		},
		components: {
			AppInput
		},
		methods: {
			inputValidate(event) {
				if(event.resultValidate === true) {
					this.inputInfo[event.indexElement].redBorder = false;
					this.inputInfo[event.indexElement].greenBorder = true;
					this.inputInfo[event.indexElement].value = event.inputText;
					this.inputInfo[event.indexElement].counterButton = 1;
					this.disabledButton()
				} else if (event.resultValidate === false) {
					this.inputInfo[event.indexElement].greenBorder = false;
					this.inputInfo[event.indexElement].redBorder = true;
					this.inputInfo[event.indexElement].counterButton = 0;
					this.disabledButton()
				} 
			},
			disabledButton() {
				let counter = 0;
				this.inputInfo.forEach(function callback(currentValue, index, array) {
				   if(currentValue.counterButton === 1) {
				   	counter++
				   }
				})
				this.counter = counter;
				if( this.inputInfo.length === this.counter){
				    this.buttonAccess = true
				} else {
					this.buttonAccess = false 
				}
			},
			async sendForm() {
				if(this.buttonAccess === true) {
					this.recaptchaCheck = true
					try {
						const token = await this.$recaptcha.execute('login')
					} catch (error) {
						console.log('Login error:', error)
					}
					
				}
			},
			onExpired () {
			      console.log('Expired')
			},
			onError (error) {
			      console.log('Error happened:', error)
			},
			register(recaptchaToken) {
					nprogress.start()
					this.$axios.post('/form', 
					{
						info: this.inputInfo,
						OutTown: this.$route.query.OutTown,
						InTown: this.$route.query.InTown,
						country: this.$route.query.country,
						coming: this.time.coming,
						departure: this.time.departure,
						numberPeople: this.$route.query.numberPeople,
						hotel: this.$route.query.hotel,
						recaptchaToken: recaptchaToken
					})
					.then(response => {
						this.$router.push('/tours')
						nprogress.done()
					}, response => {
							console.log("Error 404")
							nprogress.done()
							this.recaptchaCheck = false
							this.sendFormAccess = false
					})
			}
		},
		async mounted() {
		    await this.$recaptcha.init()
		}
	}
</script>


<style lang="sass">
	@import "@/assets/smart-grid.sass"

	.raindrops
		width: 100%
		height: 250px
		background: url("../../assets/raindrops.png")

	.last-step
		font-family: "Century Gothic"
		text-transform: uppercase
		font-size: 30px
		color: #3c5963
		margin-bottom: 23px
		text-align: center

	.section-form
		background-color: #e8f0ff
		padding-top: 79px
		display: flex
		flex-direction: column
		align-items: center

	.like
		height: 95px
		width: 107px
		margin-bottom: 35px
	.like img
		width: 100%
		height: 100%

	.form-descr
		+wrapper()
		text-transform: uppercase
		font-size: 23px
		color: #3c5963
		font-family: "Century Gothic"
		text-align: center
		padding: 0px 5px 0px 5px
		font-weight: 400
		margin-bottom: 42px

	.form-group
		max-width: 1060px
		width: 100%
		background-color: #abc1c8
		display: flex 
		flex-wrap: wrap
		justify-content: space-around
		margin-bottom: 100px
		

	.info-client
		margin-top: 50px
		margin-bottom: 50px
		width: 485px
		background-color: #bcced4
		display: flex
		flex-direction: column
		align-items: center
		+xs(width, 310px)

	.logo-contacts
		width: 91px
		height: 91px
		margin-top: 36px
		margin-bottom: 21px

	.logo-contacts img
		width: 100%
		height: 100%

	.your-tour
		color: #1e4856
		font-size: 24px
		text-transform: uppercase
		font-style: italic
		font-family: "Century Gothic"
		margin-bottom: 54px
		width: 390px
		text-align: center
		+xs(width, 300px)

	.form-group__form
		width: 364px
		display: flex
		flex-direction: column
		align-items: center
		justify-content: center
		margin-top: 50px
		margin-bottom: 50px
		+xs(width, 310px)


	.button-form
		width: 299px
		height: 70px
		background-color: #4ea2be
		border-radius: 15px
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap 
		box-shadow: 2px 2px 8px black
		margin-top: 20px
		cursor: pointer
		transition-duration: 0.3s
		user-select: none	
		+xs(width, 232px)
		+xs(height, 62)

	.button-form span
		color: #1d5163
		font-size: 24px 
		text-transform: uppercase
		font-family: "Century Gothic"

	.button-form:active
		transition-duration: 0.3s
		transform: scale(0.9)
	
	.button-disabled
		background-color: #a1b2b7
		
	.button-disabled:active
		transform: scale(1)

	.button-disabled span
		color: #d2e1e6

	.grecaptcha-badge
		z-index: 999999

	.g-recaptcha
		margin-top: 20px

	.formSuccess
		height: 44px
		width: 400px
		display: flex
		justify-content: center
		align-items: center
		margin-left: 15px
		margin-top: 30px
		font-family: "Century Gothic"


	.formSuccess__text
		font-size: 24px
		margin-left: 15px

	.select
		+wrapper()
		text-transform: uppercase
		font-size: 36px
		font-family: "Century Gothic"
		color: #265b6d
		margin-bottom: 100px
		text-align: center
</style>