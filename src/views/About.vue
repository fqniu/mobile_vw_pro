<template>
  <div class="about">
    <h1 class="fs32 wrapper">你好，世界</h1>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="less" scope>
.fs32 {
  font-size: 32px;
}
.wrapper {
  width: 100px;
  height: 100px;
  color: #fff;
  background: #ccc;
}
.content {
  width: 750px;
  height: 200px;
  background: pink;
  margin-top: 50px;
}
</style>
