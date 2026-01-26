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
        Task5: resolve(__dirname, "Pages/Task5/index.html"),
        Task6: resolve(__dirname, "Pages/Task6/index.html"),
        Task7: resolve(__dirname, "Pages/Task7/index.html"),
        Task8: resolve(__dirname, "Pages/Task8/index.html"),
        Task9: resolve(__dirname, "Pages/Task9/index.html"),
        Task10: resolve(__dirname, "Pages/Task10/index.html"),
        Task11: resolve(__dirname, "Pages/Task11/index.html"),
        Task12: resolve(__dirname, "Pages/Task12/index.html"),
        // Task13: resolve(__dirname, "Pages/Task13/index.html"),
      },
    },
  },
})