# docker 常用命令

以下是常用的 Docker 命令：
命令 | 描述
---|---
`docker build -t <image-name> .` | 在当前目录下构建一个新的 Docker 镜像，使用 `-t` 选项标记为 `<image-name>`
`docker run <image-name>` | 运行指定的 Docker 镜像
`docker ps` | 列出所有正在运行的 Docker 容器
`docker ps -a` | 列出所有 Docker 容器，包括已经停止运行的容器
`docker stop <container-id>` | 停止指定的 Docker 容器
`docker rm <container-id>` | 删除指定的 Docker 容器
`docker images` | 列出本地所有的 Docker 镜像
`docker rmi <image-id>` | 删除指定的 Docker 镜像`docker login` | 登录到 Docker Hub 或其他 Docker Registry`docker push <image-name>` | 将指定的 Docker 镜像推送到 Docker Registry
`docker pull <image-name>` | 从 Docker Registry 下载指定的 Docker 镜像

以上是常见的 Docker 命令，可以通过 `docker --help` 命令查看更多的选项和子命令。
最近项目中用到的

```sh
docker build -t <image-name> .
```

```sh
docker run --name <image-name> --rm -it  -p 80:80 <image-name>
```

## docker 不打印输出
```sh
docker build --progress=plain --no-cache -t easymeta-web .
```
https://stackoverflow.com/questions/64804749/why-is-docker-build-not-showing-any-output-from-commands
