<template>
  <view class="container">
    <page-head title="radio"></page-head>

    <view class="page-body">
      <view class="page-section page-section-gap">
        <view class="page-section-title">默认样式</view>
        <label class="radio">
          <radio value="r1" checked="true" />选中
        </label>
        <label class="radio">
          <radio value="r2" />未选中
        </label>
      </view>


      <view class="page-section">
        <view class="page-section-title">推荐展示样式</view>
        <view class="weui-cells weui-cells_after-title">
          <radio-group @change="radioChange">
            <label class="weui-cell weui-check__label" v-for="item in items" :key="item.value">

              <view class="weui-cell__hd">
                <radio :value="item.value" />
              </view>
              <view class="weui-cell__bd">{{item.name}}</view>
            </label>
          </radio-group>
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
      items: [
        {value: 'USA', name: '美国'},
        {value: 'CHN', name: '中国', checked: 'true'},
        {value: 'BRA', name: '巴西'},
        {value: 'JPN', name: '日本'},
        {value: 'ENG', name: '英国'},
        {value: 'FRA', name: '法国'},
      ]
    }
  },
  methods: {
    radioChange: function (e) {
      console.log('radio发生change事件，携带value值为：', e.mp.detail.value);

      var items = this.items;
      for (var i = 0, len = items.length; i < len; ++i) {
        items[i].checked = items[i].value == e.mp.detail.value;
      }

      this.items = items
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'radio',
      path: 'pages/component/pages/radio/main'
    }
  },
}
</script>

<style lang="less">
@import "../../../../common/lib/weui.less";

.radio {
  margin-right: 20rpx;
}

</style>
