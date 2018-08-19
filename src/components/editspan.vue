<template>
  <div class="edit_span" @dblclick.stop="handleDBClick" :style="{width}" title="双击可编辑">
      <input class="input_word"
       ref="input_word"
       type="text"
       v-model="words" 
       :placeholder="suggestMsg" 
       @keyup.13="saveEdit"
       v-show="editable">
       <i :class="['save_input', {'opreate_icon':editable}]" @click="saveEdit"></i>
       <i :class="['close_input',{'opreate_icon':editable}]" @click="quiteEdit"></i>
      <span  class="edit_result" v-show="!editable" :style="{textAlign}">{{words}}</span>
  </div>
</template>

<script>
export default {
  name: 'edit-span',
  props:{
     width:{
       type:String,
       default:'200px'
     },
     typeWords:{
       type:String,
       default:'双击可进行编辑'
     },
     textAlign:{
       validator: function (value) {
        return ['left', 'center', 'right'].includes(value)
      },
       default:'left'
     }
  },
  data:function(){
     return{
       oldValue:'',
       words:'',
       suggestMsg:'请输入内容',
       editable:false,
     }
  },
  watch:{
     typeWords(val){
        if(val){
          this.words=val
        }
     }
  },
  methods:{
    handleDBClick(){
     this.oldValue=this.words;
     this.editable=!this.editable;
     //自动获取焦点
     setTimeout(()=>this.$refs['input_word'].focus(),100)
    },
    saveEdit(){
    this.editable=false;
    this.$emit('update:typeWords',this.words)
    },
    quiteEdit(){
    this.editable=false;
    this.words=this.oldValue;
    }
  },
}
</script>
<style scoped>
.edit_span{
   position: relative;
   height: 40px;
   box-sizing: border-box;
   background-color: #ececec
}
.edit_span *{
  line-height: 40px;
}
.input_word{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 3px;
  user-select: none;
  outline: none;
  border: 1px solid #2fd7ffa3
}
.edit_span .save_input{
   right:40px;
   background: url(data:image/png;base64,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) no-repeat;
}
.edit_span .close_input{
  right: 0px;
  transform: scale(.8);
  background: url(data:image/png;base64,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) no-repeat;
}
.edit_span i{
  display: none;
}
.edit_span .opreate_icon{
  display: block;
   position: absolute;
   z-index: 10;
   top: 50%;
   transform: translateY(-50%);
   height: 100%;
   width: 40px;
   line-height: 40px;
   font-size: 20px;
   background-size: contain;
}
.edit_span .opreate_icon:hover{
  cursor: pointer;
}
.edit_result{
  border:1px solid #cccccc;
  display: inline-block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 3px;
}
</style>

