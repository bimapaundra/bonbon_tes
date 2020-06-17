import Vue from 'vue'
import App from './App.vue';
import VueSweetalert2 from 'vue-sweetalert2';
import VueNativeNotification from 'vue-native-notification'

Vue.use(VueNativeNotification, {
  // Automatic permission request before
  // showing notification (default: true)
  requestOnNotify: true
})

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
