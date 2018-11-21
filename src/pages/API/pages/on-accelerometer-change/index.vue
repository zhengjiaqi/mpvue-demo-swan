<template>
  <view class="container">
    <page-head title="onAccelerometerChange"></page-head>

    <view class="page-body">
      <view class="page-section page-section_center">
        <text class="page-body-text">倾斜手机即可移动下方小球</text>
        <view class="page-body-canvas">
          <canvas class="page-body-ball" :show="true" canvas-id="big-ball"></canvas>
          <canvas class="page-body-ball" :show="true" canvas-id="small-ball"></canvas>
        </view>
        <view class="page-body-xyz">
          <text class="page-body-title">X: {{x}}</text>
          <text class="page-body-title">Y: {{y}}</text>
          <text class="page-body-title">Z: {{z}}</text>
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
      x: 0,
      y: 0,
      z: 0,
      position: {}
    }
  },
  mounted: function () {
    this.drawBigBall()
    var that = this

    this.position =  {
      x: 151,
      y: 151,
      vx: 0,
      vy: 0,
      ax: 0,
      ay: 0
    }
    swan.onAccelerometerChange(function (res) {
      that.x = res.x.toFixed(2),
      that.y = res.y.toFixed(2),
      that.z = res.z.toFixed(2)
      that.position.ax = Math.sin(res.x * Math.PI / 2)
      that.position.ay = -Math.sin(res.y * Math.PI / 2)
      //that.drawSmallBall()
    })

    this.interval = setInterval(function () {
      that.drawSmallBall()
    }, 17)

  },
  destroyed: function () {
    clearInterval(this.interval)
  },
  methods: {
    drawBigBall: function () {
      var context = swan.createCanvasContext('big-ball')
      context.beginPath(0)
      context.arc(151, 151, 140, 0, Math.PI * 2)
      context.setFillStyle('#ffffff')
      context.setStrokeStyle('#aaaaaa')
      context.fill()
      context.draw()
    },
    drawSmallBall: function () {
      var p = this.position
      var strokeStyle = 'rgba(1,1,1,0)'

      p.x = p.x + p.vx
      p.y = p.y + p.vy
      p.vx = p.vx + p.ax
      p.vy = p.vy + p.ay

      if (Math.sqrt(Math.pow(Math.abs(p.x) - 151, 2) + Math.pow(Math.abs(p.y) - 151, 2)) >= 115) {
        if (p.x > 151 && p.vx > 0) {
          p.vx = 0
        }
        if (p.x < 151 && p.vx < 0) {
          p.vx = 0
        }
        if (p.y > 151 && p.vy > 0) {
          p.vy = 0
        }
        if (p.y < 151 && p.vy < 0) {
          p.vy = 0
        }
        strokeStyle = '#ff0000'
      }

      var context = swan.createCanvasContext('small-ball')
      context.beginPath(0)
      context.arc(p.x, p.y, 15, 0, Math.PI * 2)
      context.setFillStyle('#1aad19')
      context.setStrokeStyle(strokeStyle)
      context.fill()
      context.draw()

    },
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'on-accelerometer-change',
      path: 'pages/API/pages/on-accelerometer-change/main'
    }
  },
}
</script>

<style lang="less">
.page-body-xyz {
  display: flex;
  justify-content: space-between;
  width: 700rpx;
  margin-top: 90rpx;
  box-sizing: border-box;
  text-align: center;
}
.page-body-canvas {
  margin-top: 30rpx;
  width: 302px;
  height: 302px;
  position: relative;
}
.page-body-ball {
  position: absolute;
  top: 0;
  left: 0;
  width: 302px;
  height: 302px;
}
.page-body-title {
  margin-bottom: 0;
  font-size: 32rpx;
  width: 250rpx;
}

</style>
