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
				<a href="#" class="button adc">$178.00</a>
			</div>

			<div class="cart-list">

			<div class="arrow"></div>

				<div class="cart-amount">
					<span>2 продукт(а) в количката</span>
				</div>

					<ul>
						<li>
							<a href="#"><img src="images/small_product_list_08.jpg" alt="" /></a>
							<a href="#">Converse All Star Trainers</a>
							<span>1 x $79.00</span>
							<div class="clearfix"></div>
						</li>

						<li>
							<a href="#"><img src="images/small_product_list_09.jpg" alt="" /></a>
							<a href="#">Tommy Hilfiger <br /> Shirt Beat</a>
							<span>1 x $99.00</span>
							<div class="clearfix"></div>
						</li>
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

				<li class="dropdown">
					<a href="#">Shortcodes</a>
					<ul>
						<li><a href="elements.html">Elements</a></li>
						<li><a href="typography.html">Typography</a></li>
						<li><a href="pricing-tables.html">Pricing Tables</a></li>
						<li><a href="icons.html">Icons</a></li>
					</ul>
				</li>


				<li class="dropdown">
					<a href="#">Portfolio</a>
					<ul>
						<li><a href="portfolio-3-columns.html">3 Columns</a></li>
						<li><a href="portfolio-4-columns.html">4 Columns</a></li>
						<li><a href="portfolio-dynamic-grid.html">Dynamic Grid</a></li>
						<li><a href="single-project.html">Single Project</a></li>
					</ul>
				</li>
				

				<li class="dropdown">
					<a href="#">Blog</a>
					<ul>
						<li><a href="blog-standard.html">Blog Standard</a></li>
						<li><a href="blog-masonry.html">Blog Masonry</a></li>
						<li><a href="blog-single-post.html">Single Post</a></li>
					</ul>
				</li>


				<li class="demo-button">
				  <a href="#">Get This Theme</a>
				</li>

			</ul>
		</nav>
	</div>
</div>
</div>`
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
  el: '#wrapper'
});