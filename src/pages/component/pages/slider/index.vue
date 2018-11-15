<template>
  <view class="container">
    <page-head title="slider"></page-head>

    <view class="page-body">
      <view class="page-section page-section-gap">
        <view class="page-section-title">设置step</view>
        <view class="body-view">
          <slider value="60" @change="slider2change" step="5" />
        </view>
      </view>

      <view class="page-section page-section-gap">
        <view class="page-section-title">显示当前value</view>
        <view class="body-view">
          <slider value="50" @change="slider3change" show-value />
        </view>
      </view>

      <view class="page-section page-section-gap">
        <view class="page-section-title">设置最小/最大值</view>
        <view class="body-view">
          <slider value="100" @change="slider4change" min="50" max="200" show-value />
        </view>
      </view>
    </view>

    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
var pageData = {
  data() {
    return {
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
      title: 'slider',
      path: 'pages/component/pages/slider/main'
    }
  }
}
for (var i = 1; i < 5; ++i) {
  (function (index) {
    pageData.methods['slider' + index + 'change'] = function(e) {
      console.log('slider' + index + '发生change事件，携带值为', e.mp.detail.value)
    }
  })(i)
}
export default pageData
</script>

<style>

</style>
