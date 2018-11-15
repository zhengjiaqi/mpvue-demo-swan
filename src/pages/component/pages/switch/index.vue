<template>
  <view class="container">
    <page-head title="switch"></page-head>

    <view class="page-body">
      <view class="page-section page-section-gap">
        <view class="page-section-title">默认样式</view>
        <view class="body-view">
          <switch checked @change="switch1Change" />
          <switch @change="switch2Change" />
        </view>
      </view>

      <view class="page-section">
        <view class="page-section-title">推荐展示样式</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_switch">
            <view class="weui-cell__bd">开启中</view>
            <view class="weui-cell__ft">
              <switch checked />
            </view>
          </view>
          <view class="weui-cell weui-cell_switch">
            <view class="weui-cell__bd">关闭</view>
            <view class="weui-cell__ft">
              <switch />
            </view>
          </view>
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
    }
  },
  methods: {
    switch1Change: function (e) {
      console.log('switch1 发生 change 事件，携带值为', e.mp.detail.checked);
    },
    switch2Change: function (e) {
      console.log('switch2 发生 change 事件，携带值为', e.mp.detail.checked);
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'switch',
      path: 'pages/component/pages/switch/mian'
    }
  }
}
</script>

<style>
@import "../../../../common/lib/weui.less";

</style>
