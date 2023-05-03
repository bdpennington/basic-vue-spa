/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // https://github.com/vitejs/vite-plugin-vue/blob/main/packages/plugin-vue/README.md
    Vue(),
    // https://github.com/antfu/unplugin-icons
    Icons(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
