<template>
  <div class="wrap">
    <button @click="showLoading">点击我显示loading</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    showLoading() {
      this.$loading.showLoading();
      setTimeout(() => {
        this.$loading.hideLoading();
      }, 20000);
    }
  }
};
</script>

