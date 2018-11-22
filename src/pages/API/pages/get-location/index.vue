<template>
  <view class="container">
    <page-head title="getLocation"></page-head>

    <view class="page-body">
      <view class="page-section">
        <view class="page-body-info">
          <text class="page-body-text-small">当前位置经纬度</text>
          <block v-if="hasLocation === false">
            <text class="page-body-text">未获取</text>
          </block>
          <block v-if="hasLocation === true">
            <view class="page-body-text-location">
              <text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</text>
              <text>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</text>
            </view>
          </block>
        </view>
        <view class="btn-area">
          <button type="primary" @tap="getLocation">获取位置</button>
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
var util = require('../../../../utils/index.js')
var formatLocation = util.formatLocation

export default {
  data() {
    return {
      hasLocation: false,
    }
  },
  mounted() {
    swan.authorize({
        scope: 'scope.userLocation',
        success: function (res) {
            console.log(res);
        },
        fail: function () {
            console.log('授权失败');
        }
    });
  },
  methods: {
    getLocation: function () {
      console.log('getLocation:', this)
      var that = this
      swan.getLocation({
        success: function (res) {
          console.log('res:', res)
          that.hasLocation = true,
          that.location = formatLocation(res.longitude, res.latitude)
        }
      })
      // swan.authorize({
      //   scope: 'scope.userLocation',
      //   success: function (res) {
      //     // 用户已经同意智能小程序使用定位功能
      //     swan.getLocation({
      //       success: function (res) {
      //         console.log('res:', res)
      //         that.hasLocation = true,
      //         that.location = formatLocation(res.longitude, res.latitude)
      //       }
      //     })
      //   }
      // });

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
      title: 'get-location',
      path: 'pages/API/pages/get-location/main'
    }
  },
}
</script>

<style lang="less">
.page-body-info {
  height: 250rpx;
}
.page-body-text-small {
  font-size: 24rpx;
  color: #000;
  margin-bottom: 100rpx;
}
.page-body-text-location {
  display: flex;
  font-size: 50rpx;
}
.page-body-text-location text {
  margin: 10rpx;
}

</style>
