<template>
  <view class="container">
    <page-head title="request"></page-head>

    <view class="page-body">
      <view class="page-body-wording">
        <text class="page-body-text">
          点击向服务器发起请求
        </text>
      </view>
      <view class="btn-area">
        <button @tap="makeRequest" type="primary" :loading="loading">request</button>
      </view>
    </view>

    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
const requestUrl = 'https://14592619.qcloud.la/testRequest'
const duration = 2000
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    makeRequest: function() {
      var self = this

      self.loading = true

      mpvue.request({
        url: requestUrl,
        data: {
          noncestr: Date.now()
        },
        success: function(result) {
          mpvue.showToast({
            title: '请求成功',
            icon: 'success',
            mask: true,
            duration: duration
          })
          self.loading = false
          console.log('request success', result)
        },

        fail: function({errMsg}) {
          console.log('request fail', errMsg)
          self.loading = false
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
      title: 'request',
      path: 'pages/API/pages/request/main'
    }
  },
}
</script>

<style lang="less">
</style>
