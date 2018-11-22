<template>
  <view class="container">
    <page-head title="uploadFile"></page-head>

    <view class="container">
        <view class="page-body">
            <input @input="keyInput" class="input" type="text" placeholder="请输入key"/>
            <input @input="valueInput" class="input" type="text" placeholder="请输入value"/>
            <button @tap="setStorage" type="primary" hover-stop-propagation="true">存储数据</button>
            <button @tap="getStorage" type="primary" hover-stop-propagation="true">读取数据</button>
            <button @tap="clearStorage" hover-stop-propagation="true">清理数据</button>
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
      title: 'get/set/clearStorage',
      key: '',
      value: '',
      keyValue: ''
    }
  },
  methods: {
    keyInput(e) {
        this.key =  e.mp.detail.value;
    },

    valueInput(e) {
        this.value = e.mp.detail.value;
    },

    setStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        swan.setStorage({
            key,
            data: this.value,
            success: res => {
                swan.showToast({
                    title: '存储数据成功'
                });
            },
            fail: err => {
                swan.showToast({
                    title: '存储数据失败'
                });
            }
        });
    },

    getStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        swan.getStorage({
            key,
            success: res => {
                swan.showModal({
                    title: '读取数据成功',
                    content: JSON.stringify(res),
                    showCancel: false
                });
            },
            fail: err => {
                swan.showToast({
                    title: '读取数据失败'
                });
            }
        });
    },

    clearStorage() {
        swan.clearStorageSync();
        console.log('why', this.keyValue);
        this.keyValue = '';
        swan.showToast({
            title: '清除数据成功'
        });
    },

    hasKey() {
        let key = this.key;
        if (key) {
            return key;
        }
        swan.showToast({
            title: 'key不能为空'
        });
    }
  },
  components: {
    foot,
    'page-head': head
  },
  onShareAppMessage() {
    return {
      title: 'storage',
      path: 'pages/API/pages/storage/main'
    }
  },
}
</script>

<style lang="less">
swan-button {
    margin-top: .15rem;
}

</style>
