<template>
  <div id="services" class="grid p-2" ref="grid">
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/transportation.jpg" width="250"/>
      <div class="grid__title">
        <h2 class="text-black">Transportation</h2>
      </div>
      <div class="grid__text">Transportation in Tampa area</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/financial-advisor.jpg" width="250"/>
      <div class="grid__title">
        <h2 class="text-black">Financial advisor</h2>
      </div>
      <div class="grid__text">Set up a new opportunity and freedom from debts</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/natural-cosmetology.jpg" width="250"/>
      <div class="grid__title">
        <h2 class="text-black">Natural comestology</h2>
      </div>
      <div
        class="grid__text"
      >Which offers better living with natural products you can make from home and look amazing</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/english-classes.jpg" width="250"/>
      <div class="grid__title">
        <h2 class="text-black">Spanish and English classes</h2>
      </div>
      <div class="grid__text">At low cost to make you able to communicate even more</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/catering.jpg" width="250"/>
      <div class="grid__title">
        <h2 class="text-black">Catering</h2>
      </div>
      <div class="grid__text">For any occasion</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/fashion-advisor.jpg" width="250"/>
      <div class="grid__title">
        <h2 class="text-black">Fashion Advisor</h2>
      </div>
      <div
        class="grid__text"
      >Create a better you and make your wardrobe last lower with out thinking about money and make your clothes look great</div>
    </Card>
    <Card class="grid__item" :bordered="false" :padding="0">
      <g-image class="img" src="@/assets/images/study-technology-for-kids.jpg" width="250"/>
      <div class="grid__title">
        <h2 class="text-black">Fashion Advisor</h2>
      </div>
      <div
        class="grid__text"
      >To make a better study tools for your kids and enjoyable for them, even we offer therapies to make your body illnesses easier to take with our therapies you will feel like new</div>
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