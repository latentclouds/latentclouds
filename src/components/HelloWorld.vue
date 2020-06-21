<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      We apologise for the inconvenience, We'll be back up soon!<br />
      In the meanwhile, you can email us at
      <a href="mailto:info@latentclouds.com" target="_blank" rel="noopener"
        >info@latentclouds.com</a
      >
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
