---
title: 画图
date: 2023-03-20
permalink: /pages/midjourney/imagine
---

## 接口说明

  外部调用:u1-u4,r,v1-v4画图

## 请求方式
  
<Badge type="tip" text="POST" />

## 请求地址

`/draw/midjourney/button`

## 请求参数


| Key | Type | Default Value | Description |
| --- | --- | --- | --- |
| buttonType | string | u2 | button 类型包括v1-v4,r,u1-u4,枚举类型 |
| messageId | string | 1105137800560513126 | 更新绘画id |
| tag | string | 用户标识 | 标识用户的id |
| fast | boolean | false | 是否加速 |
| callBackUrl | string | http://www.baidu.com | callBackUrl,回调地址,如果为空,会调用初始设置的callbackUrl |


## 响应结果

| Key | Type | Description |
| --- | --- | --- |
| statusCode | object | code:0,其他是报错信息的错误码 |
| message | object | 返回成功这里是success,失败这里是报错信息 |
| data | object | 返回数据正常的时候,这里是数据 |

![image](https://cdn.midjourney.com/f889911d-77f1-49b5-a299-64715b6d4d60/grid_0.png)

Wide view, behind the scenes, Ayutthaya large robot workshop, extra large, Fuji film, hyper-realism from 1970s Thai sci-fi movies, steam-powered aerial robot workshop army, maintenance soldiers.