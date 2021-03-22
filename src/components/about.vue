<template>
    <div id="about">
        <div>
            <h1> {{ aboutTitle }} </h1>
        </div>
        <div>
            <p> {{ aboutText }} </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'open',
  data: () => ({
    aboutTitle: 'Um Okkur',
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper, ex porta molestie ultricies, tortor mi scelerisque turpis, eget dictum nisl elit a ligula. Praesent in blandit orci. Duis rhoncus ut quam a volutpat. Aenean et sem malesuada, feugiat nulla nec, egestas justo. Ut justo ligula, ornare sit amet ex a, sagittis tempus nisl. Morbi vel aliquet nulla. Nunc vel quam nunc.',
    phone: 'S: 492 6000'
  })
}
</script>

<style lang="scss" scoped>
    #about {
        color: white;
        text-align: center;
        padding: 0 20%;
    }
</style>
