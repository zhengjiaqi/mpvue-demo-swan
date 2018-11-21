<template>
  <view class="container">
    <page-head title="previewImage"></page-head>

    <view class="page-body">
      <form>
        <view class="page-section">

          <view class="weui-cells weui-cells_after-title">
            <view class="weui-cell weui-cell_input">
              <view class="weui-cell__hd">
                <view class="weui-label">图片来源</view>
              </view>
              <view class="weui-cell__bd">
                <picker :range="sourceType" @change="sourceTypeChange" :value="sourceTypeIndex" mode="selector">
                  <view class="weui-input">{{sourceType[sourceTypeIndex]}}</view>
                </picker>
              </view>
            </view>

            <view class="weui-cell weui-cell_input">
              <view class="weui-cell__hd">
                <view class="weui-label">图片质量</view>
              </view>
              <view class="weui-cell__bd">
                <picker :range="sizeType" @change="sizeTypeChange" :value="sizeTypeIndex" mode="selector">
                  <view class="weui-input">{{sizeType[sizeTypeIndex]}}</view>
                </picker>
              </view>
            </view>
            <view class="weui-cell weui-cell_input">
              <view class="weui-cell__hd">
                <view class="weui-label">数量限制</view>
              </view>
              <view class="weui-cell__bd">
                <picker :range="count" @change="countChange" :value="countIndex" mode="selector">
                  <view class="weui-input">{{count[countIndex]}}</view>
                </picker>
              </view>
            </view>
          </view>

          <view class="weui-cells">
            <view class="weui-cell">
              <view class="weui-cell__bd">
                <view class="weui-uploader">
                  <view class="weui-uploader__hd">
                    <view class="weui-uploader__title">点击可预览选好的图片</view>
                    <view class="weui-uploader__info">{{imageList.length}}/{{count[countIndex]}}</view>
                  </view>
                  <view class="weui-uploader__bd">
                    <view class="weui-uploader__files">
                      <block v-for="image in imageList" :key="image">
                        <view class="weui-uploader__file">
                          <image class="weui-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
                        </view>
                      </block>
                    </view>
                    <view class="weui-uploader__input-box">
                      <view class="weui-uploader__input" @tap="chooseImage"></view>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>

        </view>
      </form>
    </view>

    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]
var sizeType = [ ['compressed'], ['original'], ['compressed', 'original'] ]
export default {
  data() {
    return {
      imageList: [],
      sourceTypeIndex: 2,
      sourceType: ['拍照', '相册', '拍照或相册'],

      sizeTypeIndex: 2,
      sizeType: ['压缩', '原图', '压缩或原图'],

      countIndex: 8,
      count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    sourceTypeChange: function (e) {
      this.sourceTypeIndex = e.mp.detail.value
    },
    sizeTypeChange: function (e) {
      this.sizeTypeIndex = e.mp.detail.value
    },
    countChange: function (e) {
      this.countIndex =  e.mp.detail.value
    },
    chooseImage: function () {
      var that = this
      swan.chooseImage({
        sourceType: sourceType[this.sourceTypeIndex],
        sizeType: sizeType[this.sizeTypeIndex],
        count: this.count[this.countIndex],
        success: function (res) {
          console.log(res)
          that.imageList = res.tempFilePaths
        }
      })
    },
    previewImage: function (e) {
      var current = e.mp.target.dataset.src
      swan.previewImage({
        current: current,
        urls: this.imageList
      })
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'image',
      path: 'pages/API/pages/image/main'
    }
  },
}
</script>

<style lang="less">
@import "../../../../common/lib/weui.less";
</style>
