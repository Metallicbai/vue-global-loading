<template>
  <div class="vue-global-loading-body">
    <img class="loading-img" src="./assets/loading.svg">
    <span class="loading-text" v-if="showText">{{ showText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    showText: {
      default: '加载中...'
    }
  }
}
</script>

<style lang="less" scoped>
  .vue-global-loading-body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(0, 0, 0, .7);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    line-height: 2;
    width: 200px;
    height: 200px;
    overflow: hidden;
    .loading-img {
      width: 45%;
      animation: loading 1s 0s infinite;
    }
    .loading-text{
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 321px) {
    .vue-global-loading-body {
      width: 150px;
      height: 150px;
    }
    .loading-text{
      margin-top: 8px;
    }
  }

  @keyframes loading {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
</style>
