---
title: 开始
date: 2023-03-20
permalink: /pages/midjourney/
---

## 开始

  该API 是 Midjourney 的社区扩展，提供对平台功能和服务的 API 访问。
  通过将该API集成到您的应用程序中，您可以利用 Midjourney 的强大功能来增强您自己产品的用户体验。

  您也可以访问
  
  <a href='https://www.iiii.com/image-square/index'>https://www.iiii.com/image-square/index</a> 体验一下！

### API接口通用地址

`https://www.iiii.com`


### 授权

  您需要发送邮件到<chenghaigen@iiii.com> 获取。邮件需要提供webhook url

#### Webhook URL

   绘图完成后的结果都会发送到您提供的这个webhookURL中.

   该webhook请求方式为`POST`

   `accept` application/json

#### token

   收到了您的正确的Webhook URL后,我们会给您一个“token”，所有 API 请求都需要此密钥。

## 请求头

```JSON
{
  "accept":"application/json",
  "token":"分配的token",
  "Content-Type":"application/json"
}
```

### 速率限制

  允许每 3 秒一个请求
