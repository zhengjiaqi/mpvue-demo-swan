<template>
  <view class="container">
    <page-head title="getSystemInfo"></page-head>

    <view class="page-body">
      <view class="page-section">
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">手机型号</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" type="text" :disabled="true" placeholder="未获取" :value="systemInfo.model"></input>
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">微信语言</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" type="text" :disabled="true" placeholder="未获取" :value="systemInfo.language"></input>
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">微信版本</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" type="text" :disabled="true" placeholder="未获取" :value="systemInfo.version"></input>
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">屏幕宽度</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" type="text" :disabled="true" placeholder="未获取" :value="systemInfo.windowWidth"></input>
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">屏幕高度</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" type="text" :disabled="true" placeholder="未获取" :value="systemInfo.windowHeight"></input>
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">DPI</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" type="text" :disabled="true" placeholder="未获取" :value="systemInfo.pixelRatio"></input>
            </view>
          </view>
        </view>
        <view class="btn-area">
          <button type="primary" @tap="getSystemInfo">获取手机系统信息</button>
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
      systemInfo: {}
    }
  },
  methods: {
    getSystemInfo: function () {
      var that = this
      mpvue.getSystemInfo({
        success: function (res) {
            that.systemInfo = res
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
      title: 'get-system-info',
      path: 'pages/API/pages/get-system-info/main'
    }
  },
}
</script>

<style lang="less">
@import "../../../../common/lib/weui.less";
</style>
