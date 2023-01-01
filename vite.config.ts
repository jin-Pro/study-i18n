import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import path from "path";

export default defineConfig({
  publicDir: false,
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [react(), envCompatible({ prefix: "REACT_APP" })],
});
