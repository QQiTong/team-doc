import{_ as s,c as n,o as a,N as l}from"./chunks/framework.190a3809.js";const B=JSON.parse('{"title":"画图","description":"","frontmatter":{"title":"画图","date":"2023-03-20T00:00:00.000Z","permalink":"/pages/midjourney/webhook"},"headers":[],"relativePath":"midjourney/webhook.md","lastUpdated":1684769101000}'),p={name:"midjourney/webhook.md"},o=l(`<h2 id="接口说明" tabindex="-1">接口说明</h2><p>Midjourney画图成功后返回的结果会发送到你配置的webhook url上</p><h2 id="响应结果" tabindex="-1">响应结果</h2><div class="language-JSON"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#6A737D;">/**消息id,button需要这个id,当执行u1-u1,让,v1-v4需要这个字段作为标识 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">messageId</span><span style="color:#E1E4E8;">:</span><span style="color:#FDAEB7;font-style:italic;">string</span></span>
<span class="line"><span style="color:#6A737D;">/**图片的宽高 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">width</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**图片的宽高 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">height</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**图片的阿里云oss的url,url拼接上(?x-oss-process=style/scale512),为缩略图*/</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:string</span></span>
<span class="line"><span style="color:#6A737D;">/**图片状态.-2:队列满了,等待加入队列.-1: 已经提交,等待绘画回调.0:正在绘画,会持续返回进度和图片.1:绘画成功,2:绘图失败 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**图片进度 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">progress</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**放大u1.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">u</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**放大u2.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">u</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**放大u3.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">u</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**放大u4.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">u</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**r重绘.操作状态.1:已执行.0位执行.可反复执行 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">r</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**v1重绘.操作状态.1:已执行.0位执行.可反复执行 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">v</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**v2重绘.操作状态.1:已执行.0位执行.可反复执行 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">v</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**v3重绘.操作状态.1:已执行.0位执行.可反复执行 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">v</span><span style="color:#79B8FF;">3</span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**v4重绘.操作状态.1:已执行.0位执行.可反复执行 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">v</span><span style="color:#79B8FF;">4</span><span style="color:#FDAEB7;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/** midjourney返回的结果*/</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">reason:string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6A737D;">/**消息id,button需要这个id,当执行u1-u1,让,v1-v4需要这个字段作为标识 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">messageId</span><span style="color:#24292E;">:</span><span style="color:#B31D28;font-style:italic;">string</span></span>
<span class="line"><span style="color:#6A737D;">/**图片的宽高 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">width</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**图片的宽高 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">height</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**图片的阿里云oss的url,url拼接上(?x-oss-process=style/scale512),为缩略图*/</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">url</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:string</span></span>
<span class="line"><span style="color:#6A737D;">/**图片状态.-2:队列满了,等待加入队列.-1: 已经提交,等待绘画回调.0:正在绘画,会持续返回进度和图片.1:绘画成功,2:绘图失败 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">status</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**图片进度 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">progress</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**放大u1.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">u</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**放大u2.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">u</span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**放大u3.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">u</span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**放大u4.操作状态.1:已执行.0位执行.放大图片针对单张图片只能执行一次. */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">u</span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**r重绘.操作状态.1:已执行.0位执行.可反复执行 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">r</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**v1重绘.操作状态.1:已执行.0位执行.可反复执行 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">v</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**v2重绘.操作状态.1:已执行.0位执行.可反复执行 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">v</span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**v3重绘.操作状态.1:已执行.0位执行.可反复执行 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">v</span><span style="color:#005CC5;">3</span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/**v4重绘.操作状态.1:已执行.0位执行.可反复执行 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">v</span><span style="color:#005CC5;">4</span><span style="color:#B31D28;font-style:italic;">:number</span></span>
<span class="line"><span style="color:#6A737D;">/** midjourney返回的结果*/</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">reason:string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,4),t=[o];function e(c,i,r,y,D,E){return a(),n("div",null,t)}const f=s(p,[["render",e]]);export{B as __pageData,f as default};
