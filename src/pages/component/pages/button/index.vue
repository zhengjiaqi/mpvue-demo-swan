<template>
  <view class="container">
    <page-head title="button"></page-head>

    <view class="page-body">
      <view class="btn-area" id="buttonContainer">
        <button type="primary">页面主操作 Normal</button>
        <button type="primary" loading="true">页面主操作 Loading</button>
        <button type="primary" disabled="true">页面主操作 Disabled</button>

        <button type="default">页面次要操作 Normal</button>
        <button type="default" disabled="true">页面次要操作 Disabled</button>

        <button type="warn">警告类操作 Normal</button>
        <button type="warn" disabled="true">警告类操作 Disabled</button>

        <view class="button-sp-area">
          <button type="primary" plain="true">按钮</button>
          <button type="primary" disabled="true" plain="true">不可点击的按钮</button>

          <button type="default" plain="true">按钮</button>
          <button type="default" disabled="true" plain="true">按钮</button>

          <button class="mini-btn" type="primary" size="mini">按钮</button>
          <button class="mini-btn" type="default" size="mini">按钮</button>
          <button class="mini-btn" type="warn" size="mini">按钮</button>
        </view>
      </view>
    </view>

    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
const types = ['default', 'primary', 'warn']
export default {
  data() {
    return {
      defaultSize: 'default',
      primarySize: 'default',
      warnSize: 'default',
      disabled: false,
      plain: false,
      loading: false
    }
  },
  methods: {
    setDisabled() {
      this.setData({
        disabled: !this.data.disabled
      })
    },

    setPlain() {
      this.setData({
        plain: !this.data.plain
      })
    },

    setLoading() {
      this.setData({
        loading: !this.data.loading
      })
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'button',
      path: 'pages/component/pages/button/main'
    }
  }
}
</script>

<style>
button{
  margin-top: 30rpx;
  margin-bottom: 30rpx;
}
.button-sp-area{
  margin: 0 auto;
  width: 60%;
}
.mini-btn{
  margin-right: 10rpx;
}

</style>
