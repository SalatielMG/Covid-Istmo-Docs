// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---readme-md": () => import("./../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-index-mdx": () => import("./../../src/index.mdx" /* webpackChunkName: "component---src-index-mdx" */),
  "component---src-tablas-manejo-de-errores-mdx": () => import("./../../src/tablas/Manejo de errores.mdx" /* webpackChunkName: "component---src-tablas-manejo-de-errores-mdx" */),
  "component---src-tablas-preguntas-mdx": () => import("./../../src/tablas/Preguntas.mdx" /* webpackChunkName: "component---src-tablas-preguntas-mdx" */),
  "component---src-tablas-respuestas-mdx": () => import("./../../src/tablas/Respuestas.mdx" /* webpackChunkName: "component---src-tablas-respuestas-mdx" */),
  "component---src-tablas-usuarios-mdx": () => import("./../../src/tablas/Usuarios.mdx" /* webpackChunkName: "component---src-tablas-usuarios-mdx" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

