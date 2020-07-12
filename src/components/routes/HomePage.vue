<template>
  <div class="home-page">
    <FeatureSlider />
    <RectangularBoxContainer />
    <audio controls autoplay loop>
      <source src="@/assets/joens groove.mp3" type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>
  </div>
</template>

<script>
import RectangularBoxContainer from '@/components/RectangularBoxContainer.vue'
import FeatureSlider from '@/components/templates/Widget/FeatureSlider.vue'

export default {
  name: 'HomePage',
  components: {
    FeatureSlider,
    RectangularBoxContainer
  }
}
</script>

<style lang="scss">
.home-page {
}
</style>
