<template>
  <div class="login-page">
    <q-card class="login-form-content">
      <q-form
        @submit="onSubmit(username, password)"
        class="q-gutter-md form"
      >
        <div class="title">原力音乐后台</div>
        <q-input
          filled
          label="用户名"
          lazy-rules
          v-model="username"
          :rules="[(val) => (val && val.length > 0) || '请输入用户名']"
        />

        <q-input
          filled
          v-model="password"
          type="password"
          label="密码"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '请输入用户名']"
        />

        <q-toggle v-model="accept" label="记住我" />

        <div>
          <q-btn
            class="full-width"
            label="登录 "
            type="submit"
            color="primary"
          />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup() {
    const accept = ref(false)
    const username = ref('zhang')
    const password = ref('zhang')
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const onSubmit = (username, password) => {
      store.dispatch('user/login', { username, password }).then((res) => {
        router.push({ path: route.query.redirect || '/' })
      })
    }
    return {
      accept,
      username,
      password,
      onSubmit
    }
  }
}
</script>

<style scoped lang="less">
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .login-form-content {
    width: 400px;

    padding: 20px;
    .title {
      margin-bottom: 20px;
      font-size: 40px;
      text-align: center;
    }
  }
}
</style>
