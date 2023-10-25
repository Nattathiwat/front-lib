import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/:pathMatch(.*)*', 
      name: 'PageNotFound',
      component: () => import("./view/example/pageNotFound.vue"),
    },
    { 
      path: '/', 
      redirect: {
        name: 'component'
      },
    },
    { 
      path: '/component', 
      name: 'component',
      // component: () => import("./view/my-work/index.vue"),
      redirect: {
        name: 'Dashboard'
      },
      children: [{ 
        path: 'dashboard', 
        name: 'Dashboard',
        component: () => import("./view/example/dashboard.vue"),
      },
      { 
        path: 'form', 
        name: 'Form Controls',
        component: () => import("./view/example/form.vue"),
      },
      { 
        path: 'validate', 
        name: 'Validate',
        component: () => import("./view/example/validate.vue"),
      },
      { 
        path: 'other', 
        name: 'Other',
        component: () => import("./view/example/other.vue"),
      },
      { 
        path: 'table', 
        name: 'Table',
        component: () => import("./view/example/table.vue"),
      }]
    },
  ]
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/component/dashboard'];
  const authRequired = !publicPages.includes(to.path);
  const checkLogin = !(localStorage.getItem('login') == 'true')
  if (authRequired && checkLogin) {
      return '/component/dashboard';
  }
});

export default router