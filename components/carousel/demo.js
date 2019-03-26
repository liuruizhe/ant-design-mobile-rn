webpackJsonp([35],{1145:function(n,s,a){n.exports={basic:a(1268)}},1268:function(n,s){n.exports={content:[["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/carousel/demo/basic.tsx"},"Demo Source Code"]]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/carousel/demo/basic.md",id:"components-carousel-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BasicCarouselExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">onHorizontalSelectedIndexChange</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">/* tslint:disable: no-console */</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'horizontal change to\'</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">onVerticalSelectedIndexChange</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">/* tslint:disable: no-console */</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'vertical change to\'</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> paddingHorizontal<span class="token punctuation">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>horizontal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>wrapper<span class="token punctuation">}</span></span>\n            <span class="token attr-name">selectedIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">autoplay</span>\n            <span class="token attr-name">infinite</span>\n            <span class="token attr-name">afterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onHorizontalSelectedIndexChange<span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>containerHorizontal<span class="token punctuation">,</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>containerHorizontal<span class="token punctuation">,</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n                styles<span class="token punctuation">.</span>containerHorizontal<span class="token punctuation">,</span>\n                <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'yellow\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>containerHorizontal<span class="token punctuation">,</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'aqua\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel <span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n                styles<span class="token punctuation">.</span>containerHorizontal<span class="token punctuation">,</span>\n                <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'fuchsia\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel <span class="token number">5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel will adjust height based on content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> paddingHorizontal<span class="token punctuation">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>vertical<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>wrapper<span class="token punctuation">}</span></span>\n            <span class="token attr-name">selectedIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">autoplay</span>\n            <span class="token attr-name">infinite</span>\n            <span class="token attr-name">afterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onVerticalSelectedIndexChange<span class="token punctuation">}</span></span>\n            <span class="token attr-name">vertical</span>\n          <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>containerVertical<span class="token punctuation">,</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>containerVertical<span class="token punctuation">,</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>containerVertical<span class="token punctuation">,</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'yellow\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>containerVertical<span class="token punctuation">,</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'aqua\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel <span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>containerVertical<span class="token punctuation">,</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'fuchsia\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Carousel <span class="token number">5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>\n            Use the height <span class="token keyword">of</span> the first child <span class="token keyword">as</span> the height <span class="token keyword">of</span> the Carousel\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  wrapper<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  containerHorizontal<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flexGrow<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n    justifyContent<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n    height<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  containerVertical<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flexGrow<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n    justifyContent<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n    height<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  text<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n    fontSize<span class="token punctuation">:</span> <span class="token number">36</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}}});