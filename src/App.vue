<template>
  <div id="app">
    <el-button type="success">按钮</el-button>
    <img src="./assets/logo.png">
    <el-button type="success" @click="test('001')">传递参数A</el-button>
    <el-button type="danger" @click="test('002')">传递参数B</el-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
     test(id){
       this.$router.push({
         name:'count',
         params:{id}
       })
     }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
