<template>
  <view class="container">
    <page-head title="video"></page-head>
    <view class="page-body">
      <view class="page-section tc">
        <video id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
          @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>

        <view class="weui-cells">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">弹幕内容</view>
            </view>
            <view class="weui-cell__bd">
              <input @blur="bindInputBlur" class="weui-input" type="text" placeholder="在此处输入弹幕内容" />
            </view>
          </view>
        </view>
        <view class="btn-area">
          <button @tap="bindSendDanmu" class="page-body-button" type="primary" formType="submit">发送弹幕</button>
        </view>
      </view>
    </view>
    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
function getRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}

export default {
  data() {
    return {
      inputValue: '',
      src: '',
      danmuList: [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      }, {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
    }
  },
  mounted: function (res) {
    console.log('mounted:', res)
    this.videoContext = mpvue.createVideoContext('myVideo');
  },
  methods: {
    bindButtonTap: function () {
      var that = this;
      mpvue.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: ['front', 'back'],
        success: function (res) {
          that.src = res.tempFilePath
        }
      });
    },
    bindSendDanmu: function () {
      console.log('bindSendDanmu:', this.videoContext)
      console.log('this.videoContext.sendDanmu:', this.videoContext.sendDanmu)
      this.videoContext.sendDanmu({
        text: this.inputValue,
        color: getRandomColor()
      });
    },
    videoErrorCallback: function (e) {
      console.log('视频错误信息:');
      console.log(e.mp.detail.errMsg);
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'video',
      path: 'pages/component/pages/video/main'
    }
  }
}
</script>

<style>
@import "../../../../common/lib/weui.less";

.weui-cells{
  margin-top: 80rpx;
  text-align: left;
}
.weui-label{
  width: 5em;
}

</style>
