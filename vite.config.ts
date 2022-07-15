import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import { resolve } from 'upath'
import Unocss from 'unocss/vite'
import presetWind from '@unocss/preset-wind'
import presetAttributify from '@unocss/preset-attributify'

// https://vitejs.dev/config/
const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: process.env.BASE_PATH ?? '/',

    plugins: [
      vue({ reactivityTransform: true }),
      AutoImport(),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteCompression(),
      // Unocss({
      //   presets: [presetWind(), presetAttributify()],
      // }),
    ],
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
        },
      },
    },
    test: {},
  }
})

export default config
