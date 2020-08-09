<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">前台頁面</router-link>|
      <router-link to="/product">產品列表</router-link>|
      <router-link to="/cart">購物車</router-link>|
      <router-link to="/about">關於我們</router-link>|
      <router-link to="/Checkout">結帳</router-link>|
      <router-link to="/CheckoutFinsh">結帳完成</router-link>|
      <router-link to="/admin/">後台表單</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
};
</script>
