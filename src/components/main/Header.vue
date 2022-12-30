<template>
    <a-layout-header>
    <div class="container">
        <span
            class="menu-icons-styling"
            @click="this.collapsed = !this.collapsed"
        >
            <MenuUnfoldOutlined v-if="!collapsed" />
            <MenuFoldOutlined v-else />
        </span>
        <div class="menu" v-if="!collapsed"><Menu @closeMenu="this.collapsed = !this.collapsed" /></div>
        <div style="font-size: 45px">
            <router-link to="/">
                <ScissorOutlined style="color: black"/>
            </router-link>
        </div>
        <div class="customer-icons-styling">
            <UserOutlined />
            <ShoppingOutlined />
        </div>
    </div>
    </a-layout-header>
</template>

<script>
import Menu from '../../components/main/Menu.vue'
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, ShoppingOutlined, ScissorOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        UserOutlined,
        ShoppingOutlined,
        ScissorOutlined
    },

    data() {
        return {
            collapsed: true,
        }
    },
    computed: {
        lala() {
            return this.collapsed = !this.collapsed;
        }
    },
    methods: {
        goBack() {
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu {
        display: flex;
        position: absolute;
        top: 64px;
        left: 0;
    }
    .menu-icons-styling {
        cursor: pointer;
        font-size: 20px;

    }
    .customer-icons-styling {
        cursor: pointer;
        font-size: 20px;
        display: flex;
        width: 50px;
        justify-content: space-evenly;
    }
    .ant-layout-header {
        z-index: 10;
        box-shadow: 0 0 0 0.8;
        background: #fff;
        color: #aaa;
        border-bottom: 2px #aaa solid;
    }

</style>