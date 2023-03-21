## 仓库服务器

54.255.143.110

1. 查找当前服务进程

```
例如
ps -ef|grep git
```

2. 按照端口查询进程占用情况

```
 lsof -i:8080
```

3. 单独查看内存使用情况的命令：free -m
4. 查看内存及cpu使用情况的命令：top  
也可以安装htop工具，这样更直观，

```
安装命令如下：
sudo apt-get install htop
```

安装完后，直接输入命令：htop
就可以看到内存或cpu的使用情况了。

5. 登录

```
ssh root@104.225.152.165 -p 26754
ssh -i key.pem root@IP (需要更改pem权限：chmod 600 xxxxx.pem)
ssh -i key.pem -p 33 ubuntu@xxx.xxx.xxx.xxx
```

6. 切换root
sudo passwd root

7. 查看当前文件夹大小状态
```du -h –max-depth=1```
8. pem登录

```
ssh -i yn_hg.pem root@149.129.251.102
```

9. 卸载

```
jdk:sudo apt purge openjdk-18-jre-headless
```

10. v2ray

```
apt-get update -y && apt-get install curl -y v2ray bash <(curl -s -L https://git.io/v2ray.sh)
```

11. kill all node progress

```
  killall -9 node
```
