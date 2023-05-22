---
title: 画图
date: 2023-03-20
permalink: /pages/midjourney/job
---

## 接口说明

根据tag,获取当前任务,一般不需要调用,正常任务会通过webhook返回

## 在线调试地址 <a href=''>`https://www.iiii.com/midjourney#/midjourney/AppController_refreshImage`</a>

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
/**消息id,button需要这个id,当执行u1-u1,让,v1-v4需要这个字段作为标识 */
messageId:string
/**图片的宽高 */
width :number
/**图片的宽高 */
height :number
/**图片的阿里云oss的url,url拼接上(?x-oss-process=style/scale512),为缩略图*/
url :string
/**图片状态.-2:队列满了,等待加入队列.-1: 已经提交,等待绘画回调.0:正在绘画,会持续返回进度和图片.1:绘画成功,2:绘图失败 */
status :number
/**图片进度 */
progress :number
tag: number;
/**放大u1.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */
u1 :number
/**放大u2.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */
u2 :number
/**放大u3.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */
u3 :number
/**放大u4.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */
u4 :number
/**r重绘.操作状态.1:已执行.0位执行.可反复执行 */
r :number
/**v1重绘.操作状态.1:已执行.0位执行.可反复执行 */
v1 :number
/**v2重绘.操作状态.1:已执行.0位执行.可反复执行 */
v2 :number
/**v3重绘.操作状态.1:已执行.0位执行.可反复执行 */
v3:number
/**v4重绘.操作状态.1:已执行.0位执行.可反复执行 */
v4:number
drawType:string
}
```
