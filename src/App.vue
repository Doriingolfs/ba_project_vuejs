<template>
  <div>
    <webapp-nav></webapp-nav>
    <router-view> </router-view>
  </div>
</template>
<script>
import header1 from './components/header.vue'
export default {
  name: 'App',
  components: {
    'webapp-nav': header1
  },
  data: () => ({
  })
}
</script>

<style lang="scss">
  body {
    background: linear-gradient(#0bafad, #055756);
    height: auto;
  }
  h1, h2, h3, h4, h5, p, label, .submit, option, :placeholder-shown {
    font-family: 'Poppins', sans-serif;
  }
  :placeholder-shown {
    font-size: 12px;
  }
</style>
