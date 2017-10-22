var model;
var screenSizeData = new Array();
var priceData = new Array();

new Vue({
  el: '#filter',
  data: {
    screenSize: {
      checkedNames: []
    },
    price: {
      range: []
    },
     products: []
  },
  mounted: function() {
    this.$watch('screenSize', function() {
        var screenArr = [];

        for (screen in this.screenSize.checkedNames) {
          screenArr.push(this.screenSize.checkedNames[screen]);
        }

        this.screenSizeData = screenArr;

        this.filter();
      }, {
        deep: true
      }),

      this.$watch('price', function() {
        var priceArr = [];

        for (index in this.price.range) {
          priceArr.push(this.price.range[index]);
        }

        this.priceData = priceArr;
        this.filter();
      }, {
        deep: true
      })
    this.filter();
  },

  methods: {
    filter: function() {
      query = new URLSearchParams();

      var categoriesUrl = "/categories/laptops?";

      if (this.screenSizeData != undefined) {
        if (this.screenSizeData.length != 0) {
          query.append("screenSizes", this.screenSizeData);
        }
      } else {
        query.delete("screenSizes");
      }
      if (this.priceData != undefined) {
        if (this.priceData.length != 0) {
          query.append("priceRange", this.priceData);
        }
      } else {
        query.delete("priceRange");
      }
      categoriesUrl += query;

      this.$http.get(categoriesUrl).then(response => {
        if (response.body) {
          this.products = response.body;
        }
      });

    }
  }
})
