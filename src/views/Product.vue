<template>
  <div class="container">
    <loading :active.sync="isLoading" />
    <div class="row">
      <div class="col-6">
        <img class="img-fluid bg-img" :src="product.imageUrl[0]"
          style="height: 450px;background-size: contain;background-position: center center;">
      </div>
      <div class="col-6 text-left d-flex flex-column justify-content-center">
        <h3 class="mb-5 font-weight-bold">{{ product.title }}</h3>
        <p>{{ product.content }}</p>
        <footer class="blockquote-footer">{{ product.description }}</footer>
        <div class="form-row mt-5 justify-content-end">
          <div class="col-4">
            <div class="input-group">
              <div class="input-group-prepend">
                <button class="btn btn-outline-primary" @click="num <= 1 ? 1 : num--">-</button>
              </div>
              <input type="number" class="form-control text-center" min="1" v-model="num">
              <div class="input-group-append">
                <button class="btn btn-outline-primary" @click="num++">+</button>
              </div>
            </div>
          </div>
          <div class="col-3">
            <button type="button" class="btn btn-primary">加入購物車</button>
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
      num: 1,
      product: {
        imageUrl: [],
      },
    };
  },
  created() {
    this.isLoading = true;
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${this.$route.params.id}`;

    this.axios.get(url).then((res) => {
      this.isLoading = false;
      this.product = res.data.data;
    });
  },
};
</script>
