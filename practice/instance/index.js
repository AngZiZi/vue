import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{test}}</div>',
  data: {
    test: 0
  }
})

app.$mount('#root')

setInterval(() => {
  app.test += 1
}, 1000)
