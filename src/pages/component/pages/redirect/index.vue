<template>
  <view class="container">
    <page-head title="当前页"></page-head>


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
  methods: {

  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'redirect',
      path: 'pages/component/pages/redirect/main'
    }
  },
  onLoad: function (options) {
    console.log(options);
  }
}
</script>

<style lang="less">


</style>
