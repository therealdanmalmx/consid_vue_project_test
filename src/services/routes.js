import Content from '../components/main/Content.vue'
import ProductDetailPage from '../components/products/ProductDetailPage.vue'
import Categories from '../components/category/Categories.vue'

export default [
    {
        path: '/',
        name:'Home',
        component: Content
    },
    {
        path: '/product/:id',
        name: 'ProductDetailPage',
        component: ProductDetailPage
    },
    {
        path: '/product/category/:category',
        name: 'Category',
        component: Categories
    },
]
