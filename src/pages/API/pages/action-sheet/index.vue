<template>
  <view class="container">
    <page-head title="action-sheet"></page-head>

    <view class="page-body">
      <view class="btn-area">
        <button type="default" @tap="actionSheetTap">弹出action sheet</button>
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
    actionSheetTap: function () {
      swan.showActionSheet({
        itemList: ['item1', 'item2', 'item3', 'item4'],
        success: function (e) {
          console.log(e.tapIndex)
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
      title: 'action-sheet',
      path: 'pages/API/pages/action-sheet/main'
    }
  },
}
</script>

<style lang="less">

</style>
