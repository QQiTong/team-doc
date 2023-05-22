import{_ as s,c as n,o as a,N as l}from"./chunks/framework.190a3809.js";const h=JSON.parse('{"title":"画图","description":"","frontmatter":{"title":"画图","date":"2023-03-20T00:00:00.000Z","permalink":"/pages/midjourney/waiting"},"headers":[],"relativePath":"midjourney/waiting.md","lastUpdated":1684772374000}'),p={name:"midjourney/waiting.md"},o=l(`<h2 id="接口说明" tabindex="-1">接口说明</h2><p>当前账户等待队列数量</p><h2 id="在线调试地址-https-www-iiii-com-midjourney-midjourney-appcontroller-waiting" tabindex="-1">在线调试地址 <a href="https://www.iiii.com/midjourney#/midjourney/AppController_waiting"><code>https://www.iiii.com/midjourney#/midjourney/AppController_waiting</code></a></h2><h2 id="请求头" tabindex="-1">请求头</h2><div class="language-JSON"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;accept&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;application/json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;token&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;application/json&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;accept&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;application/json&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;token&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;Content-Type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;application/json&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="响应结果" tabindex="-1">响应结果</h2><div class="language-JSON"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#6A737D;">/**其他事报错信息的错误码 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">statusCode</span><span style="color:#E1E4E8;"> :</span><span style="color:#FDAEB7;font-style:italic;">number;</span></span>
<span class="line"><span style="color:#6A737D;">/**返回成功这里是success,失败这里是报错信息 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">message:string;</span></span>
<span class="line"><span style="color:#6A737D;">/**返回数据正常的时候,这里是数据 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">data:number;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6A737D;">/**其他事报错信息的错误码 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">statusCode</span><span style="color:#24292E;"> :</span><span style="color:#B31D28;font-style:italic;">number;</span></span>
<span class="line"><span style="color:#6A737D;">/**返回成功这里是success,失败这里是报错信息 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">message:string;</span></span>
<span class="line"><span style="color:#6A737D;">/**返回数据正常的时候,这里是数据 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">data:number;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,7),t=[o];function e(c,i,r,y,E,d){return a(),n("div",null,t)}const _=s(p,[["render",e]]);export{h as __pageData,_ as default};
