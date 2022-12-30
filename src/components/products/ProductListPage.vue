<script>
import api from "../../services/api";

import Card from '../main/Card.vue'

export default {
  name: "ProductListPage",

  data() {
    return {
      products: null,
      loaded: false,
      page: 1,
      pageSize: 100,
      total: 0,
    };
  },
  computed: {
    cardStyle() {
      const width = "20rem";
      const height = "15rem";

      return {
        width,
        height,
        objectFit: "cover",
        cursor: "pointer",
      };
    },
    imgStyle() {
      const width = "100%";
      const height = "10rem";

      return {
        width,
        height,
        objectFit: "cover",
      };
    },
    size() {
      const height = '500px';
      const width = "100%";

      return {
        height,
        width
      }
    },
  },
  methods: {
    async loadProducts(page) {
      this.loaded = true;
      try {
        const response = await api.get(`/products?page=${page}&limit=${this.pageSize}`);
        this.total = response.data.total;
        this.products = response.data.products;
        this.loaded = false;
      } catch (error) {
        console.error("There was an error: ", error);
      }
    }
  },

  mounted() {
    this.loadProducts();
  }
};

</script>

<template>
  <div v-if="loaded" style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%); z-index: 999">
    <a-spin size="large" />
    <p>Loading products</p>
  </div>
  <div v-else>
    <a-row justify="center" :gutter="[16, 16]" style="padding: 2rem 0">
      <div v-for="product in products" :key="product.id">
        <router-link :to="`/product/${product.id}`">
          <a-col>
            <Card :product="product" :loaded="loaded"/>
          </a-col>
        </router-link>
      </div>
    </a-row>
  </div>
</template>

<style>
  .ant-col {
    padding: 0;
    margin: 0;
  }
</style>
