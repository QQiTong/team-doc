# docker 常用命令

以下是常用的 Docker 命令：
命令 | 描述
---|---
`docker build -t <image-name> .` | 在当前目录下构建一个新的 Docker 镜像，使用 `-t` 选项标记为 `<image-name>`
`docker run <image-name>` | 运行指定的 Docker 镜像
`docker ps` | 列出所有正在运行的 Docker 容器
`docker it`| 这是两个参数的组合。-i 表示以交互模式运行容器，即保持标准输入（STDIN）打开；-t 表示为容器分配一个伪终端（pseudo-TTY），以便于用户与容器进行交互。
`docker ps -a` | 列出所有 Docker 容器，包括已经停止运行的容器
`docker stop <container-id>` | 停止指定的 Docker 容器
`docker rm <container-id>` | 删除指定的 Docker 容器
`docker images` | 列出本地所有的 Docker 镜像
`docker rmi <image-id>` | 删除指定的 Docker 镜像
`docker login` | 登录到 Docker Hub 或其他 Docker Registry
`docker push <image-name>` | 将指定的 Docker 镜像推送到 Docker Registry
`docker pull <image-name>` | 从 Docker Registry 下载指定的 Docker 镜像
`docker run -d -p 80:80 <image-name>` | Docker 中运行一个容器 -d: 让容器在后台运行。-p 80:80: 将容器内部的 80 端口映射到主机的 80 端口，使得可以通过主机的 IP 地址和端口来访问容器中的应用程序 `image-name`: 使用的镜像名称
`docker --help` | 查看更多的选项和子命令。

## 前台运行

```sh
docker run --name <image-name> --rm -it -p 80:80 <image-name>
```

## 后台运行

```sh
docker run --name <image-name> -d -p 80:80 <image-name>
```

## Dockerfile 配置

```sh
FROM node:lts-alpine

RUN npm install pnpm -g

WORKDIR /app

COPY ./package.json /app

COPY ./package-lock.json /app

RUN pnpm install --production && rm -rf /root/.npm /root/.pnpm-store /usr/local/share/.cache /tmp/*

COPY . /app

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start-prod"]

```

## .dockerignore 配置

```sh
**/node_modules
*/node_modules
node_modules
```

## docker 不打印输出解决方案

```sh
docker build --progress=plain --no-cache -t easymeta-web .
```

<https://stackoverflow.com/questions/64804749/why-is-docker-build-not-showing-any-output-from-commands>
