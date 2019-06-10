import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
      evtBusDetailServer(server) {
        this.$emit('evtBusDetailServer', server);
      }
    },
});

new Vue({
  el: '#app',
  render: h => h(App)
})
