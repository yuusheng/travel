import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import viteCompression from 'vite-plugin-compression'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

process.env = { ...process.env }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteCompression(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssImport, autoprefixer, tailwindcss],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
