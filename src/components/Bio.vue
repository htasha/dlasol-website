<template>
  <div id="bio" class="p-2">
    <Card :bordered="false" :padding="0">
      <Row>
        <Col :xs="24" :sm="8">
          <g-image
            src="@/assets/images/sol-miller.jpeg"
            width="250"
            quality="100"
            class="bio__image"
          />
        </Col>
        <Col :xs="24" :sm="16">
          <div class="p-2">
            <h1 class="bio__title typography--eb-garamond text-black">Sol Miller</h1>
            <div>Born as Sol Roman in Mérida Venezuela, designer Sol's passion for designing was obvious. It was only natural that Sol enrolled in fashion design school at Ashwort College in 2011, from which she graduated with honors and distinctions in 2013. Sol Roman distinguishes herself from most other designers in that she individually crafts each gown to tell its own unique story of love, beauty and romance. With a deep desire for the romance and adventure. Sol Roman is able to create unique pieces that are vintage inspired but decidingly modern. The dresses are the epitome of the young. They are chic dress for social events, for red carpet events, for weddings and wedding parties. Sol Miller designer is famous for creating collections that are sensuous, exciting, and comtemporary using beautiful fabrics and attention to exquisite details. Inspired by modern women, who need more glamour in their lives, but who don't want to turn their backs on that dress they've always dreamed of, Sol Miller combines the practical with the romantic and delicate. Sol Miller's fresh fashion vision is expressed in her stunning designs for the new flexible and romantic label. Sol designs for the independent woman who desires a look that is efforslessly chic, yet sexy and strong.</div>
          </div>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
import { TweenMax, CSSPlugin } from "gsap/all";
export default {
  data() {
    return {
      tweenMax: null,
      cssPlugin: null
    };
  },
  mounted() {
    this.tweenMax = TweenMax;
    this.cssPlugin = CSSPlugin;
    this.tweenMax.from("#bio", 0.5, { opacity: 0, y: -20 });
  }
};
</script>


<style>
.bio__image {
  object-fit: cover;
  height: 80vh;
  width: 100%;
  display: block;
}
.bio__title {
  padding: 1rem 0;
}
</style>

