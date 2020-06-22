<template>
  <div class="navigation-bar">
    <!-- some customised bootstrap navbar -->
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data: function () {
    return {
      NavigationBar: {
        items: [
          {
            id: 1,
            name: 'About Us',
            href: 'about-us'
          },
          {
            id: 2,
            name: 'Contact Us',
            href: 'contact-us'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.navigation-bar {
}
</style>
