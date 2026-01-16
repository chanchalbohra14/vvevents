// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

// added this for development purpose only
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// server.hmr.overlay

export default defineConfig({
  plugins: [react()],
  server: {
    // hmr: {
    //   overlay: false,
    // },

    host: true, // 👈 This is the key part
    port: 5173, // Optional: specify port explicitly
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
