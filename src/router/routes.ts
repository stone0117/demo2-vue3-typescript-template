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
  // {
  //   path      : '/demo-management',
  //   component : Layout,
  //   redirect  : '/demo-management/table-management',
  //   alwaysShow: true,
  //   name      : 'DemoManagement',
  //   meta      : {title: 'Demo管理', icon: 'el-icon-folder'},
  //   children  : [
  //     {
  //       path     : 'immutable-test',
  //       component: () => import('@/views/demo-management/immutable-test/index.vue'),
  //       name     : 'ImmutableTest',
  //       meta     : {
  //         title  : 'immutable-test',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  {
    path      : '/typescript-management',
    component : Layout,
    redirect  : '/typescript-management/typescript-test-000',
    alwaysShow: true,
    name      : 'TypescriptManagement',
    meta      : {title: 'Typescript管理', icon: 'el-icon-folder'},
    children  : [
      {
        path     : 'typescript-test-000',
        component: () => import('@/views/typescript-management/typescript-test-000/index.vue'),
        name     : 'TypescriptTest_000',
        meta     : {title: 'Typescript Test 000', noCache: true}
      },
      {
        path     : 'typescript-test-001',
        component: () => import('@/views/typescript-management/typescript-test-001/index.vue'),
        name     : 'TypescriptTest_001',
        meta     : {title: 'Typescript Test 001', noCache: true}
      },
      {
        path     : 'typescript-test-002',
        component: () => import('@/views/typescript-management/typescript-test-002/index.vue'),
        name     : 'TypescriptTest_002',
        meta     : {title: 'Typescript Test 002', noCache: true}
      },
      {
        path     : 'typescript-test-003',
        component: () => import('@/views/typescript-management/typescript-test-003/index.vue'),
        name     : 'TypescriptTest_003',
        meta     : {title: 'Typescript Test 003', noCache: true}
      },
      {
        path     : 'typescript-test-004',
        component: () => import('@/views/typescript-management/typescript-test-004/index.vue'),
        name     : 'TypescriptTest_004',
        meta     : {title: 'Typescript Test 004', noCache: true}
      },
      {
        path     : 'typescript-test-005',
        component: () => import('@/views/typescript-management/typescript-test-005/index.vue'),
        name     : 'TypescriptTest_005',
        meta     : {title: 'Typescript Test 005', noCache: true}
      },
      {
        path     : 'typescript-test-006',
        component: () => import('@/views/typescript-management/typescript-test-006/index.vue'),
        name     : 'TypescriptTest_006',
        meta     : {title: 'Typescript Test 006', noCache: true}
      },
      {
        path     : 'typescript-test-007',
        component: () => import('@/views/typescript-management/typescript-test-007/index.vue'),
        name     : 'TypescriptTest_007',
        meta     : {title: 'Typescript Test 007', noCache: true}
      },
      {
        path     : 'typescript-test-008',
        component: () => import('@/views/typescript-management/typescript-test-008/index.vue'),
        name     : 'TypescriptTest_008',
        meta     : {title: 'Typescript Test 008', noCache: true}
      },
      {
        path     : 'typescript-test-009',
        component: () => import('@/views/typescript-management/typescript-test-009/index.vue'),
        name     : 'TypescriptTest_009',
        meta     : {title: 'Typescript Test 009', noCache: true}
      },
      {
        path     : 'typescript-test-010',
        component: () => import('@/views/typescript-management/typescript-test-010/index.vue'),
        name     : 'TypescriptTest_010',
        meta     : {title: 'Typescript Test 010', noCache: true}
      },
      {
        path     : 'typescript-test-011',
        component: () => import('@/views/typescript-management/typescript-test-011/index.vue'),
        name     : 'TypescriptTest_011',
        meta     : {title: 'Typescript Test 011', noCache: true}
      },
      {
        path     : 'typescript-test-012',
        component: () => import('@/views/typescript-management/typescript-test-012/index.vue'),
        name     : 'TypescriptTest_012',
        meta     : {title: 'Typescript Test 012', noCache: true}
      },
      {
        path     : 'typescript-test-013',
        component: () => import('@/views/typescript-management/typescript-test-013/index.vue'),
        name     : 'TypescriptTest_013',
        meta     : {title: 'Typescript Test 013', noCache: true}
      },
      {
        path     : 'typescript-test-014',
        component: () => import('@/views/typescript-management/typescript-test-014/index.vue'),
        name     : 'TypescriptTest_014',
        meta     : {title: 'Typescript Test 014', noCache: true}
      },
      {
        path     : 'typescript-test-015',
        component: () => import('@/views/typescript-management/typescript-test-015/index.vue'),
        name     : 'TypescriptTest_015',
        meta     : {title: 'Typescript Test 015', noCache: true}
      },
      {
        path     : 'typescript-test-016',
        component: () => import('@/views/typescript-management/typescript-test-016/index.vue'),
        name     : 'TypescriptTest_016',
        meta     : {title: 'Typescript Test 016', noCache: true}
      },
      {
        path     : 'typescript-test-017',
        component: () => import('@/views/typescript-management/typescript-test-017/index.vue'),
        name     : 'TypescriptTest_017',
        meta     : {title: 'Typescript Test 017', noCache: true}
      },
      {
        path     : 'typescript-test-018',
        component: () => import('@/views/typescript-management/typescript-test-018/index.vue'),
        name     : 'TypescriptTest_018',
        meta     : {title: 'Typescript Test 018', noCache: true}
      },
      {
        path     : 'typescript-test-019',
        component: () => import('@/views/typescript-management/typescript-test-019/index.vue'),
        name     : 'TypescriptTest_019',
        meta     : {title: 'Typescript Test 019', noCache: true}
      }
    ]
  },
  {path: '/:pathMatch(.*)', redirect: '/404', hidden: true}
]
export default routes
