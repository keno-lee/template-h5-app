# 多 APP 多模块多入口项目

## 开始

## 开发必读

1. 项目使用大驼峰文件命名规范，例如 `HolaAppbar.vue`
2. 项目使用设计稿为 2 倍图(750px)，项目使用尺寸按照设计稿即可
3. 项目使用 flex 布局，请尽量使用 flex 类名
4. 项目使用 `px2rem-loader`，注意事项如下：
   - 直接写 px，编译后会直接转化成 rem
   - 在 px 后面添加`/* no */`，不会转化 px，会原样输出。 — 一般 border 需用这个
   - 在 px 后面添加`/*px*/`,会根据 dpr 的不同，生成三套代码。—- 一般字体需用这个
5. 项目使用 `css variable`，使用颜色时示例： `color: var(--primary)`
6. `z-index`说明：`Appbar`和`Tabbar`均为 `999`，`Modal` 为 `9999`，`Message` 为 `99999`，`Toast` 为 `999999`，`Loading` 为 `9999999`，页面中使用定位元素均不可超过`999`

## 目录结构

```
|____ app -          #多模块入口
| |____ module1 
|
|____ common         #通用工具库
| |____ components
| |____ jsbridge
| |____ services
| |____ statistics
| |____ utils
|
|____ debug          #测试打包目录
|____ dist           #生产打包目录
|____ script         #脚本
|____ hola.config.js
```

## todo-list

1. 自定义配置分离，保证解耦
2. 挪出项目，合并脚手架工具
3. 公共组件命名规范，尽量做到解耦
4. common 和项目中的文件检查一遍，做好分类

## 上线前准备

- 修改项目中`constants`中配置文件

- 修改`package.json`版本号
