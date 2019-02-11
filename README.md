### vue全局loading组件

```javascript
import Vue from 'vue';
import vueGlobalLoading from 'vue-global-loading';

Vue.use(vueGlobalLoading);

this.$loading.showLoading({/** config*/});
this.$loading.hideLoading();
```

或者

```javascript
import vueGlobalLoading from 'vue-global-loading';
vueGlobalLoading.showLoading({/**config*/});
vueGlobalLoading.hideLoading();
```


```javascript
// config
{
  mask: true,           // 是否有遮罩层，防止背景穿透
  title: '加载中...'    // 提示文字
}
```