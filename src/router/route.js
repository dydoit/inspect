export default [
  {
    path: '/',
    redirect: '/networtk'
  },
  {
    path: '/networtk',
    component: () => import('../views/network/network-list.vue')
  }
]


