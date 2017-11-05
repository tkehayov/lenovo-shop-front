var model;
var screenSizeData = new Array();
var priceData = new Array();
// TODO delete
var seriesData = new Array();

new Vue({
  el: '#filter',
  data: {
    series: {
      values: []
    },
    screenSize: {
      checkedNames: []
    },
    price: {
      range: []
    },
    products: [],
    limit:20,
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
      }),

      this.$watch('series', function() {
        var seriesArr = [];

        for (index in this.series.values) {
          seriesArr.push(this.series.values[index]);
        }

        this.seriesData = seriesArr;
        this.filter();
      }, {
        deep: true
      }),

      this.filter();
  },

  methods: {
    filter: function() {
      query = new URLSearchParams();


      var location = window.location;
      var url = new URL(location);
      var series = url.searchParams.get("series");
      var categoriesUrl = "/categories/laptops?";

//Series
      if (this.seriesData != undefined) {
        if (this.seriesData.length != 0) {
          console.log("daaa");
          query.append("series", this.seriesData);
        }
      } else {
        query.delete("series");
      }
//Limit
      if (this.limit != undefined) {

        // if (this.limit > 0) {
          query.append("limit", this.limit);
        // }
      } else {
        query.delete("limit");
      }
//Screen Size
      if (this.screenSizeData != undefined) {
        if (this.screenSizeData.length != 0) {
          query.append("screenSizes", this.screenSizeData);
        }
      } else {
        query.delete("screenSizes");
      }
//Price
      if (this.priceData != undefined) {
        if (this.priceData.length != 0) {
          query.append("priceRange", this.priceData);
        }
      } else {
        query.delete("priceRange");
      }

      categoriesUrl += query;
      console.log(query.toString());
      // window.history.pushState({"pageTitle":"response.pageTitle"},"","laptops.html?"+ query.toString());

      this.$http.get(categoriesUrl).then(response => {
        if (response.body) {
          this.products = response.body;
        }
      });

    },

    loadMore: function(){
      this.$root.$data.limit+=10;
      this.filter();
    },
  }
})
