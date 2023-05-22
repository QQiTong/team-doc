import{_ as s,c as n,o as a,N as l}from"./chunks/framework.190a3809.js";const D=JSON.parse('{"title":"画图","description":"","frontmatter":{"title":"画图","date":"2023-03-20T00:00:00.000Z","permalink":"/pages/midjourney/imagine"},"headers":[],"relativePath":"midjourney/imagine.md","lastUpdated":1684768238000}'),p={name:"midjourney/imagine.md"},o=l(`<h2 id="接口说明" tabindex="-1">接口说明</h2><p>根据prompt 参数进行画图</p><h2 id="在线调试地址-https-www-iiii-com-midjourney-midjourney-appcontroller-imagine" tabindex="-1">在线调试地址 <a href="https://www.iiii.com/midjourney#/midjourney/AppController_imagine"><code>https://www.iiii.com/midjourney#/midjourney/AppController_imagine</code></a></h2><h2 id="请求头" tabindex="-1">请求头</h2><div class="language-JSON"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;accept&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;application/json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;token&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;application/json&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;accept&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;application/json&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;token&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;Content-Type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;application/json&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="请求参数" tabindex="-1">请求参数</h2><div class="language-JSON"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**提示词 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">prompt</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**英文提示词 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">promptEn</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**是否是加速模式 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">fast</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">boolean</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**标识用户的id */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">tag</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**模式 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">ar</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**是否是二次元风格 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">isNiji</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**提示词 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">prompt</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**英文提示词 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">promptEn</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**是否是加速模式 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">fast</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">boolean</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**标识用户的id */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">tag</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**模式 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">ar</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**是否是二次元风格 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">isNiji</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">boolean</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="响应结果" tabindex="-1">响应结果</h2><div class="language-JSON"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#6A737D;">/**图片状态.-2:(初始状态)队列满了,等待加入队列.-1: 已经提交,等待绘画回调.</span></span>
<span class="line"><span style="color:#6A737D;">0:正在绘画,会持续返回进度和图片.1:绘画成功,2:绘图失败 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">status</span><span style="color:#E1E4E8;">:</span><span style="color:#FDAEB7;font-style:italic;">number</span></span>
<span class="line"><span style="color:#6A737D;">/**画图原始提词 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">prompt:string</span></span>
<span class="line"><span style="color:#6A737D;">/**画图英文提词 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">promptEn:string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6A737D;">/**图片状态.-2:(初始状态)队列满了,等待加入队列.-1: 已经提交,等待绘画回调.</span></span>
<span class="line"><span style="color:#6A737D;">0:正在绘画,会持续返回进度和图片.1:绘画成功,2:绘图失败 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">status</span><span style="color:#24292E;">:</span><span style="color:#B31D28;font-style:italic;">number</span></span>
<span class="line"><span style="color:#6A737D;">/**画图原始提词 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">prompt:string</span></span>
<span class="line"><span style="color:#6A737D;">/**画图英文提词 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">promptEn:string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,9),t=[o];function e(c,i,r,y,E,d){return a(),n("div",null,t)}const g=s(p,[["render",e]]);export{D as __pageData,g as default};
