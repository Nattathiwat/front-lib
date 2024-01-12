import { createRouter, createWebHistory } from "vue-router";
import { globals } from "./main.js";
import Swal from "sweetalert2/dist/sweetalert2";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "pageNotFound" },
    },
    {
      path: "/pageNotFound",
      name: "pageNotFound",
      component: () => import("./view/example/pageNotFound/index.vue"),
    },
    {
      path: "/",
      redirect: { name: "login" },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./view/login/index.vue"),
    },
    {
      path: "/reset-password",
      name: "resetPassword",
      component: () => import("./view/login/component/resetPassword.vue"),
    },
    {
      path: "/example",
      name: "example",
      redirect: { name: "exampleDashboard" },
      children: [
        {
          path: "dashboard",
          name: "exampleDashboard",
          component: () => import("./view/example/component/dashboard.vue"),
        },
        {
          path: "form",
          name: "exampleForm",
          component: () => import("./view/example/component/form.vue"),
        },
        {
          path: "validate",
          name: "exampleValidate",
          component: () => import("./view/example/component/validate.vue"),
        },
        {
          path: "other",
          name: "exampleOther",
          component: () => import("./view/example/component/other.vue"),
        },
        {
          path: "table",
          name: "exampleTable",
          component: () => import("./view/example/component/table.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // const token = localStorage.getItem("token");
    const token = "token";
    if (token) {
      if (to.meta.requiresAuth.some((item) => globals.permission[item])) {
        next();
      } else {
        Swal.fire({
          title: "ไม่มีสิทธิ์",
          icon: "error",
          showCancelButton: true,
          cancelButtonText: "ปิด",
          cancelButtonColor: "#dc3545",
          showConfirmButton: false,
        }).then((result) => {
          if (!result.isConfirmed) {
            next("/login");
          }
        });
      }
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
