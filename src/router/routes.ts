import Layout from '@/layout/index.vue'

const routes = [
  {path: '/redirect', component: Layout, hidden: true, children: [{path: '/redirect/:pathMatch(.*)', component: () => import('@/views/redirect/index.vue')}]},
  {path: '/404', component: () => import('@/views/error-page/404.vue'), hidden: true},
  {path: '/401', component: () => import('@/views/error-page/401.vue'), hidden: true},
  {
    path    : '/', component: Layout, redirect: '/dashboard',
    children: [
      {
        path     : 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name     : 'Dashboard',
        meta     : {
          title: '首页',
          icon : 'el-icon-house',
          // icon : 'el-icon-s-home',
          // icon : 'dashboard',
          affix: true
          // noCache: true,
        }
      }
    ]
  },
  {
    path      : '/demo-management',
    component : Layout,
    redirect  : '/demo-management/table-management',
    alwaysShow: true,
    name      : 'DemoManagement',
    meta      : {title: 'Demo管理', icon: 'el-icon-folder'},
    children  : [
      {
        path     : 'immutable-test',
        component: () => import('@/views/demo-management/immutable-test/index.vue'),
        name     : 'ImmutableTest',
        meta     : {
          title  : 'immutable-test',
          noCache: true
        }
      }
    ]
  },
  {path: '/:pathMatch(.*)', redirect: '/404', hidden: true}
]
export default routes
