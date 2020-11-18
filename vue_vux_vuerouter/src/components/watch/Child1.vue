<template>
    <div>
      <p>{{msg}} {{pmsg}} {{$attrs.cnum}}</p>
      <slot></slot>
    
    </div>
</template>
<script>
export default {
    name:'Child1',
    data(){
        return {
            msg: '子组件1'
        }
    },
    props: {
        pmsg: {
            type: String,
            default: null
        }
    },
    created() {
    },
    updated() {
       this.$emit('genum', "number 有回来了")
    },
}
</script>