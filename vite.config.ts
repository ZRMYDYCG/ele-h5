import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { VantResolver } from "@vant/auto-import-resolver"
// postcss8 插件
import postcsspxtoviewport8plugin from "postcss-px-to-viewport-8-plugin";
// 虽然postcss-px-to-viewport-8-plugin做适配，但是行内样式不能转换为vw，所以我们自定义个插件，将内样式px转成vw
import vitePluginStyleVwLoader from "./src/plugin/vite-plugin-style-vw-loader";

// # https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginStyleVwLoader({
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 5,
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      minPixelValue: 1,
    }),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // 适配移动端
    postcss: {
      plugins: [
        postcsspxtoviewport8plugin({
          unitToConvert: "px", // 需要转换的单位，默认为 px
          viewportWidth: 375, // UI设计稿的视口宽度
          unitPrecision: 5, // 单位转换后保留的精度
          propList: ["*"], // 能转化为vw的属性列表
          viewportUnit: "vw", // 希望使用的视口单位
          fontViewportUnit: "vw", // 字体使用的视口单位
          selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          mediaQuery: true, // 媒体查询里的单位是否需要转换单位
          replace: true, //  是否直接更换属性值，而不添加备用属性
          exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
          landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: "vw", // 横屏时使用的单位
          landscapeWidth: 1024, // 横屏时使用的视口宽度
        }),
      ],
    },
  },
  // 配置代理
  server: {
    port: 3000, // 配置前端项目的拓展端口
    proxy: {
      '/api': 'http://localhost:8000',
      'imgs': 'http://localhost:8000'
    }
  }
})
