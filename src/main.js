import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

// set up router step 1
import VueRouter from 'vue-router';
// set up router step 3.1
import Routes from './routes'

Vue.use(VueResource);
// set up router step 2
Vue.use(VueRouter);

// set up router step 3
const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

// Custom directives
Vue.directive('rainbow', {
    bind(el, binding, vnode){
      el.style.color = '#' + Math.random().toString().slice(2,8);
    }
});
Vue.directive('theme', {
  bind(el, binding, vnode){
    if (binding.value == "wide"){
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow"){
        el.style.maxWidth = "560px";
    }
    if (binding.arg == "column"){
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

// Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
})
Vue.filter('snippet', function(value){
  return value.slice(0, 100) + "...";
});

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  // set up router step 4
  router: router
})
