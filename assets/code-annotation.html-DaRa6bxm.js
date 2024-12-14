import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as l}from"./app-LOP_SVZd.js";const n={};function e(h,i){return l(),a("div",null,i[0]||(i[0]=[t(`<p>Java 注释有三种主要类型：单行注释、多行注释和文档注释。每种注释类型都有其特定的用途和格式。</p><h2 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释"><span>单行注释</span></a></h2><p>单行注释以 <code>//</code> 开头，用于注释单行代码。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 这是一个单行注释</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 变量 x 被初始化为 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多行注释" tabindex="-1"><a class="header-anchor" href="#多行注释"><span>多行注释</span></a></h2><p>多行注释以 <code>/*</code> 开头，并以 <code>*/</code> 结束，可以跨多行使用。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">这是一个多行注释。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">它可以跨越多行进行注释。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">*/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> y </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文档注释" tabindex="-1"><a class="header-anchor" href="#文档注释"><span>文档注释</span></a></h2><p>文档注释以 <code>/**</code> 开头，并以 <code>*/</code> 结束，通常用于为类、方法和成员变量生成 API 文档。文档注释会被 JavaDoc 工具解析，用于生成HTML格式的文档。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 这是一个文档注释。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 它通常用于描述类、方法或变量。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 这是一个变量 z 的文档注释。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> z</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 这是一个方法的文档注释。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 这是参数 a 的描述。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 这是参数 b 的描述。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 返回值的描述。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文档注释常见的标签包括：</p><ul><li><code>@param</code>：描述方法的参数。</li><li><code>@return</code>：描述方法的返回值。</li><li><code>@throws</code> 或 <code>@exception</code>：描述方法可能抛出的异常。</li><li><code>@see</code>：提供参考链接。</li><li><code>@since</code>：说明某个功能从哪个版本开始存在。</li><li><code>@deprecated</code>：标记一个方法或类已过时。</li></ul><p>使用正确的注释可以使代码更易于理解和维护。</p>`,13)]))}const p=s(n,[["render",e],["__file","code-annotation.html.vue"]]),r=JSON.parse('{"path":"/java/basic/code-annotation.html","title":"代码注释","lang":"zh-CN","frontmatter":{"title":"代码注释","date":"2024-07-24T00:00:00.000Z","category":["基础知识"],"tag":["代码注释"],"order":3,"description":"Java 注释有三种主要类型：单行注释、多行注释和文档注释。每种注释类型都有其特定的用途和格式。 单行注释 单行注释以 // 开头，用于注释单行代码。 多行注释 多行注释以 /* 开头，并以 */ 结束，可以跨多行使用。 文档注释 文档注释以 /** 开头，并以 */ 结束，通常用于为类、方法和成员变量生成 API 文档。文档注释会被 JavaDoc ...","head":[["meta",{"property":"og:url","content":"https://hogskinkitty.line.pm/java/basic/code-annotation.html"}],["meta",{"property":"og:site_name","content":"cultivate-notes"}],["meta",{"property":"og:title","content":"代码注释"}],["meta",{"property":"og:description","content":"Java 注释有三种主要类型：单行注释、多行注释和文档注释。每种注释类型都有其特定的用途和格式。 单行注释 单行注释以 // 开头，用于注释单行代码。 多行注释 多行注释以 /* 开头，并以 */ 结束，可以跨多行使用。 文档注释 文档注释以 /** 开头，并以 */ 结束，通常用于为类、方法和成员变量生成 API 文档。文档注释会被 JavaDoc ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-30T13:27:05.000Z"}],["meta",{"property":"article:tag","content":"代码注释"}],["meta",{"property":"article:published_time","content":"2024-07-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-30T13:27:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码注释\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-30T13:27:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HogskinKitty\\",\\"url\\":\\"https://hogskinkitty.line.pm\\"}]}"]]},"headers":[{"level":2,"title":"单行注释","slug":"单行注释","link":"#单行注释","children":[]},{"level":2,"title":"多行注释","slug":"多行注释","link":"#多行注释","children":[]},{"level":2,"title":"文档注释","slug":"文档注释","link":"#文档注释","children":[]}],"git":{"createdTime":1722346025000,"updatedTime":1722346025000,"contributors":[{"name":"HogskinKitty","email":"zymdev@126.com","commits":1}]},"readingTime":{"minutes":1.33,"words":400},"filePathRelative":"java/basic/code-annotation.md","localizedDate":"2024年7月24日","autoDesc":true,"excerpt":"<p>Java 注释有三种主要类型：单行注释、多行注释和文档注释。每种注释类型都有其特定的用途和格式。</p>\\n<h2>单行注释</h2>\\n<p>单行注释以 <code>//</code> 开头，用于注释单行代码。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 这是一个单行注释</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> x </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 10</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> // 变量 x 被初始化为 10</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,r as data};