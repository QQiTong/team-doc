import{_ as a,c as r,E as i,y as t,a as d,N as n,C as o,o as s}from"./chunks/framework.d8bce0c4.js";const T=JSON.parse('{"title":"画图","description":"","frontmatter":{"title":"画图","date":"2023-03-20T00:00:00.000Z","permalink":"/pages/midjourney/imagine"},"headers":[],"relativePath":"midjourney/originImagine.md","lastUpdated":1690336681000}'),l={name:"midjourney/originImagine.md"},c=t("h2",{id:"接口说明",tabindex:"-1"},"接口说明",-1),p=t("p",null,[d("与"),t("code",null,"/draw/midjourney/imagine"),d("的区别是,该接口传递的是原始promptEn,忽略isNiji,ar,参数")],-1),h=t("h2",{id:"请求方式",tabindex:"-1"},"请求方式",-1),m=n('<h2 id="请求地址" tabindex="-1">请求地址</h2><p><code>/draw/midjourney/origin/imagine</code></p><h2 id="请求参数" tabindex="-1">请求参数</h2><table><thead><tr><th>字段</th><th>类型</th><th>默认值</th><th>必填</th><th>备注</th></tr></thead><tbody><tr><td>prompt</td><td>string</td><td>beautiful girl</td><td>否</td><td>提示词，返回id</td></tr><tr><td>promptEn</td><td>string</td><td>beautiful girl</td><td>是</td><td>英文提示词</td></tr><tr><td>fast</td><td>boolean</td><td>false</td><td>是</td><td>是否是加速模式</td></tr><tr><td>tag</td><td>string</td><td>用户标识</td><td>是</td><td>标识用户的id，32位的uuid</td></tr><tr><td>callBackUrl</td><td>string</td><td></td><td>否</td><td>callBackUrl，回调地址。如果为空，将调用初始设置的callbackUrl</td></tr><tr><td>extra</td><td>string</td><td></td><td>否</td><td>附加信息</td></tr></tbody></table><h2 id="响应结果" tabindex="-1">响应结果</h2><table><thead><tr><th>Key</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>status</td><td>number</td><td>图片状态.-2:初始状态,等待加入队列.-1: 已经提交,等待绘画回调.0:正在绘画,会持续返回进度和图片.1:绘画成功,2:绘图失败</td></tr><tr><td>prompt</td><td>string</td><td>画图原始提词</td></tr><tr><td>promptEn</td><td>string</td><td>画图英文提词</td></tr></tbody></table><p><img src="https://cdn.midjourney.com/0857ba6d-803e-4c6d-be67-d78225dde975/0_2.webp" alt="image"></p><p>Multi - dimensional paper kirigami craft, paper illustration, Chinese illustration on white background, Night, starry sky, Milky Way, above super wide agle, Thomas Kinkade, dreamy, 4K, romantic, trending on Artstation colorful vanilla oil, 3d relief</p>',8);function _(g,u,b,y,f,k){const e=o("Badge");return s(),r("div",null,[c,p,h,i(e,{type:"tip",text:"POST"}),m])}const N=a(l,[["render",_]]);export{T as __pageData,N as default};