// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { Button, Row, Col, Layout, Content, Menu, Sider, Icon } from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/global.css';
import 'typeface-eb-garamond';
import 'typeface-josefin-sans';
import { TweenLite, ScrollToPlugin } from "gsap/all";
import TheFooter from '~/layouts/TheFooter.vue'
import Courses from '~/components/Courses.vue'
import Services from '~/components/Services.vue'
import Portfolio from '~/components/Portfolio.vue'
import Bio from '~/components/Bio.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Row', Row);
  Vue.component('Icon', Icon);
  Vue.component('Col', Col);
  Vue.component('Button', Button);
  Vue.component('Layout', Layout);
  Vue.component('Content', Content);
  Vue.component('Menu', Menu);
  Vue.component('Sider', Sider);
  Vue.component('TheFooter', TheFooter)
  Vue.component('Courses', Courses)
  Vue.component('Services', Services)
  Vue.component('Portfolio', Portfolio)
  Vue.component('Bio', Bio)
}
