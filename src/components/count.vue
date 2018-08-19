<template>

  <div class="count">
    <h1>{{$route.params}}</h1>
    <drag-source  width="640px" height="480px" >
    <img src="http://pbwv2tqsz.bkt.clouddn.com/sock.jpeg" alt=""  width="100%" height="100%">
    </drag-source >
    <br>
    <drag-source  width="640px" height="480px" >
    <pdf-view-canvas></pdf-view-canvas>
    </drag-source >
      <edit-span :type-words.sync="value"  width="600px"></edit-span>
  </div>
</template>

<script>
export default {
  name: 'params-test',
  watch:{
    '$route.params.id'(val,old){
         console.log(val,old)
    }
  },
  components:{
    editSpan:()=>import('./editspan'),//双击可编辑组件
    dragSource:()=>import('./drag'),//拖拽
    pdfViewCanvas:()=>import('./pdf-view-canvas'),//pdf预览
  },
  data:function(){
    return{
    url:'static/promise.pdf',
    value:'abddcc'
    }
  },
  methods:{}
}
</script>
