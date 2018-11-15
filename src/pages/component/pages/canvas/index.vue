<template>
  <view class="container">
    <page-head title="canvas"></page-head>

    <view class="page-body">
      <view class="page-body-wrapper">
        <canvas canvas-id="canvas" class="canvas"></canvas>
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
  mounted: function () {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    };
    this.drawBall();
    this.interval = setInterval(() => {
        this.drawBall()
    }, 17);
  },
  methods: {
    drawBall: function () {
      var p = this.position;
      p.x += p.vx;
      p.y += p.vy;
      if (p.x >= 300) {
        p.vx = -2;
      }
      if (p.x <= 7) {
        p.vx = 2;
      }
      if (p.y >= 300) {
        p.vy = -2;
      }
      if (p.y <= 7) {
        p.vy = 2;
      }

      var context = swan.createCanvasContext('canvas');

      function ball(x, y) {
        context.beginPath(0);
        context.arc(x, y, 5, 0, Math.PI * 2);
        context.setFillStyle('#1aad19');
        context.setStrokeStyle('rgba(1,1,1,0)');
        context.fill();
        context.stroke();
      }

      ball(p.x, 150);
      ball(150, p.y);
      ball(300 - p.x, 150);
      ball(150, 300 - p.y);
      ball(p.x, p.y);
      ball(300 - p.x, 300 - p.y);
      ball(p.x, 300 - p.y);
      ball(300 - p.x, p.y);

      context.draw();
    },
    onUnload: function () {
      clearInterval(this.interval);
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'audio',
      path: 'pages/component/pages/audio/main'
    }
  },
}
</script>

<style lang="less">

</style>
