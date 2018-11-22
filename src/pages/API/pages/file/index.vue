<template>
  <view class="container">
    <page-head title="file"></page-head>

    <view class="container">
        <view class="page-body">
            <button @tap="saveFile" type="primary" hover-stop-propagation="true">下载并保存文件</button>
            <button @tap="openDocument" type="primary" hover-stop-propagation="true">打开文件</button>
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
      title: 'saveFile/openDocument',
      filePath: ''
    }
  },
  methods: {
    saveFile() {
      swan.showToast({
          title: '开始下载'
      });
      swan.downloadFile({
          header: {
              'Cache-Control': 'no-cache'
          },
          url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
          success: res => {
              swan.saveFile({
                  tempFilePath: res.tempFilePath,
                  success: res => {
                      swan.showToast({
                          title: '保存成功'
                      });
                      this.filePath = res.savedFilePath;
                  },
                  fail: err => {
                      swan.showToast({
                          title: '保存失败'
                      });
                  }
              });
          },
          fail: err => {
              swan.showToast({
                  title: '下载失败'
              });
          }
      });
    },

    openDocument() {
        swan.openDocument({
            filePath: this.filePath,
            fileType: 'pdf',
            fail: err => {
                if (!this.filePath) {
                    swan.showToast({
                        title: '请先点击保存文件'
                    });
                    return;
                }
                swan.showToast({
                    title: '打开失败'
                });
            }
        });
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'file',
      path: 'pages/API/pages/file/main'
    }
  },
}
</script>

<style lang="less">
swan-button {
    margin-bottom: .15rem;
}

</style>
