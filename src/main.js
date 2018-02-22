import Vue from 'vue'
import App from './App.vue'
import Announcement from './Announcement.vue'
import Article from './news/components/Article.vue'
import Contact from './contact/Contact.vue'
import Home from './contact/Home.vue'
import About from './contact/About.vue'
import Form from './Form.vue'
import Mail from './mail/mail.vue'
import VueRouter from 'vue-router';

export const eventBus = new Vue();

Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
      {path: '', component: Home},
      {path: '/mail', component:Mail},
      {path: '*', component: {template : '<h1> page not found </h1>'}}
    ],
    mode: 'history'
});
Vue.component('mail', Mail)
Vue.component ('announcement', Announcement);
Vue.component('appArticle', Article);
Vue.component('contactUs', Contact);
Vue.component('aboutUs', About);
Vue.component('appHome', Home);
Vue.component('appForm', Form);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
