<template>
  <view class="container">
    <page-head title="getNetworkType"></page-head>

    <view class="page-body">
      <view class="page-section">
        <view class="page-body-info">
          <view class="page-body-title">网络状态</view>
          <block v-if="hasNetworkType === false">
            <text class="page-body-text">未获取</text>
            <text class="page-body-text">点击绿色按钮可获取网络状态</text>
          </block>
          <block v-if="hasNetworkType === true">
            <text class="page-body-text-network-type">{{networkType}}</text>
          </block>
        </view>
        <view class="btn-area">
          <button type="primary" @tap="getNetworkType">获取手机网络状态</button>
          <button @tap="clear">清空</button>
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
      hasNetworkType: false,
      networkType: ''
    }
  },
  methods: {
    getNetworkType: function () {
      var that = this
      mpvue.getNetworkType({
        success: function (res) {
          console.log(res)
          that.hasNetworkType = true;
          that.networkType = res.subtype || res.networkType
        }
      })
    },
    clear: function () {
      this.hasNetworkType = false;
      this.networkType = ''
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'get-network-type',
      path: 'pages/API/pages/get-network-type/main'
    }
  },
}
</script>

<style lang="less">
.page-body-info {
  height: 200rpx;
}
.page-body-text-network-type {
  font-size: 80rpx;
  font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
}

</style>
