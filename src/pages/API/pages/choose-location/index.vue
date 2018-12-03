<template>
  <view class="container">
    <page-head title="chooseLocation"></page-head>

    <view class="page-body">
      <view class="page-section">
        <view class="page-body-info">
          <text class="page-body-text-small">当前位置信息</text>
          <block v-if="hasLocation === false">
            <text class="page-body-text">未选择位置</text>
          </block>
          <block v-if="hasLocation === true">
            <text class="page-body-text">{{locationAddress}}</text>
            <view class="page-body-text-location">
              <text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</text>
              <text>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</text>
            </view>
          </block>
        </view>
        <view class="btn-area">
          <button type="primary" @tap="chooseLocation">选择位置</button>
          <button bindtap="clear">清空</button>
        </view>
      </view>
    </view>

    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
var util = require('../../../../utils/index.js')
var formatLocation = util.formatLocation
export default {
  data() {
    return {
      hasLocation: false,
    }
  },
  methods: {
    chooseLocation: function () {
      var that = this
      mpvue.chooseLocation({
        success: function (res) {
          console.log(res)
          that.hasLocation = true,
          that.location = formatLocation(res.longitude, res.latitude),
          that.locationAddress = res.address
        }
      })
    },
    clear: function () {
      this.hasLocation = false
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'choose-location',
      path: 'pages/API/pages/choose-location/main'
    }
  },
}
</script>

<style lang="less">
.page-body-info{
  padding-bottom: 0;
  height: 440rpx;
}
</style>
