<template>
    <div style="width: 256px">
      <a-menu
        theme="dark"
        mode="inline"
      >
      <a-menu-item>
          <template #icon>
            <HomeOutlined />
          </template>
          <a-button @click="goHome">
                <span>Home</span>
            </a-button>
      </a-menu-item>
      <div v-for="category in categories">
          <a-menu-item :key="category">
            <template #icon>
              <ShoppingCartOutlined />
            </template>
            <a-button @click="goToPage(category)">
                <span>{{ capitalizeCategory(category) }}</span>
            </a-button>
          </a-menu-item>
      </div>

      </a-menu>
    </div>
  </template>
  <script>
  import api from "../../services/api";
  import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, HomeOutlined, ShoppingCartOutlined} from '@ant-design/icons-vue';

  export default {
    components: {
      MenuFoldOutlined,
      MenuUnfoldOutlined,
      ShoppingCartOutlined,
      HomeOutlined
    },
    data() {
        return {
            categories: {}
        };
    },
    methods: {
        capitalizeCategory(category) {
            if (category) {
                const categoryCapital = category.charAt(0).toUpperCase() + category.slice(1)
                return categoryCapital;
            }
        },
        goToPage(link) {
            this.$emit('closeMenu');
            return this.$router.push(`/product/category/${link}`)
        },
        goHome(link) {
            this.$emit('closeMenu');
            return this.$router.push('/')
        },
        async loadProducts() {
            this.loaded = true;
            try {
                const response = await api.get('/products/categories');
                this.categories = response.data;
                this.loaded = false;
            } catch (error) {
                console.error("There was an error: ", error);
            }
        }
    },
    mounted() {
        this.loadProducts();
    },
  };
  </script>

<style scoped>
    .ant-btn {
        background: none;
        color: #FFF;
        border: none;
        padding: 0
    }
</style>