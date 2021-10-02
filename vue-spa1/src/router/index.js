import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewsDetail from "../components/NewsDetail";

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/news",
    name: "Home",
    component: Home,
    // children: [{
    //   path: "/news/:id",
    //   name: "NewsDetail",
    //   component: NewsDetail,
    //   props: {
    //     id: {
    //       type: [String, Number],
    //       default: null,
    //     }
    //   }
    // },
    // ],
  },
  {
    path: "/news/:id",
    name: "NewsDetail",
    component: NewsDetail,
    props: {
      id: {
        type: [String, Number],
        default: null,
      }
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
