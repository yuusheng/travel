import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import postcssImport from 'postcss-import'
// import autoprefixer from 'autoprefixer'
// import tailwindcss from 'tailwindcss'
import viteCompression from 'vite-plugin-compression'
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'upath'

// https://vitejs.dev/config/
const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: process.env.BASE_PATH ?? '/',

    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteCompression(),
    ],
    // css: {
    //   postcss: {
    //     plugins: [postcssImport, autoprefixer, tailwindcss],
    //   },
    // },
    resolve: {
      alias: {
        '@': resolve(__dirname, '/src'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_BASE || 'http://localhost:4000/api/',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },
    },
    test: {},
  }
})

export default config
