import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Users/Register.vue"
import Account from "@/views/Users/Account.vue"
import Blog from "@/views/Posts/Blog.vue";
import Post from "@/views/Posts/Post.vue";
import PostCreate from "@/views/Posts/PostCreate.vue";
import PostEdit from "@/views/Posts/PostEdit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/account/:id",
    name: "User - account",
    component: Account,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post
  },
  {
    path: "/post/create",
    name: "Post - Create",
    component: PostCreate
  },
  {
    path: "/post/edit/:id",
    name: "Post - Edit",
    component: PostEdit
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
