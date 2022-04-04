<template>
  <section class="app-main">
    <!--    <transition name="fade-transform" mode="out-in">-->
    <router-view :key="key" />
    <!--    </transition>-->
  </section>
</template>

<script>
export default {
  name    : 'AppMain',
  computed: {
    key() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss" scoped>
.app-main {
  //background-color : #F8F8F8;
  min-height : 100vh;
  width      : 100%;
  position   : relative;
  overflow   : hidden;
  box-shadow : 0 0 0 1px #CCC inset;
}
</style>
