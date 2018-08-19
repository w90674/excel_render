<template>
  <div class="exel-test">
  <h1>excel demo</h1>
  <el-button>get Table</el-button>
  <input type="file" name="" id="excel" @change="getExcel($event)">
  <table>
    <tr v-for="(tr,idx) in excelData" :key="idx">
      <td v-for="(td,index) in tr" 
      :colspan="td.csp" 
      rowspan="1" :key="index" v-if="td['t']">
      <span>{{td['t']}}</span>
      </td>
    </tr>
  </table>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import {findSheet,findTable,readTable,convertExcelDate,toExcelDate} from '../utils/xlsx'
console.log(_.partition([1, 2, 3, 4], n => n % 2))
export default {
  name: 'excel-test',
  data:function(){
    return{
    url:'static/demo.xlxs',
    excelData:[],
    }
  },
  methods:{
    getExcel(e){
      let files=e.target.files;
      if(!files||files.length===0){
        return
      }
      let file=files[0]
      let fileReader=new FileReader();
       fileReader.onload =  e=> {
         var filename = file.name;
         // pre-process data
         var binary = "";
         var bytes = new Uint8Array(e.target.result);
         var length = bytes.byteLength;
         for (var i = 0; i < length; i++) {
         binary += String.fromCharCode(bytes[i]);
        }
        // call 'xlsx' to read the file
        var oFile = XLSX.read(binary, {type: 'binary', cellDates:true, cellStyles:true});
        let {sheet,range}=findSheet(oFile,'净现值')
        console.log(oFile)
        console.log('------------------------------------')
        console.log(sheet)
        console.log('------------------------------------')
        console.log(range)
        const fir= {
           unit: "项目",
           year3:'单位',
           year: "2019年",
           out1: "2020年",
           out2: "2021年", 
           year1: "2022年",
           out3: "2023年",
           out4: "2024年",
       }
       const fir2= {
           1: "项目",
           2: "2019年",
           3: "2020年",
           4: "2021年", 
           5: "2022年",
           6: "2023年",
           7: "2024年",
           8:'单位',
       }
        let { columns, firstRow } = findTable(sheet, range,fir2);
       //console.log(range,sheet,columns)
       const data = readTable(sheet, range, columns, firstRow, (row) => false);
      console.log(data)
      let merges=sheet['!merges'];
       let _data=[]
		   data.forEach((ite,idx)=>{
          let _item=[]
					ite.forEach((item,index)=>{
            let mer={}
						merges.forEach(it=>{
							console.log(it.s.r==(idx)&&it.s.c==(index))
                if(it.s.r==idx&&it.s.c==index){
                 mer['rsp']=it.e.r-it.s.r+1
								 mer['csp']=it.e.c-it.s.c+1
                 mer['r']=idx;
                 mer['c']=index;
               }
            })
            Object.assign(mer,{t:item})
            _item.push(mer) 
          }
          )
          _data.push(_item)
				})
		   console.log(_data)
       this.excelData.push(..._data)
     /* data.forEach((record, index) => {
        // to domsething with `record`, which will have keys `name`, `company`, `date` and `amount`
        
        // to get a real date...
        let date = convertExcelDate(record.date);
        console.log(date)
        
    }); */
        };
        fileReader.readAsArrayBuffer(file)
      },
    }
}
</script>
<style scoped>
table{
  margin-left: 100px;
  border-collapse: collapse;
}
table td{
   border: 1px solid #ccc;
   padding: 0 10px;
   font-size: 16px;
   white-space: pre;
}
</style>
