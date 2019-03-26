webpackJsonp([53],{1246:function(t,o){t.exports={content:["section",["p","A lightweight feedback or tips, used to display content that does not interrupt user operations. Suitable for page transitions, data interaction and other scenes."],["h3","Rules"],["ul",["li",["p","Only one Toast is allowed at a time."]],["li",["p","Toast with Icon, 4-6 words is recommended.; Toast without Icon, the number of words should not exceed 14."]]]],meta:{category:"Components",type:"Feedback",title:"Toast",filename:"components/toast/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["ul",["li",["p",["code","Toast.success(content, duration, onClose, mask)"]]],["li",["p",["code","Toast.fail(content, duration, onClose, mask)"]]],["li",["p",["code","Toast.info(content, duration, onClose, mask)"]]],["li",["p",["code","Toast.loading(content, duration, onClose, mask)"]]],["li",["p",["code","Toast.offline(content, duration, onClose, mask)"]]]],["p","The component provide several static methods\uff1a"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","content"],["td","Toast content"],["td","React.Element or String"],["td","-"]],["tr",["td","duration"],["td","Delay time to close, which units is second"],["td","number"],["td","3"]],["tr",["td","onClose"],["td","A callback function Triggered when the Toast is closed"],["td","Function"],["td","-"]],["tr",["td","mask"],["td","Whether to show a transparent mask, which will prevent touch event of the whole page"],["td","Boolean"],["td","true"]]]],["blockquote",["p",["strong","Notice\uff1a"]," OnClose is invalid and Toast does not hide, If set duration = 0, toast will not auto hide, you have to manually do it."],["p","3.0.0 began to remove the previous ",["code","Toast.hide"]," method, ",["code","Toast.xxx"]," now returns a ",["code","key"]," to manually close the prompt using ",["code","Portal.remove(key)"]]],["pre",{lang:"js",highlighted:'  <span class="token keyword">import</span> <span class="token punctuation">{</span> Portal<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span>\n  <span class="token keyword">const</span> key Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'messsage\'</span><span class="token punctuation">)</span>\n  Portal<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>'},["code","  import { Portal, Toast } from '@ant-design/react-native'\n  const key Toast.loading('messsage')\n  Portal.remove(key)"]]]}}});