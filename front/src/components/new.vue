<template>
   <el-row class="rowall">
  <el-col :span="24" style="border-radius: 4px;">
    
    <el-row class="classrowone">
 最新发布
</el-row>
<el-row v-for="(i,index) in datalist" class="classrow" :span="24">
    <el-col :span="2" class="classrow1">{{index+1}}</el-col>
  <el-col :span="14" class="classrow2">{{i.article_name}}</el-col>
  
  <el-col :span="6" class="classrow3">{{i.TIME}}</div></el-col>
</el-row>
  </el-col>
</el-row>
 
</template>


<script>
    import {
        mapActions,
        mapState
    } from "vuex"
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                datalist: (state) => state.newlist
            })
        }
    }
</script>
<style scoped>
    .rowall {
        margin-top: 20px;
        padding: 5px;
        border-radius: 5px;
    }
    
    .classrowone {
        border-radius: 5px;
        background: #ccc;
        margin-bottom: 10px;
        text-align: center;
        color: white;
        padding: 2px 0;
    }
    
    .classrow {
        margin: 15px 0;
    }
    
    .classrow1 {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        background: pink;
        margin-right: 10px;
        font-size: 12px;
        color: #fff;
    }
    
    .classrow2 {
        margin-right: 10px
    }
    
    .classrow3 {
        font-size: 14px;
    }
    
</style>