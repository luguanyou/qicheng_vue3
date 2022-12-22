<template>
  <el-table :data="props.dataList" style="width: 100%">
    <el-table-column prop="number" label="number" width="180" />
    <el-table-column prop="receiver" label="receiver" width="180" />
    <el-table-column prop="company" label="company" />
  </el-table>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['dataList'])
console.log("组件传递过来的 ",props.dataList)


</script>
