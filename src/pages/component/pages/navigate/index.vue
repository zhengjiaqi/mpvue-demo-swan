<template>
  <view class="container">
    <page-head title="新建的页面"></page-head>


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
      title: 'navigate',
      path: 'pages/component/pages/navigate/main'
    }
  },
  onLoad: function (options) {
    console.log(options);
  }
}
</script>

<style lang="less">


</style>
