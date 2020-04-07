const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\README.md"))),
  "component---src-index-mdx": hot(preferDefault(require("C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\src\\index.mdx"))),
  "component---src-tablas-manejo-de-errores-mdx": hot(preferDefault(require("C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\src\\tablas\\Manejo de errores.mdx"))),
  "component---src-tablas-preguntas-mdx": hot(preferDefault(require("C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\src\\tablas\\Preguntas.mdx"))),
  "component---src-tablas-respuestas-mdx": hot(preferDefault(require("C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\src\\tablas\\Respuestas.mdx"))),
  "component---src-tablas-usuarios-mdx": hot(preferDefault(require("C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\src\\tablas\\Usuarios.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\.docz\\src\\pages\\404.js")))
}

