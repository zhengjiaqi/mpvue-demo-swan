<template>
  <view class="container">
    <page-head title="audio"></page-head>

    <view class="page-body">
        <button @tap="login" type="primary" hover-stop-propagation="true">登录</button>
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
      title: 'login',
      hasLogin: false
    }
  },
  methods: {
    login(e) {
        mpvue.checkSession({
            success: res => {
                mpvue.showToast({
                    title: '您已登录'
                });
            },
            fail: err => {
                mpvue.login({
                    success: res => {
                        mpvue.showToast({
                            title: '登录成功'
                        });
                    },
                    fail: err => {
                        mpvue.showToast({
                            title: '登录失败'
                        });
                    }
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
      title: 'login',
      path: 'pages/API/pages/login/main'
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
