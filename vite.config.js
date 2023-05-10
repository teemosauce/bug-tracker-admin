import vue from "@vitejs/plugin-vue";
import path from "path";

function resolvePath(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default () => {
  return {
    resolve: {
      alias: {
        "~": resolvePath("./"),
        "@": resolvePath("src"),
      },
    },
    plugins: [vue()],
    optimizeDeps: {
      // include: ['element-plus/lib/locale/lang/zh-cn', 'element-plus/lib/locale/lang/en']
    },
    server: {
      open: true,
      port: 8080,
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path) => {
            // 去掉api
            return path.replace(/^\/api/, "") 
          },
        },
      },
    },
  };
};
