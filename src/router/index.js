import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: [
    {
      path: '',
      component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue'),
    },
    {
      path: 'products',
      component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
    },
    {
      path: 'product/:id',
      component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    },
    {
      path: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
      path: 'cart',
      component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    },
    {
      path: 'checkout',
      component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue'),
    },
    {
      path: 'checkoutFinsh',
      component: () => import(/* webpackChunkName: "checkoutFinsh" */ '../views/CheckoutFinsh.vue'),
    },
  ],
},
{
  path: '/admin',
  component: () => import(/* webpackChunkName: "admin" */ '../views/dashboard/Dashboard.vue'),
  children: [
    {
      path: 'product',
      component: () => import(/* webpackChunkName: "product" */ '../views/dashboard/Product.vue'),
    },
    {
      path: 'orders',
      component: () => import(/* webpackChunkName: "orders" */ '../views/dashboard/Orders.vue'),
    },
    {
      path: 'pictures',
      component: () => import(/* webpackChunkName: "pictures" */ '../views/dashboard/Pictures.vue'),
    },
    {
      path: 'coupon',
      component: () => import(/* webpackChunkName: "coupon" */ '../views/dashboard/Coupon.vue'),
    },
  ],
},
{
  path: '/login',
  component: () => import(/* webpackChunkName: "login" */ '../views/dashboard/Login.vue'),
},
];

const router = new VueRouter({
  routes,
});

export default router;
