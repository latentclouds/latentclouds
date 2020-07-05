<template>
  <div class="icon-header">
    <p>{{ img }}</p>
    <p class="text-uppercase">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'IconHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.icon-header {
  text-align: center;
  height: 91px;
}
</style>
