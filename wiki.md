2018年开始学习react，webpack已经发展到了4.0版本，react也已经是16.2，一切都和以前有所不同。

## 1. hello world

先初始化项目目录，在根目录下执行 

````
yarn init -y

yarn add react react-dom 
yarn add -D webpack webpack-cli babel-cli babel-loader babel-preset-es2015 babel-preset-react
````

创建 `.babelrc` 文件，配置为

````
{
  "presets": [
    ["es2015", {"modules": false}], 
    "react"
  ]
}
````
