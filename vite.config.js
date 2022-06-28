import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// your plugin installation
Components({
  resolvers: [ElementPlusResolver()],
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    AutoImport({
      /* options */
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
})
