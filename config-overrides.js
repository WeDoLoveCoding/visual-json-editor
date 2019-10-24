const path = require('path')
const { override, addLessLoader, addWebpackAlias } = require("customize-cra")

process.env.GENERATE_SOURCEMAP = "false"

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A'
    }
  }
  ),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
    ["components"]: path.resolve(__dirname, "src/components")
  })

)
