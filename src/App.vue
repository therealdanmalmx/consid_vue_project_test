<script>
import Header from  './components/main/Header.vue';
import Content from "./components/main/Content.vue";
import Footer from './components/main/Footer.vue'

export default {
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<template>
  <a-layout id="components-layout-demo-basic">
    <a-layout>
      <Header />
      <router-view :key="$route.path"/>
      <Footer v-if="$route.path" />
    </a-layout>
  </a-layout>
</template>

<style>

  .ant-layout {
    background: #fff;
  }
</style>
