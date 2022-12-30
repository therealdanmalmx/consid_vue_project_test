<template>
    <div class="product-info-container">
        <a-breadcrumb style="text-align:left">
            <a-breadcrumb-item><router-link to="/">Home</router-link></a-breadcrumb-item>
            <a-breadcrumb-item><router-link :to="`/product/category/${product.category}`">{{capitalizeCategory(product.category)}}</router-link></a-breadcrumb-item>
            <a-breadcrumb-item>{{product.brand}}</a-breadcrumb-item>
        </a-breadcrumb>
        <LeftCircleFilled
            style="font-size: 2rem;"
            @click="goBack"
            class="icon"
        />
        <div class="product-info-title">
            {{ title(product.title)}}
        </div>
        <a-row justify="center" :gutter="[80, 20]">
                <a-col :xs="24" :md="12">
                    <div class="product-info-description-image">
                        <a-carousel arrows>
                            <template #prevArrow>
                            <div class="custom-slick-arrow" style="left: -30px; z-index: 1; color: black;">
                            </div>
                            </template>
                            <template #nextArrow>
                            <div class="custom-slick-arrow" style="right: -30px; z-index: 1; color: black;">
                            </div>
                            </template>
                            <div v-for="image in product.images">
                                <img class="image-style" :src="image" />
                            </div>
                        </a-carousel>
                        <div class="product-info-price">
                            <div>
                                <h4 class="product-info-price-title">Price: </h4>
                            </div>
                            <div>
                                <span class="discounted-price">€{{ (product.price / (1 + product.discountPercentage / 100)).toFixed(0) }}</span>
                                <span class="original-price">€{{ product.price }}</span>
                                <span class="discount-amount">(-{{ product.discountPercentage }}%)</span>
                            </div>
                        </div>
                    </div>
                </a-col>
                <a-col :xs="24" :md="12" class="product-info-description">
                    <div class="product-info-description-styling">
                        <span class="description-styling-info">{{ product.description }}</span>
                        <p class="description-styling-rating">PRODUCT RATING: {{ product.rating }} / 5</p>
                    </div>
                </a-col>
        </a-row>
    </div>
</template>

<script>
import api from '../../services/api'
import { LeftCircleFilled } from '@ant-design/icons-vue';

export default {
    components: {
        LeftCircleFilled,
    },

    data() {
        return {
            id: this.$route.params.id,
            product: {},
        }
    },
    methods: {
        goBack() {
            this.$router.back();
        },

        capitalizeCategory(category) {
            if (category) {
                const categoryCapital = category.charAt(0).toUpperCase() + category.slice(1)
                return categoryCapital;
            }
        },
        title(title) {
            let titleName = title;
            if (title && title.startsWith("-")) {
                titleName = title.split('-')[1].trim().toUpperCase();
            }
            if (title && title.includes('.')) {
                titleName = title.split('.')[0].trim().toUpperCase();
            }
            return titleName;
        }
    },
    created() {
        const loadProducts = async () => {
            this.loaded = true;
            try {
                const response = await api.get(`/products/${this.id}`);
                this.product = response.data;
                this.loaded = false;
            } catch (error) {
                console.error("There was an error: ", error);
            }
        };
        loadProducts();
    }
}

</script>

<style scoped>
    /* CUSTOM     */
    .icon {
        display: block;
        cursor: pointer;
        text-align: left;
        margin-top: 2rem;
    }
    .brand {
        color: #aaa;
    }
    .product-info-container {
        padding: 1rem;
        margin: 0;
        background: #fff;
        border: none;
        width: 90%;
        margin: 0 auto;
    }

    .image-style {
        width: 300px;
        height: 300px;
    }

    .product-info-description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .product-info-description-styling {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border: 2px solid #aaa;
        height: 300px;
        width: calc(380px - 40px);
    }

    .description-styling-info {
        padding: 2rem;
        font-size: 1.2rem;
    }

    .description-styling-rating {
        font-weight: bold;
        font-size: 1rem;
    }

    .discount-amount {
        color: maroon;
        padding-left: 0.2rem;
    }

    .discounted-price {
        font-weight: 700;
    }

    .product-info-title {
        display: block;
        font-size: 2rem;
        margin-bottom: 1rem;
        line-height: 1.8rem;
    }

    .original-price {
        text-decoration: line-through;
        color: maroon;
        padding-left: 1rem;
    }

    .product-info-price {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 1rem;
        margin-top: 1rem;
    }
    .product-info-price-title {
        font-weight: 700;
        padding-right: 0.5rem;
        text-transform: uppercase;
    }

    .product-info-description {
        display: flex;
        justify-content: space-between;
    }


    /* ANT-DESIGN */
    .ant-carousel {
        width: 300px;
    }

    .ant-carousel :deep(.slick-slide) {
        text-align: center;
        height: 300px;
        width: 800px;
        overflow: hidden;
    }

    .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
        width: 25px;
        height: 25px;
        font-size: 25px;
        color: black;
    }
    .custom-slick-arrow :deep(.slick-arrow) {
        display: block;
        right: -30px;
    }
    .ant-carousel :deep(.custom-slick-arrow:hover) {
        opacity: 0.5;
    }

    .ant-carousel :deep(.slick-slide h3) {
        color: #fff;
    }
    .slick-dots.slick-dots-bottom {
        background-color: green;
    }

    @media (min-width: 420px) {
        .image-style {
            width: 500px;
            height: 400px;
        }
        .description-styling-info {
            padding: 2rem;
            font-size: 1.5rem;
        }
        .product-info-description-styling {
            height: 400px;
            width: 500px;
            align-items: center;

        }
        .ant-carousel {
            width: 500px;
        }

        .ant-carousel :deep(.slick-slide) {
            height: 400px;
        }
    }


</style>