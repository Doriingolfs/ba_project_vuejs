<template>
    <div id="landing">
      <div id="logo">
         <img src="../assets/logo.svg" alt="">
      </div>
      <div>
        <webapp-open></webapp-open>
        <webapp-about></webapp-about>
      </div>
    </div>
</template>

<script>
import open from '../components/open.vue'
import about from '../components/about.vue'
export default {
  name: 'Home',
  components: {
    'webapp-open': open,
    'webapp-about': about
  },
  data: () => ({
    contactTitle: 'Hefur þú fleiri spurningar'
  })
}

</script>

<style lang="scss" scoped>
  #logo {
    display: flex;
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 10%;
  }
  img {
    width: 55%;
  }
  #landing {
    padding-bottom: 150px;
  }
</style>
