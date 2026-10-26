import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readFileSync } from "node:fs";

const hosting = JSON.parse(readFileSync(new URL("./firebase.json", import.meta.url), "utf8")) as {
  hosting: { headers: { source: string; headers: { key: string; value: string }[] }[] };
};
const previewHeaders = Object.fromEntries(
  hosting.hosting.headers.find((rule) => rule.source === "**")?.headers.map(({ key, value }) => [key, value]) ?? []
);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
    headers: previewHeaders,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
