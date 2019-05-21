<template>
  <div id="courses" class="grid p-2" ref="grid">
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/makeup.jpeg" width="250"/>
      <div class="grid__title">
        <h2 class="text-black">Makeup</h2>
        <h4>From $40 to $150</h4>
      </div>
      <div
        class="grid__text"
      >We offer for any event or occasion from our makeup artist experts, also we offer courses how to do daily makeup and night makeup, be a profesional and make a living</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/eyelash-extensions.jpg" width="250"/>
      <div class="grid__title">
        <h2 class="text-black">Lashes extensions</h2>
        <h4>From $40 to $500</h4>
      </div>
      <div
        class="grid__text"
      >Our experts in eyelash extension are available to provide you with classic and volume design, also offering classes that way you can become a professional and make a living</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/second-hand.jpeg" width="250"/>
      <div class="grid__title">
        <h2 class="text-black">Second hand</h2>
      </div>
      <div class="grid__text">Our second hand section offers great woman clothing and accessories</div>
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