new Vue({
    el: '#shopping-cart',
    methods: {
      addCart: function() {
        id = new URLSearchParams(window.location.search).get("id");
        this.$http.post('/cart',{
            id: id,
            quantity: 1
        }).then(function(data) {

            console.log("success");
        }, function() {
            console.log('failed');
        });
    }}
});