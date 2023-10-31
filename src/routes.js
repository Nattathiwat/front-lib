import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ 
      path: '/:pathMatch(.*)*', 
      name: 'pageNotFound',
      component: () => import("./view/example/component/pageNotFound.vue")
    }, { 
      path: '/', 
      redirect: { name: 'login' }
    }, { 
      path: '/login', 
      name: 'login',
      component: () => import("./view/login/index.vue")
    }, { 
      path: '/reset-password',
      name: 'resetPassword',
      component: () => import("./view/login/resetPassword.vue")
    }, { 
      path: '/dashboard', 
      name: 'dashboard',
      component: () => import("./view/example/component/dashboard.vue")
    },  { 
      path: '/chart', 
      name: 'chart',
      component: () => import("./view/example/component/chart.vue")
    }, { 
      path: '/permission', 
      name: 'permission',
      component: () => import("./view/example/component/permission.vue")
    },  { 
      path: '/user', 
      name: 'user',
      component: () => import("./view/example/component/user.vue")
    },  { 
      path: '/report', 
      name: 'report',
      component: () => import("./view/example/component/report.vue")
    },   { 
      path: '/setting', 
      name: 'setting',
      component: () => import("./view/example/component/setting.vue")
    }, { 
      path: '/example', 
      name: 'example',
      redirect: { name: 'exampleDashboard' },
      children: [{ 
        path: 'dashboard', 
        name: 'exampleDashboard',
        component: () => import("./view/example/component/dashboard.vue")
      },{ 
        path: 'form', 
        name: 'exampleForm',
        component: () => import("./view/example/component/form.vue")
      }, { 
        path: 'validate', 
        name: 'exampleValidate',
        component: () => import("./view/example/component/validate.vue")
      }, { 
        path: 'other', 
        name: 'exampleOther',
        component: () => import("./view/example/component/other.vue")
      }, { 
        path: 'table', 
        name: 'exampleTable',
        component: () => import("./view/example/component/table.vue")
      }]
    }
  ]
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/reset-password'];
  const authRequired = !publicPages.includes(to.path);
  const checkLogin = !(localStorage.getItem('login') == 'true')
  if (authRequired && checkLogin) {
      // return '/login';
  }
});

export default router