# 停止/启动容器

```sh

CONTAINER_ID=$(docker ps -a -q --filter name=gateaway)

if [ ! -z $CONTAINER_ID ]; then
  docker stop $CONTAINER_ID
  echo "容器 $1 停止成功"
  docker start $CONTAINER_ID
  echo "容器 $1 重启成功"
else
  docker run --name gateaway -d -p 88:8848 gateaway
  echo "启动成功"
fi
```
