// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyAYOHpIbAt9xJ0REsFCpFYr13IcZMbDC20',
  authDomain: 'heycoding-12a9f.firebaseapp.com',
  databaseURL: 'https://heycoding-12a9f.firebaseio.com',
  projectId: 'heycoding-12a9f',
  storageBucket: 'heycoding-12a9f.appspot.com',
  messagingSenderId: '595701403072'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
