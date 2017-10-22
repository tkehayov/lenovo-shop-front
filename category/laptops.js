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
    }
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
        console.log("da");

        var priceArr = [];

        for (index in this.price.range) {
          priceArr.push(this.price.range[index]);
        }

        this.priceData = priceArr;
        this.filter();
      }, {
        deep: true
      })
  },

  methods: {
    filter: function() {
      query = new URLSearchParams();

      var categoriesUrl = "/categories/laptops?";

      if (this.screenSizeData.length != 0) {
        if (this.screenSizeData != undefined) {
          query.append("screenSizes", this.screenSizeData);
        }
      } else {
        query.delete("screenSizes");
      }
      if (this.priceData != 0) {
        if (this.priceData != undefined) {
          query.append("priceRange", this.priceData);
        }
      } else {
        query.delete("priceRange");
      }
      categoriesUrl += query;

      this.$http.get(categoriesUrl).then(response => {
        if (response.body) {
          // console.log(response.body);
        }
      });

    }
  }
})

//TODO change url params
// (function($) {
//     // $(window).load(function () {
//     //   var url = new URL(window.location);
//     //
//     //   searchParams = new URLSearchParams(url.search);
//     //   model = searchParams.get('model');
//     //   screenSize = searchParams.get('screenSize');
//     //   priceFrom = searchParams.get('priceFrom');
//     //   priceTo = searchParams.get('priceTo');
//     //
//     //   console.log("model", model);
//     //   console.log("screenSize", screenSize);
//     //   console.log("priceFrom", priceFrom);
//     });
// })(jQuery);
