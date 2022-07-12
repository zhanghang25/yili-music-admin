import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, TransformAssetUrls } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: TransformAssetUrls
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ]
})
