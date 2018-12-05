<template>
  <view class="container">
    <page-head title="audio"></page-head>

    <view class="container">
      <view class="page-body">
          <button @tap="getUserInfo" type="primary" hover-stop-propagation="true">获取用户信息</button>
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
      title: 'getUserInfo'
    }
  },
  methods: {
    getUserInfo(e) {
        mpvue.getUserInfo({
            success: res => {
                mpvue.showModal({
                    title: '获取成功',
                    content: JSON.stringfy(res)
                });
            },
            fail: err => {
                mpvue.showToast({
                    title: '获取失败'
                });
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
      title: 'get-user-info',
      path: 'pages/API/pages/get-user-info/main'
    }
  },
}
</script>

<style lang="less">
.page-body-info {
    text-align: center;
    font-size: .6rem;
}
</style>
