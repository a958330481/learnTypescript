概念
----

> 静态类型语言：在编译阶段确定所有变量的类型<br/>
> 动态类型语言：在执行阶段确定所有变量的类型，在时间和空间上对性能都有损耗

优缺点
----

>静态：类型要求严格、立即发现错误、运行时性能良好、自文档化<br/>

>动态：类型要求宽松、bug隐藏时间较久、运行时性能差、可读性差（可弥补：v8,单元测试）


项目运行依赖的npm包
----

```javascript
>npm i webpack webpack-cli webpack-dev-server-D
>npm i ts-loader typescript -D
>npm i html-webpack-plugin -D
>npm i clean-webpack-plugin -D
>npm i webpack-merge -D
```

安装完成后，下次打开项目，可直接通过

> npm start

启动项目


注释：

clean-webpack-plugin ：每次成功构建后帮我们清空dist目录,清除无用文件

webpack-merge:合并两个文件



TypeScript数组类型
----
+ void
+ any
+ nerver
+ 元组
+ 枚举
+ 高级类型

>另外ES6的数据类型也可以用
>Array、Object、Boolean、null、undefined、Symbol、Number、String、Function

### 类型注解

+ 语法：（变量/函数）：type
+ 作用：相当于强类型语言中的类型声明






