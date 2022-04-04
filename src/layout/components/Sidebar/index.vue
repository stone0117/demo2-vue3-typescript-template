<template>
  <div style="background-color: #F8F8F8;">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
          :default-active="activeMenu"
          :collapse="false"
          :unique-opened="false"
          :collapse-transition="false"
          mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import routes    from '@/router/routes'
console.log(`routes = `,routes);
export default {
  components: { SidebarItem },
  data() {
    return {
      routes,
    }
  },
  computed: {
    activeMenu() {
      const route          = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
  },
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
