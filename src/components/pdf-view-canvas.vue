<template>
  <div class="pdf_view">
    <h1>welcome use pdf-view based pdf.js</h1>
    <el-button type="success" @click="renderPdf">pdf render</el-button>
    <el-button type="danger"  @click="changePdf">pdf change</el-button>
    <canvas id="the-canvas" style="border:1px  solid black"></canvas>
  </div>
</template>

<script>
export default {
  name: 'pdf-view-canvas',
  data:function(){
    return{
    url:'static/promise.pdf',
    }
  },
  created(){
    console.log(pdfjsLib)
    console.log(pdfjsWorker)
  },
  methods:{
    changePdf(){
     this.url='static/info.pdf'
     this.renderPdf()
    },
    renderPdf(){
      pdfjsLib.getDocument(this.url).then(function getPdfHelloWorld(pdf) {
    //
    // Fetch the first page
    //
    pdf.getPage(1).then(function getPageHelloWorld(page) {
      var scale = 1.5;
      var viewport = page.getViewport(scale);
      //
      // Prepare canvas using PDF page dimensions
      //
      var canvas = document.getElementById('the-canvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
    
      //
      // Render PDF page into canvas context
      //
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    });
  });
    }
  }
}
</script>
