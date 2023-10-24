export default {
  routes: [
    { 
      path: '/:pathMatch(.*)*', 
      name: 'PageNotFound',
      component: () => import("./view/example/pageNotFound.vue"),
    },
    { 
      path: '/component/dashboard', 
      name: 'Dashboard',
      component: () => import("./view/example/dashboard.vue"),
    },
    { 
      path: '/component/form', 
      name: 'Form Controls',
      component: () => import("./view/example/form.vue"),
    },
    { 
      path: '/component/validate', 
      name: 'Validate',
      component: () => import("./view/example/validate.vue"),
    },
    { 
      path: '/component/other', 
      name: 'Other',
      component: () => import("./view/example/other.vue"),
    },
    { 
      path: '/component/table', 
      name: 'Table',
      component: () => import("./view/example/table.vue"),
    },
  ]
};