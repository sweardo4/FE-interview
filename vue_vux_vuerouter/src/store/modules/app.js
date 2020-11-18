export default {
    state: {
        count: 0
    },
    mutations: {
        ADDCOUNT: (state)=>{
            state.count++ 
        }
    },
    actions: {
        addCount({ commit }){
            commit('ADDCOUNT')
        }
    }
}