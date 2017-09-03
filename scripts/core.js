Vue.component('header-top',{
	template: `<!-- Top Bar
================================================== -->
<div id="top-bar">
	<div class="container">

		<!-- Top Bar Menu -->
		<div class="ten columns">
			<ul class="top-bar-menu">
				<li><i class="fa fa-phone"></i> <!-- TODO -->+359 898 684 599</li>
				<li><i class="fa fa-envelope"></i> <a href="#">mail@example.com</a></li>
			</ul>
		</div>

		<!-- Social Icons -->
		<div class="six columns">
			<ul class="social-icons">
				<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
				<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
				<li><a class="gplus" href="#"><i class="icon-gplus"></i></a></li>
			</ul>
		</div>

	</div>
</div>`
});

Vue.component('header-component', {

  data: function() {
            return {
                carts: {
                	"shoppingCarts":[],
                	"overallPrice": 0
                }
            }
        },
  methods: {

  	getCart: function(){
  		 this.$http.get('/cart').then(response=>{
  		 	if(response.body){
           this.carts = response.body;
           }
           if(this.carts.overallPrice!=undefined){	
           	this.carts.overallPrice = Number((this.carts.overallPrice).toFixed(2));
           }
           return this.carts;
      });
  }
},
mounted: function () {
        this.getCart();
    },
  template: `<!-- Header
================================================== -->
<div>
<div class="container">
	<!-- Logo -->
	<div class="four columns">
		<div id="logo">
			<h1><a href="index.html"><img src="images/lenovo-shop.png" alt="Lenovo Shop"/></a></h1>
		</div>
	</div>

	<!-- Shopping Cart -->
	<div class="twelve columns" id="additional-menu">

		<div id="cart">
			<!-- Button -->
			<div class="cart-btn">

				<div v-if="carts">
					<a href="hello.bg" class="button adc">{{carts.overallPrice}}</a>
				</div>
			</div>

			<div class="cart-list">

			<div class="arrow"></div>

				<div class="cart-amount">
					<div v-if="carts">
						<span>{{carts.shoppingCarts.length}} продукт(а) в количката</span>
					</div>
				</div>
	
					<ul>
						<div v-if="carts">
							<li v-for="shoppingCart in carts.shoppingCarts">
								<a href="#"><img src="images/small_product_list_08.jpg" alt="" /></a>
								<a href="#">{{shoppingCart.name}}</a>
								<span>{{shoppingCart.quantity}} x {{shoppingCart.price}}</span>
								<div class="clearfix"></div>
							</li>
						</div>
					</ul>
					
				<div class="cart-buttons button">
					<a href="shopping-cart.html" class="view-cart" ><span data-hover="Преглед на количката"><span>Преглед на количката</span></span></a>
					<a href="checkout-billing-details.html" class="checkout"><span data-hover="Поръчай">Поръчай</span></a>
				</div>
				<div class="clearfix">

				</div>
			</div>

		</div>

		<!-- Search -->
		<nav class="top-search">
			<form action="#" method="get">
				<button><i class="fa fa-search"></i></button>
				<input class="search-field" type="text" placeholder="Search" value=""/>
			</form>
		</nav>
	</div>
</div>

<div class="container">
	<div class="sixteen columns">
		
		<a href="#menu" class="menu-trigger"><i class="fa fa-bars"></i> Menu</a>

		<nav id="navigation">
			<ul class="menu" id="responsive">

				<li><a href="index.html" class="current homepage" id="current">Home</a></li>

				<li>
					<a href="#">Лаптопи</a>
					<div class="mega">
						<div class="mega-container">
							<div class="one-column">
								<ul>
									<li><span class="mega-headline">ThinkPad</span></li>
									<li><a href="/categories/x1-thinkpad">X серия</a></li>
									<li><a href="/categories/w-thinkpad">W серия</a></li>
									<li><a href="/categories/p-thinkpad">P серия</a></li>
									<li><a href="/categories/t-thinkpad">T серия</a></li>
									<li><a href="faq.html">TODO ADD MORE LAPTOPS</a></li>
								</ul>
							</div>

							<div class="one-column">
								<ul><li><span class="mega-headline">Lenovo</span></li>
									<li><a href="/categories/y-lenovo">Серия Y</a></li>
									<li><a href="/categories/ideapad-lenovo">IdeaPad 700</a></li>
									<li><a href="/categories/yoga-lenovo">Yoga серия</a></li>
									<li><a href="/categories/V-lenovo">V серия</a></li>
									<li><a href="faq.html">TODO ADD MORE LAPTOPS</a></li>
								</ul>
							</div>
							<div class="one-column">
								<ul><li><span class="mega-headline">IdeaPad</span></li>
									<li><a href="/categories/y-lenovo">Серия Y</a></li>
									<li><a href="/categories/ideapad-lenovo">IdeaPad 700</a></li>
									<li><a href="/categories/yoga-lenovo">Yoga серия</a></li>
									<li><a href="/categories/V-lenovo">V серия</a></li>
									<li><a href="faq.html">TODO ADD MORE LAPTOPS</a></li>
								</ul>
							</div>
							<div class="one-column">
								<ul><li><span class="mega-headline">Yoga</span></li>
									<li><a href="/categories/y-lenovo">Серия Y</a></li>
									<li><a href="/categories/ideapad-lenovo">IdeaPad 700</a></li>
									<li><a href="/categories/yoga-lenovo">Yoga серия</a></li>
									<li><a href="/categories/V-lenovo">V серия</a></li>
									<li><a href="faq.html">TODO ADD MORE LAPTOPS</a></li>
								</ul>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</li>
				<li>
					<a href="#">Таблети</a>
					<div class="mega">
						<div class="mega-container">
							<div class="one-column">
								<ul>
									<li><span class="mega-headline">ThinkPad</span></li>
									<li><a href="/categories/x1-thinkpad">X1 Thinkpad</a></li>
									<li><a href="/categories/w-thinkpad">Helix ThinkPad</a></li>
								</ul>
							</div>

							<div class="one-column">
								<ul><li><span class="mega-headline">Lenovo</span></li>
									<li><a href="/categories/y-lenovo">Yoga</a></li>
									<li><a href="/categories/ideapad-lenovo">IdeaPad Miix</a></li>
									<li><a href="/categories/yoga-lenovo">Lenovo A Серия</a></li>
									<li><a href="/categories/V-lenovo">V серия</a></li>
									<li><a href="faq.html">TODO ADD MORE LAPTOPS</a></li>
								</ul>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</li>

				<li>
					<a href="#">Смартфони и устройства</a>
					<div class="mega">
						<div class="mega-container">
							<div class="one-column">
								<ul>
									<li><span class="mega-headline">Lenovo</span></li>
									<li><a href="/categories/x1-thinkpad">Vibe</a></li>
									<li><a href="/categories/w-thinkpad">Hhab</a></li>
									<li><a href="/categories/w-thinkpad">P серия</a></li>
									<li><a href="/categories/w-thinkpad">К серия</a></li>
									<li><a href="/categories/w-thinkpad">C серия</a></li>
									<li><a href="/categories/w-thinkpad">A серия</a></li>
								</ul>
							</div>

							<div class="one-column">
								<ul><li><span class="mega-headline">Moto</span></li>
									<li><a href="/categories/y-lenovo">Moto</a></li>
									<li><a href="/categories/ideapad-lenovo">Moto Mods</a></li>
								</ul>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</li>	

				<li class="demo-button">
				  <a href="contact.html">Контакти</a>
				</li>
			</ul>
		</nav>
	</div>
</div>
</div>`
});

new Vue({
  el: '#header-component'
});

Vue.component('footer-component', {
	template: `
<!-- Footer
   ================================================== -->
<div>
   <!-- Footer / End -->
   <div id="footer-bottom">
      <!-- Container -->
      <div class="container">
         <div class="eight columns">&copy 2017 Всички права запазени <a href="lenovoshop.bg"> Трейдико ЕООД</a></div>
      </div>
      <!-- Container / End -->
   </div>
</div>
`});

new Vue({
  el: '#footer-component'
});

