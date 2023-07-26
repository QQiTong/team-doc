---
title: 画图
date: 2023-03-20
permalink: /pages/midjourney/imagine
---

## 接口说明

  根据tag,获取当前任务,一般不需要调用,正常任务会通过callback返回

## 请求方式
  
<Badge type="tip" text="GET" />

## 请求地址

`draw/midjourney/find/by/{tag}`

## 请求参数

tag参数通过url路径传递

## 响应结果

| Key | Type | Description |
| --- | --- | --- |
| messageId | string | 消息id,button需要这个id,当执行u1-u1,让,v1-v4需要这个字段作为标识 |
| width | number | 图片的宽高 |
| height | number | 图片的宽高 |
| url | string | 图片的阿里云oss的url,url拼接上(?x-oss-process=style/scale512),为缩略图 |
| status | number | 图片状态.-2:队列满了,等待加入队列.-1: 已经提交,等待绘画回调.0:正在绘画,会持续返回进度和图片.1:绘画成功,2:绘图失败 |
| prompt | string | 画图原始提词 |
| promptEn | string | 画图英文提词 |
| progress | number | 图片进度 |
| tag | string | 唯一标识,用户标识用户请求,请使用uuid |
| u1 | number | 放大u1.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. |
| u2 | number | 放大u2.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. |
| u3 | number | 放大u3.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. |
| u4 | number | 放大u4.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. |
| r | number | r重绘.操作状态.1:已执行.0位执行.可反复执行 |
| v1 | number | v1重绘.操作状态.1:已执行.0位执行.可反复执行 |
| v2 | number | v2重绘.操作状态.1:已执行.0位执行.可反复执行 |
| v3 | number | v3重绘.操作状态.1:已执行.0位执行.可反复执行 |
| v4 | number | v4重绘.操作状态.1:已执行.0位执行.可反复执行 |
| drawType | string | 当前图片操作类型. u1 = u1,u2 = u2, u3 = u3, u4 = u4, r = r,v1 = v1,v2 = v2,v3 = v3,v4 = v4,draw = draw |