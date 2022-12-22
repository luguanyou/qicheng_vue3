<template>

  <el-table :data="props.dataList" style="width: 100%">

        <!-- <el-table-column prop="员工编号" label="员工编号" width="180" />
    <el-table-column prop="姓名" label="姓名" width="180" />
    <el-table-column prop="部门" label="部门" /> -->



    <el-table-column prop="number" label="员工编号" width="180" />
    <el-table-column prop="receiver" label="姓名" width="180" />
    <el-table-column prop="sendTime" label="部门" />
  </el-table>
</template>

<script setup>
import { defineProps } from 'vue'
import {ref} from 'vue'
const props = defineProps(['dataList','items'])
console.log(props.items,"  组件传递过来的 ",props.dataList)
const items=ref(props.items)
console.log(items._value[0])

</script>
