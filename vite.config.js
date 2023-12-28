import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      // dev specific config
      server: {
        port: 3000,
        strictPort: true,
        open: true
      },
      plugins: [react()]
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      plugins: [react()]
    }
  }
})