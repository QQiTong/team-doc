1. ubuntu install node

```
 1. sudo apt update
 2. sudo apt-get install software-properties-common
 3. curl -sL https://deb.nodesource.com/setup_19.x | sudo -E bash -  # 修改版本号
 4. sudo apt-get install nodejs
 5  node -v
```

2. verdaccio

```
 1. npm install -g verdaccio --unsafe-perm

 2. mkdir work && cd work.
 3. verdaccio
 4. 修改 config.yaml ,增加listen: 0.0.0.0:4873

```

3. pm2

```
 1. npm install -g pm2 --unsafe-perm
 2. pm2 start verdaccio
 3. pm2 log  // 显示日志

```
