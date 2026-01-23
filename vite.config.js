import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        Task1: resolve(__dirname, "Pages/Task1/index.html"),
        Task2: resolve(__dirname, "Pages/Task2/index.html"),
        Task3: resolve(__dirname, "Pages/Task3/index.html"),
        Task4: resolve(__dirname, "Pages/Task4/index.html"),
      },
    },
  },
})