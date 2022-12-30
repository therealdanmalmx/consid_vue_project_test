<script>
import ProductListPage from "../products/ProductListPage.vue";
export default {
  name: "ProductListPage",
  components: {
    ProductListPage,
  },
};
</script>

<template>
  <a-layout-content>
    <ProductListPage />
  </a-layout-content>
</template>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-content {
  background: #fff;
  color: #ccc;
  /* height: 80vh; */
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}

.ant-input {
  width: 70%;
}
.ant-btn.ant-btn-primary {
  outline: none;
  border: none;
  margin-left: 0.5rem;
}

</style>
