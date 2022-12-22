<template>
  <form>
    <label for="name">发货日期:</label>
    <input type="text" id="name" v-model="date" />
    <br />
    <label for="name">上传文件:</label>
    <input
     type="file"
     accept=".xls,.xlsx"
     class="upload-file"
   @change="changeExcel($event)" />
   <br />
   <el-button type="primary" @click="add">同步更新数据库</el-button>

  </form>



   <Table :dataList="tableData" :items="items"></Table>
</template>

<script setup>
import Table from '../components/Table.vue'
import {ref,onUpdated} from 'vue'
import * as XLSX from 'xlsx' //
import axios from 'axios';
import {CreateExpressInfoApi} from '../utils/api'
const tableData = ref([])
const items=ref([{name:"运单号",lable:"运单号"},{name:"收件人",lable:"收件人"}])
let date=ref("2022年12月20日")
const CreateOrderApi1=(dataList)=>{
  axios.request({
    method:"POST",
    url:"/users/add",
    data:{
      "table":"TexpressInfo","data":{"data":dataList}

    }
  }).then(
    res=>{
      console.log(res)
    }
  )
}
const add=()=>{

  console.log(tableData,"add data ",tableData._rawValue)
  // CreateOrderApi1(tableData._rawValue)
  CreateExpressInfoApi(tableData._rawValue).then(res=>{console.log("新增",res)})
}

const culDataList=(dataList)=>{
    let result =dataList.map(item=>{
       return {
        receiver:item["收件人"],
        number:item["运单号"]?item["运单号"]:item["快递单号"],
        sendTime:date._value,
        company:item["快递公司"]?item["快递公司"]:"",
        poster:item["寄付人"]?item["寄付人"]:item["寄件人"],
        type:item["重量"]?item["重量"]:item["备注"],
        phone:(item["收件人手机"])?(item["收件人手机"]).toString().substring(7,11):"",
       }
    }
    )
    console.log(result)
    return result
}
function changeExcel(e){
  const files = e.target.files
   if (files.length <= 0) {
      return false
    } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
      console.log('上传格式不正确，请上传xls或者xlsx格式')
      return false
    }
    // 读取表格
    const fileReader = new FileReader()
      fileReader.onload = ev => {
        const workbook = XLSX.read(ev.target.result, {
          type: "binary"
        })
        const wsname = workbook.SheetNames[0]
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname])
        console.log('ws:',ws) // 转换成json的数据
        //  dealExcel(ws) ...对数据进行自己需要的操作
        let data=culDataList(ws)
        tableData.value = data

    }
    fileReader.readAsBinaryString(files[0])
}

</script>



<style>
form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30%;
    margin-bottom: 5%;
  }

  label {
    font-size: 16px;
    margin-bottom: 4px;
  }

  input {
    font-size: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    background-color: #4caf50;
    color: #fff;
  }
</style>