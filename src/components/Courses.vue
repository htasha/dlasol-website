<template>
  <div id="courses" class="grid p-2" ref="grid">
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/makeup.jpeg"/>
      <div class="grid__title">
        <h2 class="text-black">Makeup</h2>
        <h4>From $40-150</h4>
      </div>
      <div
        class="grid__text"
      >We offer for any event or occasion from our makeup artist experts, also we offer courses how to do daily makeup and night makeup, be a profesional and make a living</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/lashes.jpeg"/>
      <div class="grid__title">
        <h2 class="text-black">Lashes</h2>
        <h4>From $40-150</h4>
      </div>
      <div
        class="grid__text"
      >We offer for any event or occasion from our makeup artist experts, also we offer courses how to do daily makeup and night makeup, be a profesional and make a living.</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/transportation.jpg"/>
      <div class="grid__title">
        <h2 class="text-black">Transportation</h2>
        <h4>From $40-150</h4>
      </div>
      <div class="grid__text">Transportation in Tampa area</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/financial-advisor.jpg"/>
      <div class="grid__title">
        <h2 class="text-black">Financial advisor</h2>
        <h4>From $40-150</h4>
      </div>
      <div class="grid__text">Set up a new opportunity and freedom from debts</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/natural-cosmetology.jpg"/>
      <div class="grid__title">
        <h2 class="text-black">Natural comestology</h2>
        <h4>From $40-150</h4>
      </div>
      <div
        class="grid__text"
      >Which offers better living with natural products you can make from home and look amazing</div>
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