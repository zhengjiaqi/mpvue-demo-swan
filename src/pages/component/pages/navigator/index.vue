<template>
  <view class="container">
    <page-head title="label"></page-head>

    <view class="page-body">
      <view class="btn-area">
        <navigator url="../navigate/main?title=navigate" hover-class="navigator-hover">
          <button type="default">跳转到新页面</button>
        </navigator>
        <navigator url="../redirect/main?title=redirect" redirect hover-class="other-navigator-hover">
          <button type="default">在当前页打开</button>
        </navigator>
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
  methods: {

  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'navigator',
      path: 'pages/component/pages/navigator/main'
    }
  },
}
</script>

<style lang="less">
.navigator-hover button{
  background-color: #DEDEDE;
}
.other-navigator-hover button{
  background-color: #DEDEDE;
}

</style>
