import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ 
      path: '/:pathMatch(.*)*', 
      name: 'pageNotFound',
      component: () => import("./view/example/pageNotFound.vue")
    }, { 
      path: '/', 
      redirect: { name: 'dashboard' }
    }, { 
      path: '/dashboard', 
      name: 'dashboard',
      component: () => import("./view/example/dashboard.vue")
    }, { 
      path: '/example', 
      name: 'example',
      redirect: { name: 'dashboard' },
      children: [{ 
        path: 'form', 
        name: 'form',
        component: () => import("./view/example/form.vue")
      }, { 
        path: 'validate', 
        name: 'validate',
        component: () => import("./view/example/validate.vue")
      }, { 
        path: 'other', 
        name: 'other',
        component: () => import("./view/example/other.vue")
      }, { 
        path: 'table', 
        name: 'table',
        component: () => import("./view/example/table.vue")
      }]
    }
  ]
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/example/dashboard'];
  const authRequired = !publicPages.includes(to.path);
  const checkLogin = !(localStorage.getItem('login') == 'true')
  if (authRequired && checkLogin) {
      return '/example/dashboard';
  }
});

export default router