<template>
  <div class="count">
    <h1>虚拟滚动条测试</h1>
     <scroll  width="600px" height="180px" offset-x="16px">
       <ul class="list">
      <li>01</li>
      <li>02</li>
      <li>03</li>
      <li>04</li>
      <li>05</li>
      <li>06</li>
      <li>07</li>
      <li>08</li>
      <li>09</li>
      <li>10</li>
    </ul>
     </scroll>
  </div>
</template>

<script>
export default {
  name: 'virtual-scroll',
  data:function(){
    return{
    url:'static/promise.pdf'
    }
  },
  components:{
  scroll:()=>import('./scroll')
  },
}
</script>
<style scoped>
 .list{
  list-style: none;
  width: 100%;
}
 .list li{
  list-style: none;
  width: 100%;
  margin: 5px 0;
  background-color: aquamarine
}
</style>
