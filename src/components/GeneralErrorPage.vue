<template>
  <div class="general-error-page">
    <h1>{{ generalError.pageTitle }}</h1>
    <p>{{ generalError.messages[0].text }}</p>
  </div>
</template>

<script>
export default {
  name: 'GeneralErrorPage',
  data: function () {
    return {
      generalError: {
        pageTitle: 'General error page',
        messages: [
          {
            code: 1,
            text: 'General error has occured'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss"></style>
