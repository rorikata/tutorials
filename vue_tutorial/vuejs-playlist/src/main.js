import Vue from 'vue'
import App from './App.vue'

/* globally import
import Ninjas from './Ninjas.vue'

Vue.component('ninjas', Ninjas);
*/
export const bus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App)
})
