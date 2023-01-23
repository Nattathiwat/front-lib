export default {
  routes: [
    { 
      path: '/:pathMatch(.*)*', 
      name: 'PageNotFound',
      component: () => import("./view/pageNotFound.vue"),
    },
    { 
      path: '/', 
      name: 'Form Controls',
      component: () => import("./view/form.vue"),
    },
    { 
      path: '/validate', 
      name: 'Validate',
      component: () => import("./view/validate.vue"),
    },
    { 
      path: '/other', 
      name: 'Other',
      component: () => import("./view/other.vue"),
    },
    { 
      path: '/table', 
      name: 'Table',
      component: () => import("./view/table.vue"),
    },
  ]
};