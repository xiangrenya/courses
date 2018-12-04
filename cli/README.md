
## 目标
1. 创建一个简单的命令dog，在控制台打印出 hello world
2. 通过命令 dog init 实现初始化项目，模板可以用 git@github.com:react-boilerplate/react-boilerplate.git，并立即安装依赖，并启动服务

## 实践步骤

1. 在package.json定配置bin字段，定义命令关键字和对应执行文件
2. 通过npm-link命令在全局文件夹中创建一个符号链接，指向当前文件夹
3. 借助commandr、inquirer、shelljs完成初始化项目的任务

## npm link
npm link 将在全局文件夹中创建一个符号链接，指向当前文件夹。
npm link package-name 将创建从全局安装package-name到node_modules/ 当前文件夹的符号链接。这对于安装自己的东西很方便，因此您可以对其进行处理并迭代测试，而无需不断重建。

## 参考资料

- [从零开发一个node命令行工具](https://mp.weixin.qq.com/s?__biz=MzI1ODE4NzE1Nw==&mid=2247487065&idx=1&sn=47d5e107b26d14c75d49e07c82e17eb8&chksm=ea0d44a3dd7acdb5e9df983c2a300338ab8997d200786054150409dab27dd066cda0a53ad2ef&mpshare=1&scene=1&srcid=&rd2werd=1#wechat_redirect)
- [npm-link的用法](https://docs.npmjs.com/cli/link.html)