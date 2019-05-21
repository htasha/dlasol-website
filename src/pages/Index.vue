<template>
  <transition name="fade" appear>
    <div class="bg">
      <div class="bg__overlay">
        <Row>
          <Col :xs="24" :md="8" class="row__col-1">
            <header class="header text-align--center">
              <g-link to="/" aria-label="Back to home">
                <g-image src="../assets/images/logo.svg" class="logo" width="160"/>
              </g-link>
              <h1
                class="h1 text-white_emphasis--high text-emphasis--high typography--eb-garamond"
              >We're a creative agency based on Plant City, Florida</h1>
              <nav class="nav">
                <ul>
                  <li v-for="(menu, i) in menus" :key="i" class="nav__list-item">
                    <a
                      class="link text-white_emphasis--md font-weight--light font-size--22"
                      @click="scrollTo(menu)"
                    >{{ menu }}</a>
                  </li>
                </ul>
              </nav>
            </header>
            <TheFooter/>
          </Col>
          <Col :xs="24" :md="{ span: 16, offset: 8 }" class-name="col2">
            <component :is="currentMenuComponent"/>
          </Col>
        </Row>
      </div>
    </div>
  </transition>
</template>

<script>
import { TweenMax, ScrollToPlugin, CSSPlugin } from "gsap/all";
export default {
  data() {
    return {
      currentMenu: "Courses",
      menus: ["Courses", "Services", "Portfolio", "Bio"],
      tweenMax: null,
      scrollToPlugin: null,
      cssPlugin: null
    };
  },
  methods: {
    scrollTo(menu) {
      this.currentMenu = menu;
      this.tweenMax.to(window, 0.5, {
        scrollTo: `#${menu.toLowerCase()}`
      });
    }
  },
  computed: {
    currentMenuComponent: function() {
      return this.currentMenu;
    }
  },
  metaInfo: {
    title: "Creative agency based on Plant, Florida"
  },
  mounted() {
    this.tweenMax = TweenMax;
    this.scrollToPlugin = ScrollToPlugin;
    this.cssPlugin = CSSPlugin;
    this.tweenMax.from(".h1", 0.5, { opacity: 0, y: -20 });
    this.tweenMax.from(".logo", 1, { opacity: 0 });
    this.tweenMax.staggerFrom(".link", 0.3, { opacity: 0, y: 20 }, 0.2);
  }
};
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter {
  opacity: 0;
}
.bg {
  background-image: url(../assets/images/bg.jpeg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
}
.bg__overlay {
  background: rgba(0, 0, 0, 0.54);
}
.logo {
  width: 10rem;
}
.header {
  height: 100vh;
  padding: 2rem;
  position: relative;
}
.nav {
  margin: 2rem 0;
}
.nav__list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
}

@media (min-width: 768px) {
  .row__col-1 {
    position: fixed;
  }
}
.col2 {
  min-height: 1000px;
}
</style>

