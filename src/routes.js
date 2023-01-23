export default {
  routes: [
    { 
      path: '/:pathMatch(.*)*', 
      name: 'PageNotFound',
      component: () => import("./view/pageNotFound.vue"),
    },
    { 
      path: '/component', 
      name: 'Form Controls',
      component: () => import("./view/form.vue"),
    },
    { 
      path: '/component/validate', 
      name: 'Validate',
      component: () => import("./view/validate.vue"),
    },
    { 
      path: '/component/other', 
      name: 'Other',
      component: () => import("./view/other.vue"),
    },
    { 
      path: '/component/table', 
      name: 'Table',
      component: () => import("./view/table.vue"),
    },
  ]
};