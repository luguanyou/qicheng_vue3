<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="姓名">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="手机">
      <el-input v-model="form.phone" />
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="form.address" />
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="form.type" placeholder="请选择类型">
        <el-option label="10斤60-90" value="10斤60-90" />
        <el-option label="10斤80-90" value="10斤80-90" />
        <el-option label="20斤60-90" value="20斤60-90" />
        <el-option label="20斤80-90" value="20斤80-90" />
        <el-option label="5斤60-90" value="5斤60-90" />
        <el-option label="5斤80-90" value="5斤80-90" />
      </el-select>
    </el-form-item>

    <el-form-item label="原地址">
      <el-input v-model="form.orgAddress" type="textarea"  />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addressParse">解析地址</el-button>
      <el-button type="primary" @click="add">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'
import AddressParse from 'address-parse'
import {CreateOrderApi} from '../utils/api'
// do not use same name with ref
const form = reactive({
  name: '',
  phone:"",
  address:"",
  orgAddress:"",
  type:"",

})

const addressParse = () => {
  console.log(form.orgAddress)
 let res= AddressParse.parse(form.orgAddress)
 form.phone=res[0].mobile
 form.name=res[0].name
 form.address=res[0].province+res[0].city+res[0].area+res[0].details

console.log('submit!',form)
}
const add=()=>{
  let data=[]
  data.push({"receiver":form.name,"addressDetail":form.address,"phone":form.phone,"type":form.type})
  console.log(data)
 CreateOrderApi(data).then(res=>console.log("新增",res))
}
</script>
