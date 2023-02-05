import { defineConfig } from "vite"
import ssl from "@vitejs/plugin-basic-ssl"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ssl()],
	clearScreen: false,
	build: { outDir: "docs" },
	server: {
		host: false, // enable by -- --host
		port: 3030,
		strictPort: true,
		https: true,
	},
	preview: {
		port: 3030,
	},
})
