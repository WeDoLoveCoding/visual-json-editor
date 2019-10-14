const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require("customize-cra");

process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  fixBabelImports("import", {
    libraryName: 'antd',
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }, // 自定义主题
  }),
  addWebpackAlias({        
    ["@"]: path.resolve(__dirname, "src"),               
    ["components"]: path.resolve(__dirname, "src/components"),
    ["store"]: path.resolve(__dirname, "src/store")   
  })

);