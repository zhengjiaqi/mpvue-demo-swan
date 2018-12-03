<template>
  <view class="container">
    <page-head title="audio"></page-head>

    <view class="container">
      <view class="page-body">
          <button @tap="requestPolymerPayment" type="primary" hover-stop-propagation="true">支付0.01元</button>
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
      title: 'requestPolymerPayment'
    }
  },
  methods: {
    requestPolymerPayment(e) {
        mpvue.request({
            url: 'https://mbd.baidu.com/ma/nuomi/createorder',
            success: res => {
                let data = res.data;
                if (data.errno !== 0) {
                    console.log('create order err', data);
                    return;
                }

                mpvue.requestPolymerPayment({
                    orderInfo: data.data,
                    success(res) {
                        mpvue.showToast({
                            title: '支付成功',
                            icon: 'success'
                        });
                    },
                    fail(err) {
                        mpvue.showToast({
                            title: JSON.stringify(err)
                        });
                        console.log('pay fail', err);
                    }
                });
            },
            fail: err => {
                mpvue.showToast({
                    title: '订单创建失败'
                });
                console.log('create order fail', err);
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
      title: 'payment',
      path: 'pages/API/pages/payment/main'
    }
  },
}
</script>

<style lang="less">
</style>
