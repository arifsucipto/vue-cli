import Vue from 'vue'
import App from './App.vue'
import Announcement from './Announcement.vue'
import Article from './news/components/Article.vue'
import Contact from './contact/Contact.vue'
import Home from './contact/Home.vue'
import About from './contact/About.vue'

import Mail from './mail/mail.vue'

export const eventBus = new Vue();

Vue.component('mail', Mail)
Vue.component ('announcement', Announcement);
Vue.component('appArticle', Article);
Vue.component('contactUs', Contact);
Vue.component('aboutUs', About);
Vue.component('appHome', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
