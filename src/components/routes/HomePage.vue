<template>
  <div class="home-page">
    <NavigationTop />
    <FeatureSlider />
    <RectangularBoxContainer />
  </div>
</template>

<script>
import RectangularBoxContainer from '@/components/RectangularBoxContainer.vue'
import NavigationTop from '@/components/templates/navBar/NavigationTop.vue'
import FeatureSlider from '@/components/templates/Widget/FeatureSlider.vue'

export default {
  name: 'HomePage',
  components: {
    NavigationTop,
    FeatureSlider,
    RectangularBoxContainer
  }
}
</script>

<style lang="scss">
.home-page {
}
</style>
