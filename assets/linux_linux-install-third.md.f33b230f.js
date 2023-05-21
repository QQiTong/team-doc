import{_ as s,c as a,o as n,Q as e}from"./chunks/framework.18ddace7.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"linux/linux-install-third.md","lastUpdated":1684635539000}'),l={name:"linux/linux-install-third.md"},p=e(`<ol><li>ubuntu install node</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> 1. sudo apt update</span></span>
<span class="line"><span style="color:#e1e4e8;"> 2. sudo apt-get install software-properties-common</span></span>
<span class="line"><span style="color:#e1e4e8;"> 3. curl -sL https://deb.nodesource.com/setup_19.x | sudo -E bash -  # 修改版本号</span></span>
<span class="line"><span style="color:#e1e4e8;"> 4. sudo apt-get install nodejs</span></span>
<span class="line"><span style="color:#e1e4e8;"> 5  node -v</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> 1. sudo apt update</span></span>
<span class="line"><span style="color:#24292e;"> 2. sudo apt-get install software-properties-common</span></span>
<span class="line"><span style="color:#24292e;"> 3. curl -sL https://deb.nodesource.com/setup_19.x | sudo -E bash -  # 修改版本号</span></span>
<span class="line"><span style="color:#24292e;"> 4. sudo apt-get install nodejs</span></span>
<span class="line"><span style="color:#24292e;"> 5  node -v</span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div><ol start="2"><li>verdaccio</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> 1. npm install -g verdaccio --unsafe-perm</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"> 2. mkdir work &amp;&amp; cd work.</span></span>
<span class="line"><span style="color:#e1e4e8;"> 3. verdaccio</span></span>
<span class="line"><span style="color:#e1e4e8;"> 4. 修改 config.yaml ,增加listen: 0.0.0.0:4873</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> 1. npm install -g verdaccio --unsafe-perm</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> 2. mkdir work &amp;&amp; cd work.</span></span>
<span class="line"><span style="color:#24292e;"> 3. verdaccio</span></span>
<span class="line"><span style="color:#24292e;"> 4. 修改 config.yaml ,增加listen: 0.0.0.0:4873</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div><ol start="3"><li>pm2</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> 1. npm install -g pm2 --unsafe-perm</span></span>
<span class="line"><span style="color:#e1e4e8;"> 2. pm2 start verdaccio</span></span>
<span class="line"><span style="color:#e1e4e8;"> 3. pm2 log  // 显示日志</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> 1. npm install -g pm2 --unsafe-perm</span></span>
<span class="line"><span style="color:#24292e;"> 2. pm2 start verdaccio</span></span>
<span class="line"><span style="color:#24292e;"> 3. pm2 log  // 显示日志</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div>`,6),o=[p];function c(t,i,r,d,u,y){return n(),a("div",null,o)}const h=s(l,[["render",c]]);export{g as __pageData,h as default};
