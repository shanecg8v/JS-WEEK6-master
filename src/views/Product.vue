<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <h1>這是產品列表</h1>
    <div class="row">
      <div class="col-4 mb-3 mt-2" v-for="item in products" :key="item.id">
        <div class="card">
          <div class="card-img-top bg-img"
            :style="{backgroundImage:`url(${item.imageUrl[0]})`}"></div>
          <div class="card-body" style="width: 18rem;">
            <span class="badge badge-secondary float">{{item.category}}</span>
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.content}}</p>
            <div v-if="item.origin_price != item.price">
              <del>原價{{item.origin_price}}元</del>
              <h5>大特價{{item.price}}元</h5>
            </div>
            <div v-else>
              <h5>原價{{item.price}}元</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`;

      this.axios.get(url).then((res) => {
        this.isLoading = false;
        this.products = res.data.data;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style>
</style>
