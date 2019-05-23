<template>
  <div id="portfolio" class="grid p-2" ref="grid">
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-1.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-2.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-3.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-4.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-5.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-6.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-7.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-8.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-9.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-10.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-11.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-20.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-12.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-13.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-14.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-15.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-16.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-17.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-18.jpeg" width="250" quality="100"/>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/portfolio-19.jpeg" width="250" quality="100"/>
    </Card>
  </div>
</template>

<script>
export default {
  mounted() {
    const grid = this.$refs.grid;
    const Masonry = require("masonry-layout");
    const imagesLoaded = require("imagesloaded");
    const masonry = new Masonry(grid, {
      itemSelector: ".grid__item",
      fitWidth: true,
      gutter: 16
    });

    imagesLoaded(grid).on("progress", function() {
      masonry.layout();
    });
  }
};
</script>