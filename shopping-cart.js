new Vue({
	el: '#shopping-cart',
	data: function() {
	    return {
	        carts: {
	        	"shoppingCarts":[],
	        	"overallPrice": 0
	        }
	    }
    },
	methods:{ 
		getCart: function(){
	  		 this.$http.get('/cart').then(response=>{
	  		 	if(response.body){
	           this.carts = response.body;
	           console.log(this.carts.overallPrice)
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
    }
});