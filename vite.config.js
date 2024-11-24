import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/3DPortfolio/",
  // config for include glb file
  assetsInclude:['**/*.glb']
})
