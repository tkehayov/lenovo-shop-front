var model;
var screenSizeData;
var priceFrom;
var priceTo;

new Vue({
  el: '#filter',
  data: {
    screenSize: {
      checkedNames: []
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
    })
  },

  methods: {
    filter: function() {
      var categoriesUrl = "/categories/laptops";
      var body = {};

      if (this.screenSize.length != 0) {
        body.screenSizes = this.screenSizeData;
      }

      console.log(body);

      this.$http.get(categoriesUrl).then(response => {
        if (response.body) {
          // console.log(response.body);
        }

        //  return this.carts;
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
