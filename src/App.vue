<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

body {
  margin: 0;
}
.el-popover__reference-wrapper .el-button span{
  display: flex;
}
.el-popover__reference-wrapper .el-button span i{
  margin-left: 16px;
}
</style>
