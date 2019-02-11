<template>
  <div class="vue-global-loading" v-show="show">
    <div class="vue-global-loading-mask" :style="{'z-index': zIndex}" v-show="config.mask"></div>
    <component :is="useComponent" :style="{'z-index': zIndex + 1}" :showText="config.title"></component>
  </div>
</template>


<script>
import loading from './loading';
const defaultConfig = {
  mask: true,
  title: '加载中...'
};
export default {
  data() {
    return {
      show: false,
      count: 0,
      baseCount: 2019,
      config: {...defaultConfig}
    }
  },
  computed: {
    zIndex() {
      return this.baseCount + this.count;
    },
    useComponent() {
      return loading;
    }
  },
  methods: {
    showLoading(config = {}) {
      if (typeof config !== 'object' || config === null) {
        throw 'config request object!'
      }
      this.config = {...this.config, ...config};
      console.log(this.config);
      this.count++;
      this.show = true;
    },
    hideLoading() {
      this.show = false;
      this.resetData();
    },
    resetData() {
      this.config = {...defaultConfig};
    }
  }
}
</script>
<style lang="less" scoped>
  .vue-global-loading-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
  }
</style>
