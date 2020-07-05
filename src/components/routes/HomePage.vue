<template>
  <div class="home-page">
    <Index msg="Let's get started!" />
  </div>
</template>

<script>
import Index from '@/components/Index.vue'

export default {
  name: 'HomePage',
  components: {
    Index
  }
}
</script>

<style lang="scss">
.home-page {
}
</style>
