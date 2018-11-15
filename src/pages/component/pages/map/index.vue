<template>
  <view class="container">
    <page-head title="map"></page-head>

    <view class="page-body">
      <view class="page-section page-section-gap">
        <map style="width: 100%; height: 300px;"
          :latitude="latitude"
          :longitude="longitude" :markers="markers" :covers="covers">
        </map>
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
      latitude: 23.099994,
      longitude: 113.324520,
      markers: [{
        latitude: 23.099994,
        longitude: 113.324520,
        name: 'T.I.T 创意园'
      }],
      covers: [{
        latitude: 23.099994,
        longitude: 113.344520,
        iconPath: '/image/location.png'
      }, {
        latitude: 23.099994,
        longitude: 113.304520,
        iconPath: '/image/location.png'
      }]
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
      title: 'map',
      path: 'pages/component/pages/map/main'
    }
  },
}
</script>

<style lang="less">

</style>
