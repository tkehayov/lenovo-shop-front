new Vue({
    el: '#shopping-cart',
    methods: {
      addCart: function() {
        id = new URLSearchParams(window.location.search).get("id");
        this.$http.post('/cart',{
            id: parseInt(id),
            quantity: 1
        }).then(function(data) {
           location.reload();
        }, function() {
            console.log('failed');
        });
    }}
});