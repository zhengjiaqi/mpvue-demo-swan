<template>
  <view class="container">
    <page-head title="createContext"></page-head>

    <view class="page-body">
      <view class="page-section">
        <canvas class="canvas-element" canvas-id="canvas"></canvas>
        <scroll-view class="canvas-buttons" scroll-y="true">
          <block v-for="method in methods" :key="method">
            <button class="canvas-button" @tap="handleMethod(method)">{{method}}</button>
          </block>
          <button class="canvas-button" @tap="toTempFilePath" type="primary">toTempFilePath</button>
        </scroll-view>
      </view>
    </view>

    <foot></foot>
  </view>
</template>

<script>
import foot from '../../../../common/foot.vue'
import head from '../../../../common/head.vue'
var example = require('./example.js')

export default {
  data() {
    return {
      methods: {},
      context: {}
    }
  },
  mounted() {
    this.context = swan.createCanvasContext('canvas')

    var methods = Object.keys(example)
    this.methods = methods

    var that = this
    methods.forEach(function (method) {
      that[method] = function () {
        example[method](that.context)
        that.context.draw()
      }
    })
  },
  methods: {
    handleMethod: function(method) {
      this[method]();
    },
    toTempFilePath: function () {
      swan.canvasToTempFilePath({
        canvasId: 'canvas',
        success: function (res) {
          console.log(res)
        },
        fail: function (res) {
          console.log(res)
        }
      })
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'canvas',
      path: 'pages/API/pages/canvas/main'
    }
  },
}
</script>

<style lang="less">
.canvas-element-wrapper {
  display: block;
  margin-bottom: 100rpx;
}
.canvas-element {
  width: 100%;
  height: 500rpx;
  background-color: #ffffff;
}
.canvas-buttons {
  padding: 30rpx 50rpx 10rpx;
  width: 100%;
  height: 360rpx;
  box-sizing: border-box;
}
.canvas-button {
  float: left;
  line-height: 2;
  width: 300rpx;
  margin: 15rpx 12rpx;
}

</style>
