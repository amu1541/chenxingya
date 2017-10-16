import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
var num=true;
var store=new Vuex.Store({
    state:{
        newdatas:null,
        actdatas:null,
        state:false
    },
    actions:{
        getAllData({commit}){
            var dataNav=function(){
                return new Promise((resolve,reject)=>{
                    this.axios.get('/api/front_article/getfont').then((data)=>{
                    	// console.log(data)
                        commit('newdatas_ace',data.data.data)
                        resolve()
                    })
                })
            }
            var dataArtical=function(){
                return new Promise((resolve,reject)=>{
                    this.axios.get('/api/front_article/getfontAll').then((data)=>{
                    	// console.log(data)
                        commit('actdatas_ace',data.data.data)
                        // console.log(data.data.data)
                    })
                })
            }
            return{
                axios:this.axios,
                dataNav,
                dataArtical
            }
        },
        defaultData({dispatch,commit},fn){
            commit('state_ace','end')
          dispatch('getAllData').then((data)=>{
          	// console.log(data)
                Promise.all([data.dataNav(),data.dataArtical()]).then(()=>{
                    if(num){
                        commit('state_ace',false)
                        num=false
                    }
                   // fn()
            },()=>{
                commit('state_ace',false)
            })
          })
        }
    },
    mutations:{
        newdatas_ace(state,data){
            state.newdatas=data
        },
        actdatas_ace(state,data){
            state.actdatas=data
        },
        state_ace(state,data){
            state.state=data
        }
    }
})
export default store