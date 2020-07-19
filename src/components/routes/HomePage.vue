<template>
  <div class="home-page">
    <FeatureSlider />
    <RectangularBoxContainer />
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
