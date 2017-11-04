var model;
var screenSizeData = new Array();
var priceData = new Array();
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
    page:1,
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
      var page = url.searchParams.get("page");

      var categoriesUrl = "/categories/laptops?";
//Series
      if (this.seriesData != undefined) {
        if (this.seriesData.length != 0) {
          query.append("series", this.seriesData);
        }
      } else {
        query.delete("series");
      }
//Page
      if (this.page != undefined) {

        if (this.page > 0) {
          query.append("page", this.page);
        }
      } else {
        query.delete("page");
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
      window.history.pushState({"pageTitle":"response.pageTitle"},"","laptops.html?"+ query.toString());

      this.$http.get(categoriesUrl).then(response => {
        if (response.body) {
          this.products = response.body;
        }
      });

    },
    nextPage: function(){
      this.$root.$data.page++;
      this.filter();
    },
    prevPage: function(){
      this.$root.$data.page--;
      this.filter();
    },
  }
})
