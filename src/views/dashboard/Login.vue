<template>
    <div class="container mt-5">
      <loading :active.sync="isLoading"></loading>
      <h1>登入帳號</h1>
      <div class="row  justify-content-center">
        <div class="col-4">
          <div class="form-group">
            <label for="email">信箱</label>
            <input type="text" class="form-control"
              id="email" placeholder="請輸入信箱" v-model="user.email">
          </div>
          <div class="form-group">
            <label for="password">密碼</label>
            <input type="password" class="form-control"
              id="password" placeholder="請輸入密碼" v-model="user.password"
              @keyup.enter="signIn">
          </div>
          <button type="button" class="btn btn-primary" @click="signIn">登入</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}auth/login`;
      this.axios.post(url, this.user).then((res) => {
        const { token, expired } = res.data;

        document.cookie = `token=${token}; expires = ${new Date(expired * 1000)};path=/`;
        this.isLoading = false;
        this.$router.push('/admin');
      });
    },
  },
};
</script>
