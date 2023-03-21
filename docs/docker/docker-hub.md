# 不使用docker hub

1 . 如果不想将Docker镜像推送到Docker Hub，可以通过以下步骤将其直接部署到Linux服务器：

将Docker镜像保存为.tar文件

您可以使用以下命令将Docker镜像保存为.tar文件：

```sh
docker save -o image.tar <image_name>
```

其中，<image_name>是您要保存的Docker镜像的名称。

2 .将.tar文件传输到目标Linux服务器

```sh
scp image.tar user@server_ip:/path/to/destination
```

其中，user是您在目标Linux服务器上的用户名，server_ip是目标Linux服务器的IP地址，/path/to/destination是您要将.tar文件传输到的目标路径。

3 .在目标Linux服务器上加载Docker镜像

```sh
docker load -i image.tar
```

4 . 运行Docker容器

```sh
docker run <options> <image_name>
```

其中，`<options>`是您想要传递给Docker容器的选项（例如，端口映射、环境变量等），`<image_name>`是您要在Docker容器中运行的镜像名称。
