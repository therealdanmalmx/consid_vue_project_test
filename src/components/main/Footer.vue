<template>
  <a-layout-footer>
    <a-row :gutter="[40, 20]">
      <a-col :sm="12" :lg="6">
        <h3 style="text-align: left">About us</h3>
        <a-list>
          <a-list-item> <a href="#">History</a> </a-list-item>
          <a-list-item>
            <a href="#">Terms </a>
          </a-list-item>
          <a-list-item> <a href="#">Returns </a> </a-list-item>
          <a-list-item> <a href="#">Privacy policy</a> </a-list-item>
        </a-list>
      </a-col>
      <a-col :sm="12" :lg="6">
        <h3 style="text-align: left">My account</h3>
        <a-list>
          <a-list-item> <a href="#">My orders</a></a-list-item>
          <a-list-item>
            <a href="#">My invoices </a>
          </a-list-item>
          <a-list-item> <a href="#">Customized offers</a> </a-list-item>
          <a-list-item> <a href="#">My profile</a> </a-list-item>
        </a-list>
      </a-col>
      <a-col style="text-align: left" :sm="12" :lg="6">
        <h3>Let's connect</h3>
        <div class="social-icons">
          <a class="icon" href="#">
            <font-awesome-icon icon="fa-brands fa-twitter" style="color: blue" class="fa-xl"/>
            <span class="icon-text">Twitter</span>
          </a>
          <a class="icon" href="#">
            <font-awesome-icon icon="fa-brands fa-facebook" style="color: blue" class="fa-xl"/>
            <span class="icon-text">Facebook</span>
          </a>
          <a class="icon" href="#">
            <font-awesome-icon icon="fa-brands fa-linkedin" style="color: blue" class="fa-xl"/>
            <span class="icon-text">LinkedIn</span>
          </a>
          <a class="icon" href="#">
            <font-awesome-icon icon="fa-brands fa-youtube" style="color: red" class="fa-xl"/>
            <span class="icon-text">YouTube</span>
          </a>

        </div>
      </a-col>
      <a-col class="email-signup" :sm="12" :lg="6">
        <p style="text-align: left; padding: 4px">
          Sign up and get special offers
        </p>
        <a-input type="email" placeholder="enter your email" />
        <a-button type="primary"> Sign up </a-button>
      </a-col>
    </a-row>
  </a-layout-footer>
</template>

<script setup>

</script>

<style scoped>

  .fa-xl {
    width: 25px;
  }

  .email-signup {
    width: 100%;
  }

  .social-icons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .icon,
  .icon:active,
  .icon:focus {
    padding: 0.25rem 0;
    color: black;
  }

  .icon-text{
    padding: 0 0.25rem

  }

  #components-layout-demo-basic .ant-layout-footer {
    background: #fff;
    color: #aaa;
  }

  .ant-layout-footer {
    border-top: 2px #aaa solid;
    line-height: 1.5;
  }

  .ant-list-split .ant-list-item {
    border: none;
    line-height: 0.8;
    font-size: 1rem;
    padding: 0.5rem 0;
  }

  .ant-list-split .ant-list-item > a {
    color: #888;
  }

  .ant-input {
    width: 100%;
  }

  .ant-btn.ant-btn-primary {
    outline: none;
    border: none;
    margin: 0.5rem 0;
    /* margin-left: 0.5rem; */
    width: 100%
  }

</style>