import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue';
import Blog from "./components/Blog";
import About from "./components/About";
import Description from "./components/Description";

const routes = [
  { path: "/", component: Blog },
  { path: "/blog", component: Blog },
  { path: "/about", component: About},
  { path: "/description", component: Description}
];

const router =  new VueRouter({
  routes
});


Vue.config.productionTip = false

Vue.use(VueRouter);

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

