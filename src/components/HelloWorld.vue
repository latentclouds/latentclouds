<template>
  <div class="hello-world">
    <img class="company-logo" alt="company logo" src="@/assets/logo.png" />
    <h1>{{ helloWorld.pageTitle }}</h1>
    <p>
      <span
        v-for="message in helloWorld.messages"
        :key="message.id"
        class="message"
      >
        {{ message.text }}
      </span>
      <a :href="helloWorld.link.href" target="_blank" rel="noopener">
        {{ helloWorld.link.text }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      helloWorld: {
        pageTitle: this.msg,
        messages: [
          {
            id: 1,
            text: 'We apologise for the inconvenience!'
          },
          {
            id: 2,
            text: 'We will be back up soon!'
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
.hello-world {
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
