<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:true}" class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import {AppMain, Sidebar} from './components/index'

export default {
  name      : 'Layout',
  components: { AppMain, Sidebar },
  mixins    : [],
  computed  : {

    classObj() {
      return {}
    },
  },
  methods   : {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
  },
  mounted() {
    // dlog(this.$route, `this.$route`)
    // dlog(this.$router, `this.$router`)
  },
}
</script>

<style lang="scss" scoped>

</style>
