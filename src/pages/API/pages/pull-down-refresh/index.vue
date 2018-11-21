<template>
  <view class="container">
    <page-head title="set-navigation-bar-title"></page-head>

   <view class="container">
      <view class="page-body">
          <view class="page-info">下拉页面即可刷新</view>
          <button @tap="stopPullDownRefresh" hover-stop-propagation="true">停止刷新</button>
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
    stopPullDownRefresh() {
        swan.stopPullDownRefresh();
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'pull-down-refresh',
      path: 'pages/API/pages/pull-down-refresh/main'
    }
  },
}
</script>

<style lang="less">
.page-body {
    margin-top: 0;
}

.page-info {
    height: 83px;
    line-height: 83px;
    background-color: #fff;
    color: #000;
    font-size: 18px;
    text-align: center;
}

swan-button {
    margin-top: .15rem;
}
</style>
