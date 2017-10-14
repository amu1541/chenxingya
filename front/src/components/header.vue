<template>
    <div>
    <nav>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><h2 class="text">阿沐的个人博客</h2></el-menu-item>

    <el-submenu v-for="(i,index) in datalist" :index="i.onedata.id" >
       
        <template slot="title">{{i.onedata.cnname}}</template>
<el-menu-item v-for="(j,index2) in i.twodata" :index="j.id">{{j.cnname}}</el-menu-item>

</el-submenu>
<!--<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
</el-menu>  
        <div class="wrap">
            <div class="banner">
              <img src="../../static/images/header.jpg" alt="" class="head">
              <p class="info">做人要学会敬畏，有所为必有所不为；做事要如临深渊，如履薄冰。</p>
            </div>
        </div>
    </nav>
    </div>
    
</template>

<script>
    import {
        mapState,
        mapActions
    } from "vuex"
    import action_type from "../store/action_type"
    export default {
        name: 'header',
        data() {
            return {
                activeIndex: '1',
            };
        },
        computed: {
            ...mapState({
                datalist: (state) => state.headData
            })
        },
        methods: {
            ...mapActions({
                changeList: action_type.HEADCHANGEDATA.actions,
                // 二级分类点击后改变面包屑数组
                headbreadList: action_type.HEADBREADDATA.actions
            }),
            handleSelect(key, keyPath) {
                console.log(key)
                this.changeList(key)
                this.datalist.forEach(function(i) {
                    i.twodata.forEach(function(j) {
                        if (j.id == key) {
                            console.log(j)
                            var arr = [{
                                cnname: i.onedata.cnname,
                                oneId: i.onedata.id,
                                twoId: null
                            }, {
                                cnname: j.cnname,
                                oneId: j.parent_id,
                                twoId: j.id
                            }]
                            console.log(arr)
                            this.headbreadList(arr)
                        }
                    }.bind(this))
                }, this);

            }
        },
        mounted() {
            console.log(this.datalist)
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .index {
        width: 1000px;
        margin: 0 auto;
    }
    .text{
        font-size: 20px;
        font-weight: normal;
    }
    .breadCrumb {
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
    }
    
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    
    .el-col {
        border-radius: 4px;
    }
    
    .bg-purple-dark {
        background: #99a9bf;
    }
    
    .bg-purple {
        background: #d3dce6;
    }
    
    .bg-purple-light {
        background: #e5e9f2;
    }
    
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .el-menu--dark{
        background: #fff;
    }
    .header{
    width: 100%;
    height: 44px;
    background: skyblue;
    line-height: 44px;
    color: #fff;
    font-weight: normal;
    font-size: 20px;
    position: relative;
  }
  .header h2{
    font-size: 20px;
    font-weight: normal;
    margin-left: 20px;
    float: left;
  }
  .pull{
    position: absolute;
    left: 250px;
  }
  .el-menu--dark{
  	opacity: .7;
  }
  .head{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #000;
    font-size: 18px;
  }
  .banner{
    width: 100%;
    height: 260px;
    background: url(../../static/images/banner.jpg) no-repeat;
    background-size: 100% 100%;    
    text-align: center;
  }
  .banner p{
  	color:#fff;
  }
  .head{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
  }
  .info{
    padding-top: 24px;
    color: skyblue;
  }
 
</style>