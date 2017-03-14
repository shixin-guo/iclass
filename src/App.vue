<template>
  <div id="app">
    <globalNav></globalNav>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import globalNav from './components/globalNav';


export default {
  name: 'app',
  components: {
    globalNav,
  },
};
</script>

<style>
@import url(./assets/css/global.css);
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
