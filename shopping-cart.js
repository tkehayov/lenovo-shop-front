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
	           }

	           if(this.carts.overallPrice!=undefined){
	           	this.carts.overallPrice = Number((this.carts.overallPrice).toFixed(2));
	           }
	           return this.carts;
	      });
	  	},

	  	removeCart: function(id){

	  		this.$http.delete('/cart/'+id).then(response=>{
	  			location.reload();
	  		},function(error){
	  			console.log(error);
	  		});
	  	}
  },
  	mounted: function () {
        this.getCart();
    }
});
