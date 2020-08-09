<template>
  <div>
    <div id="nav">
      <router-link to="/admin">後台頁面</router-link>|
      <router-link to="/">返回前台頁面</router-link>|
      <router-link to="/admin/product">產品列表</router-link>|
      <router-link to="/admin/coupon">優惠券列表</router-link>|
      <router-link to="/admin/orders">訂單列表</router-link>|
      <router-link to="/admin/pictures">圖片儲存列表</router-link>|
      <a href="#" @click.prevent="signOut">登出</a>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      checkToken: false,
    };
  },
  methods: {
    signOut() {
      document.cookie = 'token=;expires=;';
      this.$router.push('/login');
    },
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (this.token === '') this.$router.push('/login');

    const url = `${process.env.VUE_APP_APIPATH}auth/check`;
    this.axios.post(url, { api_token: this.token })
      .then((res) => {
        if (res.data.success) this.checkToken = res.data.success;
      }).catch(() => this.$router.push('/login'));
  },
};
</script>

<style>

</style>
