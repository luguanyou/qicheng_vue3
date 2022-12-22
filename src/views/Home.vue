<template>
  <!-- <h1>home</h1> -->


    <Ktable :dataList="data"></Ktable>


</template>

<script setup>
import Ktable from '../components/Ktable.vue'
import axios from 'axios'
import { onBeforeUpdate,onBeforeMount,onMounted ,ref} from 'vue'
let data=ref([{ number: 73194668513696, receiver: '胡将', company: '中通快递'}])
onMounted(async() => {
  console.log(`the component is now mounted.`)
  data.value =await getList()
})
const getList=async ()=>{
  // https://qicheng-2g4zjgi20f6b65d4-1307596455.ap-shanghai.service.tcloudbase.com/qc/v1.0/expressInfo
  return new Promise(async(resolve)=>{
    let res =await axios.get("https://qicheng-2g4zjgi20f6b65d4-1307596455.ap-shanghai.service.tcloudbase.com/qc/v1.0/expressInfo")
    resolve(res.data.data)
  })

}
</script>

<style>

</style>