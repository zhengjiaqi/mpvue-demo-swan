<template>
  <view class="container">
    <page-head title="uploadFile"></page-head>

    <view class="page-body">
      <view class="page-section">
        <view class="page-body-info">

          <block v-if="imageSrc">
            <image :src="imageSrc" class="image" mode="aspectFit"></image>
          </block>

          <block wx:else>
            <view class="image-plus image-plus-nb" @tap="chooseImage">
              <view class="image-plus-horizontal"></view>
              <view class="image-plus-vertical"></view>
            </view>
            <view class="image-plus-text">选择图片</view>
          </block>

        </view>
      </view>
    </view>

    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
const uploadFileUrl = 'https://14592619.qcloud.la/upload'
export default {
  data() {
    return {
      imageSrc: ''
    }
  },
  methods: {
    chooseImage: function() {
      var self = this

      mpvue.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album'],
        success: function(res) {
          console.log('chooseImage success, temp path is', res.tempFilePaths[0])

          var imageSrc = res.tempFilePaths[0]

          mpvue.uploadFile({
            url: uploadFileUrl,
            filePath: imageSrc,
            name: 'data',
            success: function(res) {
              console.log('uploadImage success, res is:', res)

              mpvue.showToast({
                title: '上传成功',
                icon: 'success',
                duration: 1000
              })

              self.imageSrc = imageSrc
            },
            fail: function({errMsg}) {
              console.log('uploadImage fail, errMsg is', errMsg)
            }
          })

        },
        fail: function({errMsg}) {
          console.log('chooseImage fail, err is', errMsg)
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
      title: 'upload-file',
      path: 'pages/API/pages/upload-file/main'
    }
  },
}
</script>

<style lang="less">
.image {
  width: 100%;
  height: 360rpx;
}
.page-body-info {
  display: flex;
  box-sizing: border-box;
  padding: 30rpx;
  height: 420rpx;
  border-top: 1rpx solid #D9D9D9;
  border-bottom: 1rpx solid #D9D9D9;
  align-items: center;
  justify-content: center;
}

</style>
