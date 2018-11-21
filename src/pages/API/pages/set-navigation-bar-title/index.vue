<template>
  <view class="container">
    <page-head title="set-navigation-bar-title"></page-head>

    <view class="container">
      <view class="page-body">
          <input @input="titleInput" class="input" type="text" placeholder="请输入页面标题并点击设置即可"/>
          <button @tap="setNavigationBarTitle" type="primary" hover-stop-propagation="true">设置</button>
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
      title: 'setNavigationBarTitle',
      newTitle: ''
    }
  },
  methods: {
    titleInput(e) {
      this.newTitle = e.mp.detail.value;
    },

    setNavigationBarTitle(e) {
        let newTitle = this.newTitle;
        if (!newTitle) {
            swan.showToast({
                title: '请输入标题'
            });
            return;
        }
        swan.setNavigationBarTitle({
            title: this.newTitle
        });
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'share',
      path: 'pages/API/pages/share/main'
    }
  },
}
</script>

<style lang="less">
</style>
