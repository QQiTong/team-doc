---
title: 画图
date: 2023-03-20
permalink: /pages/midjourney/refresh
---

## 接口说明

如果因为系统原因,出现画图失败可以重新提交绘画请求

## 在线调试地址

<a href='https://www.iiii.com/drawapi#/midjourney/AppController_refreshImage'>`https://www.iiii.com/drawapi#/midjourney/AppController_refreshImage`</a>

## 请求头

```JSON
{
  "accept":"application/json",
  "token":"",
  "Content-Type":"application/json"
}
```

## 请求参数

```
tag
```

## 响应结果

```JSON
{
/**其他事报错信息的错误码 */
statusCode :number;
/**返回成功这里是success,失败这里是报错信息 */
message:string;
/**返回数据正常的时候,这里是数据 */
data:object;
}
```