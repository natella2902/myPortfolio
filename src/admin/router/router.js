import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import store from "../store"

Vue.use(VueRouter);

const baseURL =  "https://webdev-api.loftschool.com";

const guard = axios.create({
  baseURL
});

import about from '../components/pages/about.vue'
import reviews from '../components/pages/reviews.vue'
import works from '../components/pages/works.vue'
import login from '../components/pages/login.vue'

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogged = store.getters["user/userIsLogged"];

  if (isPublicRoute === false && isUserLogged === false) {
    const token = localStorage.getItem("token");
    guard.defaults.headers["Authorization"] = `Bearer ${token}`;
      
    try {
      const response = await guard.get("/user");
      store.commit("user/SET_USER", response.data.user);
      next();
    } catch (error) {
      router.replace("/login");
      localStorage.removeItem("token");
    }
  } else {
    next();
  }
}); 

const routes = [
  {
    path: '',
    component: about,
    meta: {
      title: "Блок Обо мне"
    }
  },
  {
    path: '/reviews',
    component: reviews,
    meta: {
      title: "Блок Отзывы"
    }
  },
  {
    path: '/works',
    component: works,
    meta: {
      title: "Блок Работы"
    }
  },
  {
    path: '/login',
    component: login,
    meta: {
      public: true
    }
  }

];

export default new VueRouter({ routes });
