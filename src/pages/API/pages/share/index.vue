<template>
  <view class="container">
    <page-head title="audio"></page-head>

    <view class="container">
      <view class="page-body">
          <button type="primary" open-type="share" hover-stop-propagation="true">点击打开分享</button>
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
  onShareAppMessage() {
    return {
        title: '小程序标题',
        content: '世界很复杂，百度更懂你',
        iconUrl: 'http://imgsrc.baidu.com/forum/pic/item/d9f9d72a6059252daecdfc36309b033b5bb5b92e.jpg',
        appid: 'appid',
        pannel: ['sinaweibo', 'weixin_friend', 'baiduhi'],
        type: 'url',
        path: '/pages/openShare/openShare',
        success(res) {
            // 分享成功
        },
        fail(err) {
            // 分享失败
        }
    };
  },
  methods: {

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
