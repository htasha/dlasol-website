<template>
  <div id="courses" class="grid p-2">
    <div class="item">
      <g-image class="img" src="@/assets/images/lashes.jpeg"/>
    </div>
    <div class="item">
      <g-image class="img" src="@/assets/images/lashes.jpeg"/>
    </div>
    <div class="item">
      <g-image class="img" src="@/assets/images/lashes.jpeg"/>
    </div>
    <div class="item">
      <g-image class="img" src="@/assets/images/lashes.jpeg"/>
    </div>
    <div class="item">
      <g-image class="img" src="@/assets/images/lashes.jpeg"/>
    </div>
    <div class="item">
      <g-image class="img" src="@/assets/images/lashes.jpeg"/>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const Masonry = require("masonry-layout");
    new Masonry(".grid", {
      itemSelector: ".item",
      columnWidth: 250,
      fitWidth: true,
      gutter: 10
    });
  }
};
</script>


<style>
.grid {
  margin: 0 auto;
}
.img {
  max-width: 250px;
  display: block;
}
.item {
  margin-bottom: 10px;
}
</style>

