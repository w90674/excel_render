<template>
  <div class="scroll-wrapper" @mouseenter="showScroll=true" @mouseleave="showScroll=false" :style="{width}">
      <div class="scroll-container" ref="scroll-container" :style="{height:height}">
        <slot class="slot">
           插入需要滚动内容
        </slot>
      </div>
      <!-- 虚拟滚动条（Y轴） -->
      <div :class="['vertical-bar',{active:showScroll=true},{'scroll-bar-style':true}]"  
      ref="vertical-bar" 
      :style="{height:height,transform:`translate(${offsetX},0) scale(${sizeX},${sizeY})`,background:barStyle}"
       @scroll="handleScroll">
        <div class="virtual-content" ref="virtual-content"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'virtual-scroll',
  props:{
    width:{
      type:String,
      default:'500px',
    },
    height:{
       type:String,
       default:'200px',
    },
    offsetX:{
      type:String,
      default:'0px',
    },
    sizeX:{
      type:Number,
      default:1,
    },
    sizeY:{
      type:Number,
      default:1,
    }
  },
  data:function(){
     return{
       showScroll:false,
     }
  },
  mounted(){
    this.$nextTick(()=>{
      this.$refs['virtual-content'].style.height=this.$refs['scroll-container'].scrollHeight+'px'
    })
  },
  methods:{
    handleScroll(){
    this.$refs['scroll-container'].scrollTop=this.$refs['vertical-bar'].scrollTop
    }
  },
}
</script>
<style scoped>
.scroll-wrapper{
  position: relative;
}
.scroll-container{
  width: 100%;
  overflow:hidden;
}
.vertical-bar{
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  overflow-x: hidden;
  overflow-y: auto;
  opacity: 0;
  transition: opacity .5s;
}
.vertical-bar.active{
  opacity: 1;
}
/* ::-webkit-scrollbar{
  width: 10px;
  height: 178px;
  border-radius:5px; 
}
::-webkit-scrollbar-thumb{
  background: red;
  border-radius:5px; 
}
::-webkit-scrollbar-track{
  background: darkcyan;
  border-radius:2px; 
} */
</style>

