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
			<h1><a href="index.html"><img src="images/logo.png" alt="Trizzy" /></a></h1>
		</div>
	</div>
	<!-- Additional Menu -->
	<div class="twelve columns">
		<div id="additional-menu">
			<ul>
				<li><a href="shopping-cart.html">Shopping Cart</a></li>
				<li><a href="wishlist.html">WishList <span>(2)</span></a></li>
				<li><a href="checkout-billing-details.html">Checkout</a></li>
				<li><a href="my-account.html">My Account</a></li>
			</ul>
		</div>
	</div>


	<!-- Shopping Cart -->
	<div class="twelve columns">

		<div id="cart">

			<!-- Button -->
			<div class="cart-btn">
				<a href="#" class="button adc">$178.00</a>
			</div>

			<div class="cart-list">

			<div class="arrow"></div>

				<div class="cart-amount">
					<span>2 items in the shopping cart</span>
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
					<a href="shopping-cart.html" class="view-cart" ><span data-hover="View Cart"><span>View Cart</span></span></a>
					<a href="checkout-billing-details.html" class="checkout"><span data-hover="Checkout">Checkout</span></a>
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

				<li class="dropdown">
					<a href="#">Shop</a>
					<ul>
						<li><a href="shop-with-sidebar.html">Shop With Sidebar</a></li>
						<li><a href="shop-with-adv-search.html">Shop With Adv. Search</a></li>
						<li><a href="shop-full-width.html">Shop Full Width</a></li>
						<li><a href="checkout-billing-details.html">Checkout Pages</a></li>
						<li><a href="shop-categories-grid.html">Categories Grid</a></li>
						<li><a href="single-product-page.html">Single Product Page</a></li>
						<li><a href="variable-product-page.html">Variable Product Page</a></li>
						<li><a href="wishlist.html">Wishlist Page</a></li>
						<li><a href="shopping-cart.html">Shopping Cart</a></li>
					</ul>
				</li>


				<li>
					<a href="#">Features</a>
					<div class="mega">
						<div class="mega-container">

							<div class="one-column">
								<ul>
									<li><span class="mega-headline">Example Pages</span></li>
									<li><a href="contact.html">Contact</a></li>
									<li><a href="about.html">About Us</a></li>
									<li><a href="services.html">Services</a></li>
									<li><a href="faq.html">FAQ</a></li>
									<li><a href="404-page.html">404 Page</a></li>
								</ul>
							</div>

							<div class="one-column">
								<ul>
									<li><span class="mega-headline">Featured Pages</span></li>
									<li><a href="index-2.html">Business Homepage</a></li>
									<li><a href="shop-with-sidebar.html">Default Shop</a></li>
									<li><a href="blog-masonry.html">Masonry Blog</a></li>
									<li><a href="variable-product-page.html">Variable Product</a></li>
									<li><a href="portfolio-dynamic-grid.html">Dynamic Grid</a></li>
								</ul>
							</div>

							<div class="one-column hidden-on-mobile">
								<ul>
									<li><span class="mega-headline">Paragraph</span></li>
									<li><p>This <a href="#">Mega Menu</a> can handle everything. Lists, paragraphs, forms...</p></li>
								</ul>
							</div>

							<div class="one-fourth-column hidden-on-mobile">
								<a href="#" class="img-caption margin-reset">
									<figure>
										<img src="images/menu-banner-01.jpg" alt="" />
										<figcaption>
											<h3>Jeans</h3>
											<span>Pack for Style</span>
										</figcaption>
									</figure>
								</a>
							</div>

							<div class="one-fourth-column hidden-on-mobile">
								<a href="#" class="img-caption margin-reset">
									<figure>
										<img src="images/menu-banner-02.jpg" alt="" />
										<figcaption>
											<h3>Sunglasses</h3>
											<span>Nail the Basics</span>
										</figcaption>
									</figure>
								</a>
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

		<div class="eight columns">&copy 2017 Всички права запазени <a href="lenovoshop.bg">lenovoshop.bg</a></div>
		<div class="eight columns">
			<ul class="payment-icons">
				<li><img src="images/visa.png" alt="" /></li>
				<li><img src="images/mastercard.png" alt="" /></li>
				<li><img src="images/skrill.png" alt="" /></li>
				<li><img src="images/moneybookers.png" alt="" /></li>
				<li><img src="images/paypal.png" alt="" /></li>
			</ul>
		</div>

	</div>
	<!-- Container / End -->

</div>
</div>
`});

var footer=`<div id="footer">

	<!-- Container -->
	<div class="container">

		<div class="four columns">
			<img src="images/logo-footer.png" alt="" class="margin-top-10"/>
			<p class="margin-top-15">Nulla facilisis feugiat magna, ut molestie metus hendrerit vitae. Vivamus tristique lectus at varius rutrum. Integer lobortis mauris non consectetur eleifend.</p>
		</div>

		<div class="four columns">

			<!-- Headline -->
			<h3 class="headline footer">Customer Service</h3>
			<span class="line"></span>
			<div class="clearfix"></div>

			<ul class="footer-links">
				<li><a href="#">Order Status</a></li>
				<li><a href="#">Payment Methods</a></li>
				<li><a href="#">Delivery & Returns</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Terms & Conditions</a></li>
			</ul>

		</div>

		<div class="four columns">

			<!-- Headline -->
			<h3 class="headline footer">My Account</h3>
			<span class="line"></span>
			<div class="clearfix"></div>

			<ul class="footer-links">
				<li><a href="#">My Account</a></li>
				<li><a href="#">Order History</a></li>
				<li><a href="#">Wish List</a></li>
			</ul>

		</div>

		<div class="four columns">

			<!-- Headline -->
			<h3 class="headline footer">Newsletter</h3>
			<span class="line"></span>
			<div class="clearfix"></div>
			<p>Sign up to receive email updates on new product announcements, gift ideas, special promotions, sales and more.</p>

			<form action="#" method="get">
				<button class="newsletter-btn" type="submit">Join</button>
				<input class="newsletter" type="text" placeholder="mail@example.com" value=""/>
			</form>
		</div>

	</div>
	<!-- Container / End -->

</div>`

new Vue({
  el: '#wrapper'
});