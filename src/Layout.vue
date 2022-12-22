<template>
  <div class="common-layout">
    <el-container>
      <el-header style="background-color:bisque">Header</el-header>
      <el-container>
        <el-aside width="250px">

          <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        router="true"
        :default-active='state.currentPath'
        class="el-menu-vertical-demo"

        text-color="#fff"
        @select="select"

      >

        <el-menu-item index="/home">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/upload">
          <el-icon><setting /></el-icon>
          <span>上传</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <el-icon><setting /></el-icon>
          <span>关于</span>
        </el-menu-item>
        <el-menu-item index="/address">
          <el-icon><setting /></el-icon>
          <span>地址</span>
        </el-menu-item>
      </el-menu>

        </el-aside>

        <el-container>
          <el-main>

            <router-view />
          </el-main>
          <el-footer style="background-color:aquamarine">
            Footer
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const state = reactive({
  currentPath: '/',

})
// function select(e){
//    console.log(e)
//    state.currentPath = e
//   }



</script>

<style scoped>
.common-layout{
  height: 100vh;
}
.aside{
  background: #797979;
}
</style>