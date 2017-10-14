<template>
   <el-row class="rowall">
  <el-col :span="24" style="border-radius: 4px;">
    
    <el-row class="classrowone">
 排行榜
</el-row>
<el-row v-for="(i,index) in datalist" class="classrow" :span="24">
    <el-col :span="2" class="classrow1">{{index+1}}</el-col>
  <el-col :span="14" class="classrow2">{{i.article_name}}</el-col>
  
  <el-col :span="6" class="classrow3">
      <i class="el-icon-star-on"></i>
      <span>{{i.visitors}}</span>
      
</el-col>
</el-row>
  </el-col>
</el-row>
 
</template>


<script>
    import {
        mapActions,
        mapState
    } from "vuex"
    import actions_type from "../store/action_type"

    export default {
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState({
                datalist: (state) => state.toplist
            })
        },
        methods: {
           
        },
        created() {
            
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
        background: skyblue;
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
    
    .classrow3 span {
        display: inline-block;
        width: 50px;
        text-align: center;
    }
    .el-icon-star-on{
        color: #fff;
    }
</style>