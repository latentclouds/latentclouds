<template>
  <div class="home-page">
    <Index msg="Let's get started!" />
    <RectangularBoxContainer />
  </div>
</template>

<script>
import Index from '@/components/Index.vue'
import RectangularBoxContainer from '@/components/RectangularBoxContainer.vue'

export default {
  name: 'HomePage',
  components: {
    Index,
    RectangularBoxContainer
  }
}
</script>

<style lang="scss">
.home-page {
}
</style>
