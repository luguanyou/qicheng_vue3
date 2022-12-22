<template>
  <h1>about</h1>
  <button @click="getList">点击</button>
</template>

<script setup>
import axios from 'axios'
import {GetExpressInfoApi} from '../utils/api'
const getList=async ()=>{
  // https://qicheng-2g4zjgi20f6b65d4-1307596455.ap-shanghai.service.tcloudbase.com/qc/v1.0/expressInfo

  GetExpressInfoApi({}).then(res=>{console.log("获取",res)})
}

</script>

<style>

</style>