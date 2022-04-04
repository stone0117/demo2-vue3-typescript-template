<template>
  <div :class="customClass">
    <h1>hello <b>ImmutableTest</b></h1>
  </div>
</template>

<script type="text/ecmascript-6">

// import {mapMutations, mapActions, mapState, mapGetters} from 'vuex';

export default {
  // extends   : {},
  mixins    : [],
  components: {  },
  name      : 'ImmutableTest',
  // https://cn.vuejs.org/v2/guide/components-props.html
  // props     : ['users'],
  // props: {
  //   // 对象或数组默认值必须从一个工厂函数获取
  //   users: { type: Array, required: true, default: () => [] },
  //   // 多个可能的类型
  //   age: { type: [String, Number], default: 0 },
  //   自定义验证函数
  //   animation: {
  //     type: String,
  //     validator: function (t) {
  //       // 这个值必须匹配下列字符串中的一个
  //       return t === 'fade' || t === 'slide'
  //     },
  //     default:'slide'
  //   }
  // },
  props: {
    className: { type: String, default: '' },
  },
  data() {
    return {}
  },
  watch   : {
    // https://cn.vuejs.org/v2/guide/computed.html
    // '$route'(to, from) {},
    // title(newValue, oldValue) {},
    // 为了发现对象内部值的变化，可以在选项参数中指定 deep: true。注意监听数组的变更不需要这么做。
    // 在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
    // someObject: { handler: function (val, oldVal) { /* ... */ }, deep: true, immediate: true },
  },
  computed: {
    customClass() {return ['ImmutableTest', this.className]},
    // startTimeAndEndTime             : {
    //   // getter
    //   get() {
    //     if (this.formObject.startTime == undefined && this.formObject.endTime == undefined) {
    //       return undefined
    //     }
    //     else {
    //       return [this.formObject.startTime || '', this.formObject.endTime || '']
    //     }
    //   },
    //   // setter
    //   set(val) {
    //     if (val && val.length == 2) {
    //       this.formObject.startTime = val[0]
    //       this.formObject.endTime   = val[1]
    //     }
    //     else {
    //       this.formObject.startTime = undefined
    //       this.formObject.endTime   = undefined
    //     }
    //   },
    // },
  },
  methods : {},
  // filters : {
  //   // https://cn.vuejs.org/v2/guide/filters.html
  //   // 使用方法: {{item.title | toUp}}
  //   capitalize: function (value) {
  //     if (!value) {return ''}
  //     value = value.toString()
  //     return value.charAt(0).toUpperCase() + value.slice(1)
  //   },
  // },
  //  directives: {
  //    // 使用方法: https://cn.vuejs.org/v2/guide/custom-directive.html#ad
  //  },
  // beforeRouteEnter(to, from, next) {
  //   // https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   next(vm => {
  //     console.log(vm)
  //   })
  // },
  // beforeRouteUpdate(to, from, next) {
  //   // https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
  //   // 组件被复用的时候调用, 比如 /home/:id 这种路由 传入的参数不同的时候 会调用beforeRouteUpdate
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   next()
  // },
  // beforeRouteLeave(to, from, next) {
  //   // https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   let leave = confirm('还未保存,您确定要离开吗?')
  //   if (leave) {next()}
  //   else {next(false)}
  //   // next()
  // },
  created() {
    // document.documentElement.scrollTop = 0
  },
  destroyed() {},
  mounted() {},
}
</script>

<!--cnpm i -D less less-loader stylus stylus-loader sass sass-loader-->
<!--<style scoped lang="less" rel="stylesheet/less">-->
<!--<style scoped lang="stylus" rel="stylesheet/stylus">-->
<!--// { parser: "babylon" } is deprecated; we now treat it as { parser: "babel" }.-->
<!--// npm i vue-loader@14 来修复-->
<style scoped lang="scss" rel="stylesheet/scss">
// immutable-test
// @import "ImmutableTest.scss"
.ImmutableTest {

}
</style>
