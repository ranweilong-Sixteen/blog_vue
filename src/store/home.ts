import { defineStore } from 'pinia'
// defineStore('main',{..}) 在devtools 就使用 main 这个名
export const useMain = defineStore('main', {
    // 相当于data
    state: () => {
        return {
            
        }
    },
    // 相当于计算属性
    getters: {

    },
    // 相当于vuex的 mutation + action，可以同时写同步和异步的代码
    actions: {

    },
})
