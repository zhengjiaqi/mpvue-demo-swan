<template>
  <view class="container">
    <page-head title="swiper"></page-head>
    <view class="page-body">
      <view class="page-section page-section-spacing swiper">
        <swiper :indicator-dots="indicatorDots"
          :autoplay="autoplay" :interval="interval" :duration="duration">
          <block s-for="item, index in background" :key="index">
            <swiper-item>
              <view :class="[item]" class="swiper-item"></view>
            </swiper-item>
          </block>
        </swiper>
      </view>
      <view class="page-section" style="margin-top: 40rpx;margin-bottom: 0;">
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_switch">
            <view class="weui-cell__bd">指示点</view>
            <view class="weui-cell__ft">
              <switch :checked="indicatorDots" @change="changeIndicatorDots" />
            </view>
          </view>
          <view class="weui-cell weui-cell_switch">
            <view class="weui-cell__bd">自动播放</view>
            <view class="weui-cell__ft">
              <switch :checked="autoplay" @change="changeAutoplay" />
            </view>
          </view>
        </view>
      </view>

      <view class="page-section page-section-spacing">
        <view class="page-section-title">
          <text>幻灯片切换时长(ms)</text>
          <text class="info">{{duration}}</text>
        </view>
        <slider @change="durationChange" :value="duration" min="500" max="2000"/>
        <view class="page-section-title">
          <text>自动播放间隔时长(ms)</text>
          <text class="info">{{interval}}</text>
        </view>
        <slider @change="intervalChange" :value="interval" min="2000" max="10000"/>
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
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
    }
  },
  methods: {
    changeIndicatorDots() {
      this.indicatorDots = !this.indicatorDots
    },

    changeAutoplay() {
      this.autoplay = !this.autoplay
    },

    intervalChange(e) {
      this.interval = e.mp.detail.value
    },

    durationChange(e) {
      this.duration = e.mp.detail.value
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'pages/component/pages/swiper/mian'
    }
  }
}
</script>

<style>
button{
  margin-bottom: 30rpx;
}
button:last-child{
  margin-bottom: 0;
}
.page-section-title{
  padding: 0;
}
.swiper-item{
  display: block;
  height: 150px;
}
.page-section-title{
  margin-top: 60rpx;
  position: relative;
}
.info{
  position: absolute;
  right: 0;
  color: #353535;
  font-size: 30rpx;
}
.page-foot{
  margin-top: 50rpx;
}

</style>
