//inside the object we pass down some options, to describe how this vue instance is gonna control the application
new Vue ({
  el: '#vue-app',
  data: {
      calculation: '',
      total: 0,
  },
  methods: {
    key: function(num) {
      return this.calculation += num;
    },
    clear: function() {
      return this.calculation = '', this.total = 0;
    },
    equal: function() {
      let equal = this.calculation;
      return this.total = eval(equal);
    }
  }
});
