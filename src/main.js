import { Button, Row, Col, Layout, Content, Menu, Sider, Icon } from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/global.css';
import 'typeface-eb-garamond';
import 'typeface-josefin-sans';
import Masonry from "masonry-layout";
import TheFooter from '~/layouts/TheFooter.vue'
import Courses from '~/components/Courses.vue'
import Services from '~/components/Services.vue'
import Portfolio from '~/components/Portfolio.vue'
import Bio from '~/components/Bio.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.prototype.$Masonry = Masonry
  Vue.component('Row', Row);
  Vue.component('Col', Col);
  Vue.component('Icon', Icon);
  Vue.component('Courses', Courses)
  Vue.component('Services', Services)
  Vue.component('Portfolio', Portfolio)
  Vue.component('Bio', Bio)
  Vue.component('TheFooter', TheFooter)
}
