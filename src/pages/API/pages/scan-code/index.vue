<template>
  <view class="container">
    <page-head title="scanCode"></page-head>

    <view class="page-body">
      <view class="weui-cells__title">扫码结果</view>
      <view class="weui-cells weui-cells_after-title">
        <view class="weui-cell">
          <view class="weui-cell__bd">{{result}}</view>
        </view>
      </view>
      <view class="btn-area">
        <button type="primary" @tap="scanCode">扫一扫</button>
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
      result: ''
    }
  },
  methods: {
    scanCode: function () {
      var that = this
      mpvue.scanCode({
        success: function (res) {
          that.result = res.result
        },
        fail: function (res) {
        }
      })
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'scan-code',
      path: 'pages/API/pages/scan-code/main'
    }
  },
}
</script>

<style lang="less">
@import "../../../../common/lib/weui.less";

.weui-cell__bd{
  min-height: 48rpx;
  word-break: break-all;
}
</style>
