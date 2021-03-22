<template>
    <div id="openingHours">
      <div id="openingHoursText">
        <h1> {{ ohTitle }} </h1>
        <p> {{ ohText }} </p>
      </div>
      <div id="openingHoursTime">
        <h1> {{ohTime}} </h1>
      </div>
    </div>
</template>

<script>
export default {
  name: 'open',
  data: () => ({
    ohTitle: 'Opnunartímar',
    ohText: 'Símaþjónustu',
    ohTime: '08:00 - 22:00'
  })
}
</script>

<style lang="scss" scoped>
  h1, p {
    color: white;
  }
  #openingHoursText {
    height: 150px;
    float: left;
    width: 50%;
    padding-left: 15%;
  }
  #openingHoursTime {
    height: 150px;
    float: right;
    width: 50%;
    text-align: right;
    padding-right: 15%;
  }
</style>
