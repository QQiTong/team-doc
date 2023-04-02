# node_env

1. node_env 不是内部或外部命令

```sh
npm install cross-env --save-dev
```

```sh
yarn add cross-env --dev
```

```sh
cross-env NODE_ENV=production node server.js
```

## .npmrc

```sh
shamefully-hoist=true
strict-peer-dependencies=false
shell-emulator=true
```

1. shamefully-hoist=true：这是一个针对包管理器的配置选项，通常指的是npm。它的作用是允许多个依赖项使用相同的依赖版本，即使这可能会导致一些依赖项不兼容。这是一种权宜之计，通常只有在遇到依赖关系冲突时才使用。shamefully-hoist 的意思是“羞耻地提升”，因为这种做法可能被认为是一种不合理的方式来解决依赖关系问题，但有时也是唯一的选择。

2. strict-peer-dependencies=false：这也是一个npm的配置选项，用于指定是否严格检查对等依赖关系。对等依赖关系是指，一个包需要另一个包的特定版本才能正常工作，而这个特定版本在另一个包的依赖中指定。如果 strict-peer-dependencies 设置为 true，则当依赖项的版本不匹配时，npm 会报错并拒绝安装。如果设置为 false，则npm将忽略对等依赖关系的版本要求，仅检查普通依赖关系的版本要求。

3. shell-emulator=true：这是一个模拟终端的配置选项，通常用于模拟命令行操作系统的行为。在一些情况下，需要使用模拟终端来运行一些程序或者脚本，以达到与实际终端相同的效果。shell-emulator=true 意味着启用模拟终端，因此在程序运行时会模拟终端界面，以便用户可以输入命令并查看输出。


