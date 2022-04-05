<template>
  <pre :class="{'c-pre':true,'c-pre-none':!computedEnv}" v-if="computedEnv"><slot></slot></pre>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name : 'CPre',
  props: {
    className: {type: String, default: ''}
  },
  data() {
    return {}
  },
  computed: {
    computedEnv() {return process.env.NODE_ENV === 'development'}
  },
  methods : {}
})
</script>

<style scoped lang="scss" rel="stylesheet/scss">

.c-pre {
  font-family : "JetBrains Mono", sans-serif !important;
  font-size   : 12px;
  color       : #515A6E;
}

.c-pre-none {
  display : none;
}
</style>
