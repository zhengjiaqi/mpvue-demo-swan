<template>
  <view class="container">
    <page-head title="modal"></page-head>

    <view class="page-body">
      <view class="btn-area">
        <button type="default" @tap="modalTap">有标题的modal</button>
        <button type="default" @tap="noTitlemodalTap">无标题的modal</button>
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
      modalHidden: true,
      modalHidden2: true
    }
  },
  methods: {
    modalTap: function(e) {
      swan.showModal({
        title: "弹窗标题",
        content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
        showCancel: false,
        confirmText: "确定"
      })
    },
    noTitlemodalTap: function(e) {
      swan.showModal({
        content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
        confirmText: "确定",
        cancelText: "取消"
      })
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'modal',
      path: 'pages/API/pages/modal/main'
    }
  },
}
</script>

<style lang="less">

</style>
