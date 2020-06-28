<template>
  <div class="index">
    <img class="company-logo" alt="company logo" src="@/assets/logo.png" />
    <h1>{{ index.pageTitle }}</h1>
    <p>
      <span v-for="message in index.messages" :key="message.id" class="message">
        {{ message.text }}
      </span>
      <a :href="index.link.href" target="_blank" rel="noopener">
        {{ index.link.text }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      index: {
        pageTitle: this.msg,
        messages: [
          {
            id: 1,
            text: 'We apologise for the inconvenience!'
          },
          {
            id: 2,
            text: ''
          },
          {
            id: 3,
            text: 'In the meanwhile, you can email us at'
          }
        ],
        link: {
          href: 'mailto:info@latentclouds.com',
          text: 'info@latentclouds.com'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.index {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .company-logo {
    width: 200px;
  }

  .message {
    &:not(:last-of-type) {
      display: block;
    }
  }

  a {
    color: #42b983;
  }
}
</style>
