<template>
  <div class="cz-page">
    <div class="cz-page__content" :style="computedStyle">
      <slot></slot>
    </div>
    <!-- <slot></slot>-->
  </div>
</template>

<script type="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name : 'CzPage',
  props: {
    className      : {type: String, default: ''},
    backgroundColor: {type: String, default: '#FFFFFF'},
    // 'paddingTop'   : { type: String, default: '24px' },
    // 'paddingBottom': { type: String, default: '24px' },
    // 'paddingLeft'  : { type: String, default: '32px' },
    // 'paddingRight' : { type: String, default: '32px' },
    'paddingTop'   : {type: String, default: '24px'},
    'paddingBottom': {type: String, default: '24px'},
    'paddingLeft'  : {type: String, default: '32px'},
    'paddingRight' : {type: String, default: '32px'}
  },
  data() {
    return {}
  },
  computed: {
    computedStyle() {
      let minHeight = `calc(100vh - 50px - 30px - 6px - 24px - 24px + 34px)`
      return {
        backgroundColor: this.backgroundColor,
        minHeight      : minHeight,
        paddingTop     : this.paddingTop,
        paddingBottom  : this.paddingBottom,
        paddingLeft    : this.paddingLeft,
        paddingRight   : this.paddingRight
      }
    }
  },
  methods : {}
})
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.cz-page {
  padding : 24px;

  &__content {
    //min-height : calc(100vh - 50px - 30px - 6px - 24px - 24px);
    //padding    : 24px 32px;
  }
}
</style>
