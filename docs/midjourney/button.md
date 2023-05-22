---
title: 画图
date: 2023-03-20
permalink: /pages/midjourney/button
---

## 接口说明

u1-u4,r,v1-v4 画图

## 在线调试地址 <a href='https://www.iiii.com/midjourney#/midjourney/AppController_button'>`https://www.iiii.com/midjourney#/midjourney/AppController_button`</a>

## 请求头

```JSON
{
  "accept":"application/json",
  "token":"",
  "Content-Type":"application/json"
}
```

## 请求参数

```JSON
{
/**button 类型包括v1-v4,r,u1-u4,枚举类型 */
buttonType:string
/**更新绘画id */
messageId:string
/**标识用户的id */
tag:string
/**是否加速 */
fast:boolean
}
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
