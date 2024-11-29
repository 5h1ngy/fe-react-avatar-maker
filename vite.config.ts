import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // WSL2 hotfix
  // server: {
  //   host: '0.0.0.0',  // Listen on all IPs
  //   hmr: {
  //     port: 5173,  // Same as VITE_HMR_PORT in Docker Compose
  //     clientPort: 6006  // Same as the Storybook exposed port
  //   },
  //   watch: {
  //     usePolling: true,
  //     interval: 1000,
  //   },
  // }
})