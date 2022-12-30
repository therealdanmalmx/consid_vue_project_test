<template>
    <div>
        <div v-if="loaded" style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%)">
            <a-spin size="large" />
            <p>Loading products</p>
        </div>
        <div v-else>
            <h3 class="category-title">{{ capitalizeCategory(category) }}</h3>
            <a-row justify="center" :gutter="[16, 16]" style="padding: 2rem 0">
            <div v-for="product in products" :key="product.id">
                <router-link :to="`/product/${product.id}`">
                <a-col>
                    <Card :product="product" />
                </a-col>
                </router-link>
            </div>
            </a-row>
        </div>


    </div>
</template>

<script>

import api from '../../services/api'

export default {
    data() {
        return {
            category: this.$route.params.category,
            products: {},
            loaded: false,
        }
    },
    methods: {
        capitalizeCategory(category) {
            if (category) {
                const categoryCapital = category.charAt(0).toUpperCase() + category.slice(1)
                return categoryCapital;
            }
        },
        async loadProducts() {
            this.loaded = true;
            try {
                const response = await api.get(`/products/category/${this.category}`);
                this.products = response.data.products;
                this.loaded = false;
            } catch (error) {
                console.error("There was an error: ", error);
            }
        }
    },
    mounted() {
        this.loadProducts();
    },
}
</script>

<style scoped>
    .category-title {
        margin: 2rem 0 0;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 700;
    }
</style>