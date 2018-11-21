<template>
  <view class="container">
    <page-head title="downloadFile"></page-head>

    <view class="page-body">
      <image v-if="imageSrc" :src="imageSrc" mode="center" />
      <block v-else>
        <view class="page-body-wording">
          <text class="page-body-text">
            点击按钮下载服务端示例图片
          </text>
        </view>
        <view class="btn-area">
          <button @tap="downloadImage" type="primary">下载</button>
        </view>
      </block>
    </view>

    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
const downloadExampleUrl = 'https://14592619.qcloud.la/static/weapp.jpg'

export default {
  data() {
    return {
      imageSrc: ''
    }
  },
  methods: {
    downloadImage: function() {
      var self = this

      swan.downloadFile({
        url: downloadExampleUrl,
        success: function(res) {
          console.log('downloadFile success, res is', res)
          self.imageSrc = res.tempFilePath
        },
        fail: function({errMsg}) {
          console.log('downloadFile fail, err is:', errMsg)
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
      title: 'download-file',
      path: 'pages/API/pages/download-file/main'
    }
  },
}
</script>

<style lang="less">
.page-body image {
  width: 600rpx;
  height: 600rpx;

  margin: 0 75rpx;
}

</style>
