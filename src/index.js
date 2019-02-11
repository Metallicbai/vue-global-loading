import Vue from 'vue';
import vueGloabalLoading from './vueGlobalLoading.vue';

const globalLoading = Vue.extend(vueGloabalLoading);
let isInit = false;
let el;
let loading;
let isLoading = false;

const install = () => {
  el = document.createElement('div');
  document.body.appendChild(el);
  isInit = true;
  loading = new globalLoading().$mount(el);
};
function showLoading(...arg) {
  if (!isInit) {
    install();
  }
  loading.showLoading(...arg);
  isLoading = true;
};
function hideLoading() {
  if (!isLoading) return;
  loading.hideLoading();
  isLoading = false;
};

const API = {
  showLoading,
  hideLoading
};
const loadingExport = {
  ...API,
  install(Vue) {
    Vue.prototype.$loading = API;
  }
};
if (window.vue && typeof window.vue === 'onject') {
  window.vue.use(loadingExport);
}
export default loadingExport;

