<template>
  <view class="container">
    <page-head title="makePhoneCall"></page-head>

    <view class="page-body">
      <view class="page-section">
        <view class="desc">请在下方输入电话号码</view>
        <input class="input" type="number" name="input" @input="bindInput" />
        <view class="btn-area">
          <button type="primary" @tap="makePhoneCall" :disabled="disabled">拨打</button>
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
      disabled: true
    }
  },
  methods: {
    bindInput: function(e) {
      this.inputValue = e.mp.detail.value

      if (this.inputValue.length > 0) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    makePhoneCall: function () {
      var that = this
      mpvue.makePhoneCall({
        phoneNumber: this.inputValue,
        success: function () {
          console.log("成功拨打电话")
        }
      })
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'make-phone-call',
      path: 'pages/API/pages/make-phone-call/main'
    }
  },
}
</script>

<style lang="less">
.page-section{
  width: auto;
  margin: 30rpx;
  padding: 44rpx 60rpx 60rpx;
  background-color: #fff;
  font-size: 28rpx;
}
.desc{
  margin-bottom: 20rpx;
}
.input{
  height: 119rpx;
  line-height: 119rpx;
  font-size: 78rpx;
  border-bottom: 1rpx solid #E2E2E2;
}
.btn-area{
  padding: 0;
}
</style>
