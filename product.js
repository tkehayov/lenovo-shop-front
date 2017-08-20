// Vue.http.options.emulateJSON = true; // send as 
new Vue({
    el: '#shopping-cart',
    data: {
        ID: "123",
        ProductName: "product",
        Quantity: 1
    },
    methods: {
      addCart: function() {
        id = new URLSearchParams(window.location.search).get("id");
        this.$http.post('/cart',{
            ID: id,
            ProductName: "product",
            Quantity: 1
        }).then(function(data) {

            console.log("success");
        }, function() {
            console.log('failed');
        });
    }}
});