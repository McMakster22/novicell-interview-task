import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import PageView from '@/views/PageView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: PageView,
    meta: { pageKey: 'homePage', title: 'Home' }
  },
  {
    path: '/product-list',
    name: 'products',
    component: PageView,
    meta: { pageKey: 'productListPage', title: 'Products' }
  },
  {
    // enforce numeric ids at the router level
    path: '/product/:id(\\d+)',
    name: 'product',
    component: PageView,
    // pass typed props into PageView (then PageView forwards to ProductPage)
    props: route => ({ id: Number(route.params.id) }),
    meta: { pageKey: 'productPage', title: (to: any) => `Product ${to.params.id}` }
  },
  {
    path: '/basket',
    name: 'basket',
    component: PageView,
    meta: { layoutKey: 'basket', pageKey: 'basketPage', title: 'Basket' }
  },
  {
    path: '/404',
    name: 'not-found',
    component: PageView,
    meta: { layoutKey: 'error', pageKey: 'errorPage', title: 'Not found' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'not-found' }
  }
]

export function createAppRouter() {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      return { left: 0, top: 0 }
    }
  })

  router.afterEach((to) => {
    const t = to.meta?.title
    if (!t) return
    document.title = typeof t === 'function' ? t(to) : String(t)
  })

  return router
}