<template>
  <view class="container">
    <page-head title="textarea"></page-head>
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">输入区域高度自适应，不会出现滚动条</view>
        <view class="textarea-wrp">
          <textarea @blur="bindTextAreaBlur" auto-height :value="value" />
        </view>
        <button class @tap="addText">添加内容</button>
      </view>

      <view class="page-section">
        <view class="page-section-title">这是一个可以自动聚焦的textarea</view>
        <view class="textarea-wrp">
          <textarea auto-focus="true" style="height: 3em" />
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
      value: ''
    }
  },
  methods: {
    bindTextAreaBlur: function (e) {
      console.log(e.mp.detail.value);
    },
    addText: function (e) {
      this.value = '2333333'
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'textarea',
      path: 'pages/component/pages/textarea/main'
    }
  }
}
</script>

<style>
textarea {
    width: 700rpx;
    padding: 25rpx 0;
}
.textarea-wrp {
    padding: 0 25rpx;
    background-color: #fff;
}

</style>
