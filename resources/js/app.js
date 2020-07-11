
require('./bootstrap');

import Vue from 'vue'
// window.Vue = require('vue');

// vue form 
import { Form, HasError, AlertError } from 'vform'
// vue progressbar 
import VueProgressBar from 'vue-progressbar'
// vue notification 
import Snotify, { SnotifyPosition } from 'vue-snotify'

window.Form = Form



const SnotifyOptions = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

const VueProgressBaroptions = {
    color: '#50d38a',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
      speed: '0.2s',
      opacity: '0.6s',
      termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
  }

Vue.use(Snotify, SnotifyOptions)
Vue.use(VueProgressBar,VueProgressBaroptions); 

Vue.component('customer-component', require('./components/CustomerComponent.vue').default);
Vue.component('pagination', require('./components/partial/PaginationComponent.vue').default);

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

const app = new Vue({
    el: '#app',
});
