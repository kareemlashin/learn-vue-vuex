<template>
  <div id="app">
    <about></about>
    <router-view/>
  </div>
</template>
<script>
import about from './views/About.vue'
export default {
  components:{
    about
  }
}
</script>
<style lang="scss">
#app{
  background-color: #F4F4F4;
}
</style>
