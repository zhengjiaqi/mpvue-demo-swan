<template>
  <view class="container">
    <page-head title="text"></page-head>
    <view class="page-body">
      <view class="page-section page-section-spacing">
        <view class="text-box" scroll-y="true" :scroll-top="scrollTop">
          <text>{{text}}</text>
        </view>
        <button :disabled="!canAdd" @tap="add">add line</button>
        <button :disabled="!canRemove" @tap="remove">remove line</button>
      </view>
    </view>
    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
const texts = [
  '2011年1月，微信1.0发布',
  '同年5月，微信2.0语音对讲发布',
  '10月，微信3.0新增摇一摇功能',
  '2012年3月，微信用户突破1亿',
  '4月份，微信4.0朋友圈发布',
  '同年7月，微信4.2发布公众平台',
  '2013年8月，微信5.0发布微信支付',
  '2014年9月，企业号发布',
  '同月，发布微信卡包',
  '2015年1月，微信第一条朋友圈广告',
  '2016年1月，企业微信发布',
  '2017年1月，小程序发布',
  '......'
]
export default {
  data() {
    return {
      text: '',
      canAdd: true,
      canRemove: false,
      extraLine: []
    }
  },
  methods: {
    add() {
      this.extraLine.push(texts[this.extraLine.length % 12])
        this.text = this.extraLine.join('\n')
        this.canAdd = this.extraLine.length < 12
        this.canRemove = this.extraLine.length > 0
      setTimeout(() => {
         this.scrollTop = 99999
      }, 0)
    },
    remove() {
      if (this.extraLine.length > 0) {
        this.extraLine.pop()
        this.text = this.extraLine.join('\n')
        this.canAdd = this.extraLine.length < 12
        this.canRemove = this.extraLine.length > 0
      }
      setTimeout(() => {
        this.scrollTop = 99999
      }, 0)
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'text',
      path: 'pages/component/pages/text/main'
    }
  }
}
</script>

<style>
button{
  margin: 40rpx 0;
}
.text-box{
  margin-bottom: 70rpx;
  padding: 40rpx 0;
  display: flex;
  min-height: 300rpx;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30rpx;
  color: #353535;
  line-height: 2em;
}

</style>
