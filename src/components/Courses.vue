<template>
  <ClientOnly>
    <div id="courses " class="p-2">
      <div
        v-masonry
        transition-duration="0.3s"
        item-selector=".item"
        :gutter="10"
        :fit-width="false"
      >
        <div v-masonry-tile class="item">
          <g-image class="img" src="@/assets/images/lashes.jpeg"/>
        </div>
        <div v-masonry-tile class="item">
          <g-image class="img" src="@/assets/images/lashes.jpeg"/>
        </div>
        <div v-masonry-tile class="item">
          <g-image class="img" src="@/assets/images/lashes.jpeg"/>
        </div>
        <div v-masonry-tile class="item">
          <g-image class="img" src="@/assets/images/lashes.jpeg"/>
        </div>
        <div v-masonry-tile class="item">
          <g-image class="img" src="@/assets/images/lashes.jpeg"/>
        </div>
        <div v-masonry-tile class="item">
          <g-image class="img" src="@/assets/images/lashes.jpeg"/>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
.img {
  max-width: 250px;
  display: block;
}
.item {
  margin-bottom: 10px;
}
</style>

