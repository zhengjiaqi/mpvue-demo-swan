<template>
  <view class="container">
    <page-head title="picker"></page-head>

    <view class="page-body">
      <view class="page-section">
        <view class="weui-cells__title">地区选择器</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">当前选择</view>
            </view>
            <view class="weui-cell__bd">
              <picker @change="bindPickerChange" :value="index" :range="array">
                <view class="weui-input">{{array[index]}}</view>
              </picker>
            </view>
          </view>
        </view>

        <view class="weui-cells__title">时间选择器</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">当前选择</view>
            </view>
            <view class="weui-cell__bd">
              <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
                <view class="weui-input">{{time}}</view>
              </picker>
            </view>
          </view>
        </view>

        <view class="weui-cells__title">日期选择器</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">当前选择</view>
            </view>
            <view class="weui-cell__bd">
              <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
                <view class="weui-input">{{date}}</view>
              </picker>
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
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}
export default {
  data() {
    return {
      array: ['中国', '美国', '巴西', '日本'],
      index: 0,
      date: '2016-09-01',
      time: '12:01',

      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1]
    }
  },
  methods: {
    bindChange: function (e) {
      const val = e.mp.detail.value;
      this.setData({
        year: this.years[val[0]],
        month: this.months[val[1]],
        day: this.days[val[2]]
      });
    },
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.index = e.mp.detail.value
    },
    bindDateChange: function (e) {
      this.date = e.mp.detail.value
    },
    bindTimeChange: function (e) {
      this.time = e.mp.detail.value

    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'picker',
      path: 'pages/component/pages/picker/main'
    }
  },
}
</script>

<style lang="less">
@import "../../../../common/lib/weui.less";

.picker{
  padding: 19rpx 26rpx;
  background-color: #FFFFFF;
}

</style>
