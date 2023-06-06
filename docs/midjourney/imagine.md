---
title: 画图
date: 2023-03-20
permalink: /pages/midjourney/imagine
---

## 接口说明

  根据prompt 参数进行画图
<!-- <Badge type="tip" text="POST" /> `https://www.iiii.com/midjourney/imagine` -->

## 在线调试地址 

<a href='https://www.iiii.com/drawapi#/midjourney/AppController_imagine'>`https://www.iiii.com/drawapi#/midjourney/AppController_imagine`</a>

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
  /**提示词 */
  prompt: string,
  /**英文提示词 */
  promptEn: string,
  /**是否是加速模式 */
  fast: boolean,
  /**标识用户的id */
  tag: string,
  /**模式 */
  ar: string,
  /**是否是二次元风格 */
  isNiji: boolean
}
```

## 响应结果

```JSON
{
/**图片状态.-2:(初始状态)队列满了,等待加入队列.-1: 已经提交,等待绘画回调.
0:正在绘画,会持续返回进度和图片.1:绘画成功,2:绘图失败 */
status:number
/**画图原始提词 */
prompt:string
/**画图英文提词 */
promptEn:string
}
```
