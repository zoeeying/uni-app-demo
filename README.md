# uni-app-learning

简单学习一下 uni-app。

这里面有两个项目，uni-app-demo 是通过命令行创建的项目，uni-app-demo2 是通过 HBuilderX 创建的项目。

下面是以**微信小程序**为例的两个项目的启动方法：

#### (1) uni-app-demo

**步骤一：** 安装依赖

```bash
npm install # 安装依赖
```

**步骤二：** 安装微信开发者工具，打开微信开发者工具，点击中间有 + 的矩形，选择导入项目，选择目录 uni-app-demo\dist\dev\mp-weixin，使用测试 AppID，点击导入

**步骤三：** 启动项目

```bash
npm run dev:mp-weixin #微信小程序
```

#### (2) uni-app-demo2

安装微信开发者工具 => 点击 HBuilderX 工具栏的运行 => 运行到小程序模拟器 => 微信开发者工具，即可在微信开发者工具里面预览 uni-app。

如果是第一次启动项目，需要配置微信开发工具的相关路径。
