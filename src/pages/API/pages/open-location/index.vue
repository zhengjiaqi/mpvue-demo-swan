<template>
  <view class="container">
    <page-head title="openLocation"></page-head>

    <view class="container">
      <view class="page-body">
          <view class="item">
              <view class="label">经度</view>
              <view class="value">116°27′</view>
          </view>
          <view class="item">
              <view class="label">纬度</view>
              <view class="value">40°04′</view>
          </view>
          <view class="item">
              <view class="label">位置名称</view>
              <view class="value">{{locationInfo.name}}</view>
          </view>
          <view class="item">
              <view class="label">详细位置</view>
              <view class="value">{{locationInfo.address}}</view>
          </view>
          <button class="button" @tap="openLocation" type="primary" :loading="loading" hover-stop-propagation="true">查看位置</button>
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
      title: 'openLocation',
      loading: false,
      locationInfo: {
          latitude: 40.04,
          longitude: 116.27,
          scale: 18,
          name: '百度科技园',
          address: '北京市海淀区西北旺东路10号院'
      }
    }
  },
  methods: {
    openLocation () {
        let locationInfo = this.locationInfo;
        swan.openLocation({
            latitude: locationInfo.latitude,
            longitude: locationInfo.longitude,
            scale: 18,
            name: locationInfo.name,
            address: locationInfo.address,
            success: function (res) {
                console.log('success', res);
            },
            fail : function (err) {
                swan.showToast({
                    title: '检查位置权限',
                    icon: 'none'
                })
                console.log('fail msg', err);
            }
        });
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'open-location',
      path: 'pages/API/pages/open-location/main'
    }
  },
}
</script>

<style lang="less">
.container{
    background-color: white;
}

.page-body {
    margin-top: .81rem;
    padding: 0 .17rem;
}

.page-body .item {
    height: .48rem;
    display: flex;
    // font-size: .17rem;
    color: #333;
    border-top: 1px solid #E6E6E6;
    overflow: hidden;
}

.item:nth-child(4) {
    border-bottom: 1px solid #E6E6E6;
}

.label {
    flex: .28;
    line-height: .48rem;
    float: left;
}

.value {
    flex: .72;
    line-height: .48rem;
    float: left;
}

.button {
    padding: 0;
    margin: .3rem auto 0;
}

.button:after {
    border: none;
}

</style>
