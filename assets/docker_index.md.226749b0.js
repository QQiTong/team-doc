import{_ as s,c as n,o as a,Q as p}from"./chunks/framework.ec44ce0e.js";const C=JSON.parse('{"title":"docker 常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"docker/index.md","lastUpdated":1684640616000}'),l={name:"docker/index.md"},o=p(`<h1 id="docker-常用命令" tabindex="-1">docker 常用命令</h1><p>以下是常用的 Docker 命令：</p><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td><code>docker build -t &lt;image-name&gt; .</code></td><td>在当前目录下构建一个新的 Docker 镜像，使用 <code>-t</code> 选项标记为 <code>&lt;image-name&gt;</code></td></tr><tr><td><code>docker run &lt;image-name&gt;</code></td><td>运行指定的 Docker 镜像</td></tr><tr><td><code>docker ps</code></td><td>列出所有正在运行的 Docker 容器</td></tr><tr><td><code>docker it</code></td><td>这是两个参数的组合。-i 表示以交互模式运行容器，即保持标准输入（STDIN）打开；-t 表示为容器分配一个伪终端（pseudo-TTY），以便于用户与容器进行交互。</td></tr><tr><td><code>docker ps -a</code></td><td>列出所有 Docker 容器，包括已经停止运行的容器</td></tr><tr><td><code>docker stop &lt;container-id&gt;</code></td><td>停止指定的 Docker 容器</td></tr><tr><td><code>docker rm &lt;container-id&gt;</code></td><td>删除指定的 Docker 容器</td></tr><tr><td><code>docker images</code></td><td>列出本地所有的 Docker 镜像</td></tr><tr><td><code>docker rmi &lt;image-id&gt;</code></td><td>删除指定的 Docker 镜像</td></tr><tr><td><code>docker login</code></td><td>登录到 Docker Hub 或其他 Docker Registry</td></tr><tr><td><code>docker push &lt;image-name&gt;</code></td><td>将指定的 Docker 镜像推送到 Docker Registry</td></tr><tr><td><code>docker pull &lt;image-name&gt;</code></td><td>从 Docker Registry 下载指定的 Docker 镜像</td></tr><tr><td><code>docker run --name &lt;container-name&gt; -d -p 80:8080 &lt;image-name&gt;</code></td><td>Docker 中运行一个容器 -d: 让容器在后台运行。-p 80:8080: 将容器内部的 8080 端口映射到主机的 80 端口，使得可以通过主机的 IP 地址和端口来访问容器中的应用程序 <code>container-name</code>:容器名称 <code>image-name</code>: 镜像名称</td></tr><tr><td><code>docker --help</code></td><td>查看更多的选项和子命令。</td></tr></tbody></table><h2 id="前台运行" tabindex="-1">前台运行</h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">image-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#9ECBFF;">:</span><span style="color:#79B8FF;">8080</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">image-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">image-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#032F62;">:</span><span style="color:#005CC5;">8080</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">image-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="后台运行" tabindex="-1">后台运行</h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">image-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#9ECBFF;">:</span><span style="color:#79B8FF;">8080</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">image-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">image-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#032F62;">:</span><span style="color:#005CC5;">8080</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">image-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="dockerfile-配置" tabindex="-1">Dockerfile 配置</h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node:lts-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">WORKDIR</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">COPY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./package.json</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">COPY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./package-lock.json</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--production</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/root/.npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/root/.pnpm-store</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/share/.cache</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/tmp/</span><span style="color:#79B8FF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">COPY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">EXPOSE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">CMD</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;pnpm&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;"> &quot;run&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;"> &quot;start-prod&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node:lts-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">WORKDIR</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">COPY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./package.json</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">COPY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./package-lock.json</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--production</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/root/.npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/root/.pnpm-store</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/share/.cache</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/tmp/</span><span style="color:#005CC5;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">COPY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">EXPOSE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">CMD</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;pnpm&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;"> &quot;run&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;"> &quot;start-prod&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="dockerignore-配置" tabindex="-1">.dockerignore 配置</h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">/node_modules</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">/node_modules</span></span>
<span class="line"><span style="color:#B392F0;">node_modules</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">**</span><span style="color:#24292E;">/node_modules</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">/node_modules</span></span>
<span class="line"><span style="color:#6F42C1;">node_modules</span></span>
<span class="line"></span></code></pre></div><h2 id="docker-不打印输出解决方案" tabindex="-1">docker 不打印输出解决方案</h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--progress=plain</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-cache</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">image-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--progress=plain</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-cache</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">image-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span></code></pre></div><p><a href="https://stackoverflow.com/questions/64804749/why-is-docker-build-not-showing-any-output-from-commands" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/64804749/why-is-docker-build-not-showing-any-output-from-commands</a></p>`,14),e=[o];function t(c,r,y,E,d,i){return a(),n("div",null,e)}const g=s(l,[["render",t]]);export{C as __pageData,g as default};