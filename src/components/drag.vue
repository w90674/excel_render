<template>
    <div class="cover-img"
        v-dragIt
        :style="{position: 'absolute', zIndex:999,width,height,overflow: 'hidden',boxShadow: '1px 1px 2px 5px #cccccc40',cursor: 'pointer'}"
        ref="cover">
        <slot>容器内容可以进行拖拽和缩放</slot>
      <span class="control" style="position: absolute;width: 40px;height: 40px;background-color: red;cursor: nw-resize;bottom: -20px;right: -20px;border-radius: 50%" title="缩放"></span>
    </div>
</template>

<script>
    export default {
        name:'drag-zoom-source',
        data: function () {
            return {
            }
        },
        props:{
          /* blobUrl:{
              type:String,
              default:'http://pbwv2tqsz.bkt.clouddn.com/sock.jpeg'
          }, */
          width:{
            type:String,
          },
          height:{
            type:String,
          }
        },
        directives:{
            dragIt:{
                inserted:function (el) {
                    el.onmousedown=function (e) {
                        let x=e.clientX-el.offsetLeft,
                            y=e.clientY-el.offsetTop;
                        let w=el.offsetWidth,h=el.offsetHeight;
                        let target=e.target;
                        target.draggable=false;
                        console.log(target)
                        document.onmousemove=function (e1) {
                            if(target.nodeName==='SPAN'){
                                //zoom
                                el.style.width=w+e1.clientX-e.clientX+'px'
                                el.style.height=h+e1.clientY-e.clientY+'px'
                            }else if(target.className!=='cover-img'){
                                 //drag
                                el.style.left=e1.clientX-x+'px';
                                el.style.top=e1.clientY-y+'px';
                            }
                        }
                        document.onmouseup=function () {
                            document.onmousemove=null
                            document.onmouseup=null
                        }
                    }
                }
            }
        }
    };
</script>
<style scoped>
.cover-img>*{
  width: 100%;
  height: 100%;
}
</style>


