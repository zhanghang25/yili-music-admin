<template>
  <div class="login-page">
    <q-card class="login-form-content">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md form">
        <div class="title">原力音乐后台</div>
        <q-input
          filled
          label="用户名"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '请输入用户名']"
        />

        <q-input
          filled
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
export default {
  name: 'Login',
  setup() {
    const accept = ref(false)
    return {
      accept
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
