<template>
  <view class="container">
    <page-head title="toast"></page-head>

    <view class="page-body">
      <view class="btn-area">
        <view class="body-view">
          <button type="default" @tap="toast1Tap">点击弹出默认toast</button>
        </view>
        <view class="body-view">
          <button type="default" @tap="toast2Tap">点击弹出设置duration的toast</button>
        </view>
        <view class="body-view">
          <button type="default" @tap="toast3Tap">点击弹出显示loading的toast</button>
        </view>
        <view class="body-view">
          <button type="default" @tap="hideToast">点击隐藏toast</button>
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
      title: 'openShare'
    }
  },
  methods: {
    toast1Tap: function () {
      mpvue.showToast({
        title: "默认"
      })
    },
    toast2Tap: function () {
      mpvue.showToast({
        title: "duration 3000",
        duration: 3000
      })
    },
    toast3Tap: function () {
      mpvue.showToast({
        title: "loading",
        icon: "loading",
        duration: 5000
      })
    },
    hideToast: function () {
      mpvue.hideToast()
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'toast',
      path: 'pages/API/pages/toast/main'
    }
  },
}
</script>

<style lang="less">
</style>
