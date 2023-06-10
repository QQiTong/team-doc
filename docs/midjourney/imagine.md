---
title: 画图
date: 2023-03-20
permalink: /pages/midjourney/imagine
---

## 接口说明

  根据promptEn画图,如果网站需要把命令分开例如--ar,可以调用该接口

## 请求方式
  
<Badge type="tip" text="POST" />

## 请求地址

`/draw/midjourney/imagine`

## 请求参数

| 字段           | 类型       | 默认值            | 必填   | 备注                                                                         |
| -------------- | ---------- | -------------- | ----------- | ---------------------------------------------------------------------------- |
| prompt         | string     | beautiful girl    | 否         | 提示词，返回id                                                               |
| promptEn       | string     | beautiful girl    | 是         | 英文提示词                                                                   |
| fast           | boolean    | false             | 是         | 是否是加速模式                                                               |
| tag            | string     | 用户标识          | 是         | 标识用户的id，32位的uuid                                                     |
| callBackUrl    | string     |                   | 否         | callBackUrl，回调地址。如果为空，将调用初始设置的callbackUrl                 |
| isNiji         | boolean    | 0                 | 否         | niji命令，true为niji模式                                                     |
| ar             | string     | 0                 | 否         | 模式比例，例如: 4:5, 2:3, 4:7, 1:1, 5:4, 3:2, 7:4。不支持其他任意模式，如16:9只能硬相似的7:4替代 |
| chaos          | number     | 0                 | 否         | chaos命令，取值0-100                                                         |
| stylize        | number     | 0                 | 否         | stylize命令，number类型，取值0-1000                                          |
| style          | string     |                   | 否         | style命令，如果否niji模式，取值为: cute, expressive, original, scenic。普通模式为: raw |
| isTile         | boolean    | 0                 | 否         | tile命令，true会增加该命令                                                    |
| iw             | number     | 0                 | 否         | iw命令，取值0-2。建议: 0, 0.5, 1, 1.5, 2                                    |
| imageList      | Array      |                   | 否         | 参考图集合                                                |
| extra          | string     |                   | 否         | 附加信息                                                  |

## 响应结果

| Key | Type | Description |
| --- | --- | --- |
| status | number | 图片状态.-2:初始状态,等待加入队列.-1: 已经提交,等待绘画回调.0:正在绘画,会持续返回进度和图片.1:绘画成功,2:绘图失败 |
| prompt | string | 画图原始提词 |
| promptEn | string | 画图英文提词 |

![image](https://cdn.midjourney.com/0857ba6d-803e-4c6d-be67-d78225dde975/0_2.webp)

Multi - dimensional paper kirigami craft, paper illustration, Chinese illustration on white background, Night, starry sky, Milky Way, above super wide agle, Thomas Kinkade, dreamy, 4K, romantic, trending on Artstation colorful vanilla oil, 3d relief
