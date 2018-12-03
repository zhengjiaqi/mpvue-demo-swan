<template>
  <view class="container">
    <page-head title="navigation-bar-loading"></page-head>

    <view class="container">
      <view class="page-body">
          <button @tap="showNavigationBarLoading" type="primary" hover-stop-propagation="true">显示加载动画</button>
          <button @tap="hideNavigationBarLoading" type="primary" hover-stop-propagation="true">隐藏加载动画</button>
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
  methods: {
    showNavigationBarLoading(e) {
        mpvue.showNavigationBarLoading();
    },

    hideNavigationBarLoading(e) {
        mpvue.hideNavigationBarLoading();
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'navigation-bar-loading',
      path: 'pages/API/pages/navigation-bar-loading/main'
    }
  },
}
</script>

<style lang="less">
</style>
