<template>
  <view class="container">
    <page-head title="audio"></page-head>

    <view class="page-body">
      <view class="page-section page-section-gap" style="text-align: center;">
        <audio style="text-align: left" :src="current.src" :poster="current.poster"
          :name="current.name" :author="current.author"
          :action="audioAction" controls></audio>
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
      current: {
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        name: '此时此刻',
        author: '许巍',
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
      },
      audioAction: {
        method: 'pause'
      }
    }
  },
  methods: {

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
