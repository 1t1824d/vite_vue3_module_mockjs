import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      redirect: "/about/info",
      children: [
        {
          path: "info",
          name: "info",
          component: () => import("../pages/ChildCpt/info.vue"),

          children: [
            {
              path: "infodetail/:id/:title/:content",//params传参形式
              name: "infodetail",
              component: () => import("../pages/ChildCpt/infodetail/index.vue"),
              /*
               **路由的props传参
               */
              props: true,//props: true这种写法只适用params传参形式：将路由收到的params参数通过props传递给路由组件
              // props({params,query}=data){
              //   console.log(`params,query`, params,query);
              //   return params
              // }
            },
          ],
        },
        {
          path: "news",
          name: "news",
          component: () => import("../pages/ChildCpt/news.vue"),
          redirect: "/about/news/newsdetail",
          children: [
            {
              path: "newsdetail",
              name: "newsdetail",
              component: () => import("../pages/ChildCpt/newsdetail/index.vue"),
              props({query}=data){
                console.log(`query`, query);
                return query
              }
            },
          ],
        },
        {
          path: "work",
          name: "work",
          component: () => import("../pages/ChildCpt/work.vue"),
        },
      ],
    },
  ],
});

export default router;
