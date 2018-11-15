<template>
  <view class="container">
    <page-head title="scroll-view"></page-head>
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">
          <text>Vertical Scroll\n纵向滚动</text>
        </view>
        <view class="page-section-spacing">
          <scroll-view scroll-y="true" style="height: 300rpx;" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-into-view="toView" :scroll-top="scrollTop">
            <view id="demo1" class="scroll-view-item demo-text-1"></view>
            <view id="demo2"  class="scroll-view-item demo-text-2"></view>
            <view id="demo3" class="scroll-view-item demo-text-3"></view>
          </scroll-view>
        </view>
        <button class="" @tap="scrollToTop">回到顶部</button>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>Horizontal Scroll\n横向滚动</text>
        </view>
        <view class="page-section-spacing">
          <scroll-view class="scroll-view_H" :scroll-left="scrollLeft" scroll-x="true" @scroll="scroll" style="width: 100%">
            <view id="demo1" class="scroll-view-item_H demo-text-1"></view>
            <view id="demo2"  class="scroll-view-item_H demo-text-2"></view>
            <view id="demo3" class="scroll-view-item_H demo-text-3"></view>
          </scroll-view>
        </view>
        <button class="" @tap="scrollToLeft">回到左边</button>
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
      toView: 'green',
      scrollTop: 0,
      scrollLeft: 0
    }
  },
  methods: {
    upper(e) {
      console.log(e)
    },

    lower(e) {
      console.log(e)
    },

    scroll(e) {
      console.log(e)
    },
    scrollToTop: function(e) {
      console.log('scrollToTop1:', this.scrollTop)
      this.scrollTop = 1
      console.log('scrollToTop2', this.scrollTop)
    },
    scrollToLeft: function(e) {
      console.log('scrollToLeft1:', this.scrollLeft)
      this.scrollLeft = 1
      console.log('scrollToLeft2:', this.scrollLeft)
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'pages/component/pages/scroll-view/main'
    }
  }
}
</script>

<style>
.page-section-spacing{
  margin-top: 60rpx;
}
.scroll-view_H{
  white-space: nowrap;
}
.scroll-view-item{
  height: 300rpx;
}
.scroll-view-item_H{
  display: inline-block;
  width: 100%;
  height: 300rpx;
}

</style>
