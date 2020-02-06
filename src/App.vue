<template>
  <div id="app">
    <div class="title">
      <center>app.vue主页面
        </center>
    
        </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}

.title{
  background-color: yellowgreen;
  height: 100px;
}
</style>
