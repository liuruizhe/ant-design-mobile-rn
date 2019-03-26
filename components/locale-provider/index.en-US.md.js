webpackJsonp([96],{1182:function(t,e){t.exports={content:["section",["p",["code","Provider"]," provides a uniform localization support for built-in text of components."],["h2","Usage"],["p",["code","Provider"]," takes use of ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"context"],", a feature of React, to accomplish global effectiveness by wrapping the app only once."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native/lib/locale-provider/en_US\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>enUS<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>'},["code","import enUS from '@ant-design/react-native/lib/locale-provider/en_US';\n\n...\n\nreturn <Provider locale={enUS}><App /></Provider>;"]],["p","We support English and Chinese temporarily, all locale packages can be found in ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/locale-provider/"},"here"],"."],["h3","Add a new language"],["p","If you can't find your language, you are welcome to create a locale package based on ",["a",{title:null,href:"(https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/locale-provider/en_US.tsx)"},"en_US"]," and send us a pull request."],["h3","Other localization needs"],["p","This component aims for localization of the built-in text, if you want to support other documents, we recommend using ",["a",{title:null,href:"https://github.com/yahoo/react-intl"},"react-intl"],", refer to ",["a",{title:null,href:"http://github.com/ant-design/intl-example"},"Intl demo 1"]," and ",["a",{title:null,href:"http://yiminghe.me/learning-react/examples/react-intl.html?locale=en-US"},"Intl demo 2"],"."]],meta:{category:"Components",title:"Provider",type:"Other",filename:"components/locale-provider/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Usage",title:"Usage"},"Usage"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","locale"],["td","anguage package setting, you can find the packages in this path: ",["code","@ant-design/react-native/lib/locale-provider/"]],["td","object"],["td","-"]],["tr",["td","theme"],["td","Theme customization ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx"},"theme"]],["td","object"],["td","-"]]]]]}}});