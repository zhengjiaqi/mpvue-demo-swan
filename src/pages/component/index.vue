<template>
    <view class="index">
      <view class="index-hd">
        <img class="index-logo" src="./resources/kind/logo.png"/>
        <view class="index-desc">以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见小程序开发文档。</view>
      </view>
      <view class="index-bd">
        <view class="kind-list">
          <block v-for="(item, index) in list" v-bind:key="index">
            <view class="kind-list-item">
              <view :id="item.id" :class="{'kind-list-item-hd-show': item.open}" class="kind-list-item-hd" @tap="kindToggle">
                <view class="kind-list-text">{{item.name}}</view>
                <img class="kind-list-img" :src="'./resources/kind/' + item.id + '.png'"/>
              </view>
              <view :class="{'kind-list-item-bd-show': item.open}" class="kind-list-item-bd">
                <view :class="{'navigator-box-show': item.open}" class="navigator-box">
                    <block v-for="(page, index1) in item.pages" :key="page + index1">
                      <navigator :url="'pages/' + page + '/main' " class="navigator">
                        <view class="navigator-text">{{page}}</view>
                        <view class="navigator-arrow"></view>
                      </navigator>
                    </block>
                </view>
              </view>
            </view>
          </block>
        </view>
      </view>
    </view>
</template>

<script>
// Use Vuex
export default {
  data() {
    return {
      list: [{
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }]
    }
  },
  computed: {

  },
  methods: {
    kindToggle: function (e) {
      var id = e.currentTarget.id,
          list = this.list;
      for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id == id) {
          list[i].open = !list[i].open;
        } else {
          list[i].open = false;
        }
      }
      this.list = list
    }
  },
  onTabItemTap(item) {
    swan.showToast({
      title: `onTabItemTap:${item.index}`,
      duration: 1000,
    });
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  }
}
</script>

<style>
@import '../../common/index.less';
</style>
