<template>
  <view class="container">
    <page-head title="input"></page-head>

    <view class="page-body">
      <view class="page-section">
        <view class="weui-cells__title">可以自动聚焦的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input :value="value" class="weui-input" auto-focus placeholder="将会获取焦点" />
          </view>
          <button class @tap="addText">添加内容</button>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">控制最大输入长度的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input value="11111" class="weui-input" maxlength="10" placeholder="最大输入长度为10" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">实时获取输入值：{{inputValue}}</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" maxlength="10" @input="bindKeyInput" placeholder="输入同步到view中" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">控制输入的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" @input="bindReplaceInput" placeholder="连续的两个1会变成2" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">控制键盘的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" @input="bindHideKeyboard" placeholder="输入123自动收起键盘" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">数字输入的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" type="number" placeholder="这是一个数字输入框" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">密码输入的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" password type="text" placeholder="这是一个密码输入框" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">带小数点的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" type="digit" placeholder="带小数点的数字键盘" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">身份证输入的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" type="idcard" placeholder="身份证输入键盘" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">控制占位符颜色的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" placeholder-style="color:#F76260" placeholder="占位符字体是红色的" />
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
      focus: false,
      inputValue: '',
      value: ''
    }
  },
  methods: {
    bindKeyInput: function (e) {
      this.inputValue = e.mp.detail.value
    },
    addText: function (e) {
      this.value = '23333333'
    },
    bindReplaceInput: function (e) {
      var value = e.mp.detail.value;
      var pos = e.mp.detail.cursor;
      var left;
      if (pos !== -1) {
        // 光标在中间
        left = e.mp.detail.value.slice(0, pos);
        // 计算光标的位置
        pos = left.replace(/11/g, '2').length;
      }

      // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
      return {
        value: value.replace(/11/g, '2'),
        cursor: pos

        // 或者直接返回字符串,光标在最后边
        // return value.replace(/11/g,'2'),
      };
    },
    bindHideKeyboard: function (e) {
      if (e.mp.detail.value === '123') {
        // 收起键盘
        mpvue.hideKeyboard();
      }
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'input',
      path: 'pages/component/pages/input/main'
    }
  },
}
</script>

<style lang="less">
@import "../../../../common/lib/weui.less";

.page-section{
  margin-bottom: 20rpx;
}

</style>
