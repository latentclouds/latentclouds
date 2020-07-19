<template>
  <div id="FrontSlider">
    <div class="container">
      <b-carousel
        id="carousel-1"
        background="#98bac6"
        img-width="1024"
        img-height="350"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          img-src="https://picsum.photos/1024/350/?image=58"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = true
    }
  }
}
</script>

<style>
#FrontSlider {
  background-color: #98bac6;
}
</style>
