1.view installed packages
https://stackoverflow.com/questions/17937960/how-to-list-npm-user-installed-packages

npm list -g --depth=0

2.安装依赖
cd 源码根目录
npm install .

3.启动 前端项目
# 注意： start 要在package.json中的 scripts 配置好。
npm start

package.json 一个例子:
{
  "private": true,
  "scripts": {
    "start": "UMI_UI=none umi dev",
    "start:ui": "UMI_UI=1 umi dev",
    "start:analyze": "UMI_UI=none ANALYZE=1 umi dev",
    "build": "UMI_UI=none umi build",
    "lint": "eslint --ext .js src test",
    "precommit": "npm run lint"
  },
  "dependencies": {
    "@ant-design/icons": "^4.6.3",
    "@ant-design/pro-card": "^1.15.2",
    "@ant-design/pro-layout": "^6.26.2",
    "@umijs/plugin-antd": "^0.10.0",
    "@umijs/plugin-dva": "^0.13.0",
    "@umijs/plugin-layout": "^0.17.2",
    "@umijs/plugin-request": "^2.7.0",
    "@umijs/preset-ui": "^2.2.9",
    "react": "17.0.2",
    "react-dom": "17.x",
    "react-redux": "^7.2.4",
    "umi": "^3.5.17"
  },
  "devDependencies": {
    "eslint": "^7.32.0",
    "eslint-config-umi": "^1.6.0",
    "eslint-plugin-flowtype": "^5.9.0",
    "eslint-plugin-import": "^2.24.2",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.24.0",
    "husky": "^7.0.2"
  }
}


4.
