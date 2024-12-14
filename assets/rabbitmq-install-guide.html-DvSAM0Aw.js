import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as i,b as k,e,a as d,r as p,o as g,f as s}from"./app-LOP_SVZd.js";const o={};function b(c,a){const t=p("Tabs");return g(),r("div",null,[a[4]||(a[4]=i("h2",{id:"docker",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#docker"},[i("span",null,"Docker")])],-1)),a[5]||(a[5]=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"提示"),i("p",null,"本教程使用 RabbitMQ 3.12.14 版本，如需安装最新版本，请删除版本号则默认安装最新版本。")],-1)),a[6]||(a[6]=i("ol",null,[i("li",null,[i("strong",null,"安装步骤")])],-1)),k(t,{id:"16",data:[{id:"docker"},{id:"docker-compose"}]},{title0:e(({value:l,isActive:n})=>a[0]||(a[0]=[s("docker")])),title1:e(({value:l,isActive:n})=>a[1]||(a[1]=[s("docker-compose")])),tab0:e(({value:l,isActive:n})=>a[2]||(a[2]=[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -d"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," --name"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," rabbitmq"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"    -p"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," 5672:5672"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"    -p"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," 15672:15672"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"    -e"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," RABBITMQ_DEFAULT_USER=admin"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"    -e"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," RABBITMQ_DEFAULT_PASS=admin"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"    rabbitmq:3.12.14")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:e(({value:l,isActive:n})=>a[3]||(a[3]=[i("ul",null,[i("li",null,[s("创建"),i("code",null,"docker-compose.yml"),s(" 文件")])],-1),i("div",{class:"language-yaml line-numbers-mode","data-highlighter":"shiki","data-ext":"yaml","data-title":"yaml",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"version"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'3.8'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"services"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"  rabbitmq"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    image"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"rabbitmq:3.12.14")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    container_name"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"rabbitmq")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    restart"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"always")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    ports"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      - "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"5672:5672"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      - "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"15672:15672"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    environment"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"      RABBITMQ_DEFAULT_USER"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"admin")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"      RABBITMQ_DEFAULT_PASS"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"admin")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    command"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"rabbitmq-server")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    volumes"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      - "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"./rabbitmq/enabled_plugins:/etc/rabbitmq/enabled_plugins")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),i("ul",null,[i("li",null,"启动容器")],-1),i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"docker-compose"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -f"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," docker-compose.yml"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," up"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -d")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1)])),_:1}),a[7]||(a[7]=d(`<ol start="2"><li><strong>验证安装</strong></li></ol><ul><li><p>访问管理界面：http://localhost:15672</p></li><li><p>默认用户名/密码：admin/admin</p></li><li><p>登录成功后可以看到 RabbitMQ 的管理控制台界面，说明安装成功。</p></li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>如果无法访问管理界面,需要先启用管理插件:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq-plugins</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq_management</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><h2 id="centos" tabindex="-1"><a class="header-anchor" href="#centos"><span>CentOS</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><p>在安装 RabbitMQ 之前，您必须安装受支持的 Erlang/OTP 版本。</p></li><li><p>RabbitMQ 与 Erlang 版本兼容性，请参考 <a href="https://www.rabbitmq.com/docs/which-erlang" target="_blank" rel="noopener noreferrer">Erlang 版本要求</a></p></li></ul></div><ol><li><strong>安装 Erlang</strong></li></ol><ul><li><p>下载 Erlang RPM 包</p><ul><li><p><a href="https://github.com/rabbitmq/erlang-rpm/releases" target="_blank" rel="noopener noreferrer">GitHub 下载 Erlang RPM 包</a></p></li><li><p><a href="https://github.com/rabbitmq/erlang-rpm/releases" target="_blank" rel="noopener noreferrer">Gitee 下载 Erlang RPM 包</a></p></li></ul></li><li><p>SFTP 工具上传 Erlang RPM 包至 CentOS</p><p>以 /dev-ops 目录为例，将 Erlang RPM 包至 CentOS 的 /dev-ops 目录下</p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /dev-ops</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /dev-ops</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>命令安装</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ivh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> erlang-26.2.5.5-1.el9.x86_64.rpm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出结果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">warning:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> erlang-26.2.5.5-1.el9.x86_64.rpm:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Header</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> V4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> RSA/SHA256</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Signature,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 6026dfca:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> NOKEY</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Verifying...</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                          ################################# [100%]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Preparing...</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                          ################################# [100%]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Updating</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> installing...</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   1:erlang-26.2.5.5-1.el9</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            ################################# [100%]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>验证安装</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">erl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出结果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Erlang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (SMP,ASYNC_THREADS) (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">BEAM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) emulator version 14.2.5.4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>安装 RabbitMQ</strong></li></ol><ul><li><p>下载 RabbitMQ</p><ul><li><a href="https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.12.14/rabbitmq-server-3.12.14-1.el8.noarch.rpm" target="_blank" rel="noopener noreferrer">GitHub 下载</a></li></ul></li><li><p>SFTP 工具上传 Erlang RPM 包至 CentOS</p><p>以 /dev-ops 目录为例，将 Erlang RPM 包至 CentOS 的 /dev-ops 目录下</p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /dev-ops</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>命令安装</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ivh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq-server-3.12.14-1.el8.noarch.rpm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>启动和配置 RabbitMQ</li></ol><ul><li>启动</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>检查服务状态</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>设置 RabbitMQ 开机自启</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>配置管理插件</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq-plugins</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq_management</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>增加远程访问用户并配置权限</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>默认用户名/密码 guest/guest 只能本地登录，无法远程登录，所以需要增加用户并配置权限。</p></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmqctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add_user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmqctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set_permissions</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.*&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmqctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set_user_tags</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> administrator</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li><strong>验证安装</strong></li></ol><ul><li><p>访问管理界面：http://your_server_ip:15672</p></li><li><p>用户名/密码：admin/admin</p></li><li><p>登录成功后可以看到 RabbitMQ 的管理控制台界面，说明安装成功。</p></li></ul><h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>MacOS</span></a></h2><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h2><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><p><strong>端口占用</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lsof</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i:5672</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lsof</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i:15672</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>权限问题</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rabbitmqctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add_user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> password</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rabbitmqctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set_user_tags</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> administrator</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rabbitmqctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set_permissions</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.*&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.*&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.*&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>内存不足</strong></p><p>编辑 <code>/etc/rabbitmq/rabbitmq.conf</code>：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vm_memory_high_watermark.relative</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>更多信息请参考 <a href="https://www.rabbitmq.com/documentation.html" target="_blank" rel="noopener noreferrer">RabbitMQ 官方文档</a>。</p>`,44))])}const A=h(o,[["render",b],["__file","rabbitmq-install-guide.html.vue"]]),y=JSON.parse('{"path":"/middleware/rabbitmq/rabbitmq-install-guide.html","title":"安装指南","lang":"zh-CN","frontmatter":{"title":"安装指南","date":"2024-07-24T00:00:00.000Z","category":["中间件"],"tag":["RabbitMQ"],"order":2,"description":"Docker 提示 本教程使用 RabbitMQ 3.12.14 版本，如需安装最新版本，请删除版本号则默认安装最新版本。 安装步骤 验证安装 访问管理界面：http://localhost:15672 默认用户名/密码：admin/admin 登录成功后可以看到 RabbitMQ 的管理控制台界面，说明安装成功。 相关信息 如果无法访问管理界面,需要...","head":[["meta",{"property":"og:url","content":"https://hogskinkitty.line.pm/middleware/rabbitmq/rabbitmq-install-guide.html"}],["meta",{"property":"og:site_name","content":"cultivate-notes"}],["meta",{"property":"og:title","content":"安装指南"}],["meta",{"property":"og:description","content":"Docker 提示 本教程使用 RabbitMQ 3.12.14 版本，如需安装最新版本，请删除版本号则默认安装最新版本。 安装步骤 验证安装 访问管理界面：http://localhost:15672 默认用户名/密码：admin/admin 登录成功后可以看到 RabbitMQ 的管理控制台界面，说明安装成功。 相关信息 如果无法访问管理界面,需要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-27T13:30:56.000Z"}],["meta",{"property":"article:tag","content":"RabbitMQ"}],["meta",{"property":"article:published_time","content":"2024-07-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-27T13:30:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-27T13:30:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HogskinKitty\\",\\"url\\":\\"https://hogskinkitty.line.pm\\"}]}"]]},"headers":[{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":2,"title":"CentOS","slug":"centos","link":"#centos","children":[]},{"level":2,"title":"MacOS","slug":"macos","link":"#macos","children":[]},{"level":2,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"createdTime":1732714256000,"updatedTime":1732714256000,"contributors":[{"name":"HogskinKitty","email":"zymdev@126.com","commits":1}]},"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"middleware/rabbitmq/rabbitmq-install-guide.md","localizedDate":"2024年7月24日","autoDesc":true,"excerpt":"<h2>Docker</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>本教程使用 RabbitMQ 3.12.14 版本，如需安装最新版本，请删除版本号则默认安装最新版本。</p>\\n</div>\\n<ol>\\n<li><strong>安装步骤</strong></li>\\n</ol>\\n\\n<ol start=\\"2\\">\\n<li><strong>验证安装</strong></li>\\n</ol>\\n<ul>\\n<li>\\n<p>访问管理界面：http://localhost:15672</p>\\n</li>\\n<li>\\n<p>默认用户名/密码：admin/admin</p>\\n</li>\\n<li>\\n<p>登录成功后可以看到 RabbitMQ 的管理控制台界面，说明安装成功。</p>\\n</li>\\n</ul>"}');export{A as comp,y as data};
