new Vue({
  el: '#exercise',
  data: {
    effect: true,
    color: 'green',
    progress: 0


  },
  methods: {
    startEffect: function () {
      this.effect = !this.effect;
      console.log(this.effect);
    },
    startProgressBar: function () {
      var vm = this;
      setInterval(function () {
        if (vm.progress === 200) {
          vm.progress = 0;
        } else {
          vm.progress += 20;
        }
      }, 1000)
    }
  },
  computed: {
    styleArray: function () {
      return { highlight: this.effect, blue: !this.effect }
    },
    progress: function () {
      console.log('progress: ' + this.width + 'px')
      return { width: this.width + 'px' }
    }

  }
});
