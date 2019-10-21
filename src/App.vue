<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import Nav from '@/components/layout/nav.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      Nav
    }
  }
</script>

<style lang="stylus" scoped>

</style>
