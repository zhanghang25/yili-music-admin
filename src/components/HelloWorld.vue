<script setup>
import { ref } from 'vue'
import { sayHello } from "../api/hello";

defineProps({
  msg: String
})
const count = ref(0)
const message = ref("您哈,quasar!")

const hi = () =>{
  sayHello().then(res=>{
    console.log(res)
    message.value = res.data
  })
}

</script>

<template>
  <h4>{{ message }}</h4>
  <q-btn color="primary" @click="count++">点击次数 {{count}}</q-btn>
  <br>
  <br>
  <q-btn @click="hi" >获取请求</q-btn>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
