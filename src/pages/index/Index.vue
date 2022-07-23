<template>
  <div>这是主页{{ nickname }}</div>
  <q-btn @click="logout">退出</q-btn>
  <q-editor
    v-model="editor"
    @paste="(evt) => pasteCapture(evt)"
    @drop="(evt) => dropCapture(evt)"
  />
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  name: 'IndexView',
  setup() {
    const store = useStore()
    const editor = ref({})
    return {
      nickname: computed(() => store.state.user.nickname),
      editor,
      logout: () =>
        store.dispatch('user/logout').then(() => {
          window.location.reload()
        }),
      pasteCapture: (i) => {
        console.log(i)
      },
      dropCapture: (i) => {
        console.log(i)
      }
    }
  }
}
</script>

<style scoped></style>
