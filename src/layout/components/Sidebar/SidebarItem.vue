<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <!-- <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />-->
          <template v-if="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)">
            <!-- <el-icon>-->
            <!--   <edit />-->
            <!-- </el-icon>-->
            <el-icon :size="20">
              <folder />
            </el-icon>
          </template>

          <template v-if="onlyOneChild.meta.title">
            <span>{{ onlyOneChild.meta.title }}</span>
          </template>

        </el-menu-item>
      </app-link>
    </template>

    <el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template v-slot:title>
        <!-- <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />-->
        <template v-if="item.meta && item.meta.icon">
          <el-icon :size="20">
            <folder />
          </el-icon>
        </template>

        <template v-if="item.meta.title">
          <span>{{ item.meta.title }}</span>
        </template>
      </template>

      <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
      />
    </el-sub-menu>

  </div>
</template>

<script>
import path         from 'path'
import {isExternal} from '@/utils/validate'
import Item         from './Item'
import AppLink      from './Link'

import {Folder} from '@element-plus/icons-vue' // svg图标

export default {
  name      : 'SidebarItem',
  components: { Item, AppLink, Folder },
  mixins    : [],
  props     : {
    // route object
    item    : {
      type    : Object,
      required: true,
    },
    isNest  : {
      type   : Boolean,
      default: false,
    },
    basePath: {
      type   : String,
      default: '',
    },
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    // this.onlyOneChild = null
    return {
      onlyOneChild: null,
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        }
        else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },
  },
}
</script>
