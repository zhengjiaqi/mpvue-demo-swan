<template>
  <view class="container">
    <page-head title="image"></page-head>

    <view class="page-body">
      <view class="page-section page-section-gap">
        <view class="page-section-title">Local Image</view>
        <view class="page-section-ctn">
          <image class="image" src="../../resources/pic/1.jpg" />
        </view>
      </view>
      <view class="page-section page-section-gap">
        <view class="page-section-title">Internet Image</view>
        <view class="page-section-ctn">
          <image class="image" src="../../resources/pic/2.jpg" />
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
      focus: false,
      inputValue: '',
      value: ''
    }
  },
  methods: {

  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'image',
      path: 'pages/component/pages/image/main'
    }
  },
}
</script>

<style lang="less">
.page-section-ctn {
  text-align: center;
}

.image {
  margin-top: 30rpx;
  width: 580rpx;
  height: 208rpx;
}

</style>
