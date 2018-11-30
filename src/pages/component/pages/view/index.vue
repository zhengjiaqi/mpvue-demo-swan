<template>
  <view class="container">
    <page-head title="view"></page-head>
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">
          <text>flex-direction: row\n横向布局</text>
        </view>
        <view class="page-section-spacing">
          <view class="flex-wrp" style="flex-direction:row;">
            <view class="flex-item demo-text-1"></view>
            <view class="flex-item demo-text-2"></view>
            <view class="flex-item demo-text-3"></view>
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>flex-direction: column\n纵向布局</text>
        </view>
        <view class="flex-wrp" style="flex-direction:column;">
          <view class="flex-item flex-item-V demo-text-1"></view>
          <view class="flex-item flex-item-V demo-text-2"></view>
          <view class="flex-item flex-item-V demo-text-3"></view>
        </view>
      </view>
    </view>
    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
export default {
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    swan.showToast({
      title: 'onShareAppMessage',
      duration: 1000,
    });
    return {
      title: 'view',
      path: 'pages/component/pages/view/main'
    }
  },
  onPullDownRefresh() {
    swan.showToast({
      title: 'onPullDownRefresh',
      duration: 1000,
    });
  }
}
</script>

<style>
.flex-wrp{
  margin-top: 60rpx;
  display:flex;
}
.flex-item{
  width: 200rpx;
  height: 300rpx;
  font-size: 26rpx;
}
.flex-item-V{
  margin: 0 auto;
  width: 300rpx;
  height: 200rpx;
}
</style>
