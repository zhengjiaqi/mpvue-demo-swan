<template>
  <view class="container">
    <page-head title="navigator"></page-head>

    <view class="container">
      <view class="page-body">
          <button @tap="navigateTo" type="primary" hover-stop-propagation="true">跳转新页面</button>
          <button @tap="navigateBack" type="primary" hover-stop-propagation="true">返回上一页</button>
          <button @tap="redirectTo" type="primary" hover-stop-propagation="true">在当前页面打开</button>
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
    navigateTo(e) {
        swan.navigateTo({
            url: '../../../component/pages/navigate/main'
        });
    },

    navigateBack(e) {
        swan.navigateBack({
            data: {
                to: 'baidu'
            }
        });
    },

    redirectTo(e) {
        swan.redirectTo({
            url: '../../../component/pages/redirect/main'
        });
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
