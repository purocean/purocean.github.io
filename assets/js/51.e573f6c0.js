(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{563:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("说起获取字符串长度，有人说那还不简单？直接 "),s("code",[t._v("string.length")]),t._v(" 不就好了。可实际上要正确获取字符串长度还是没那么容易的，不信往下看。")]),t._v(" "),s("h2",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),s("p",[t._v("看下面的例子")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --run--")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印结果: 3")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab𝄞'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印结果: 4")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab🇨🇳'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印结果: 6")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("可以看到，同样是三个字符，可最后打印的结果却不一样！")]),t._v(" "),s("p",[t._v("再看看其他语言情况怎样，比如 Python")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --run--")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印结果: 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab𝄞'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印结果: 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab🇨🇳'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印结果: 4")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("好吧，也不能完美处理")]),t._v(" "),s("h2",{attrs:{id:"问题原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题原因"}},[t._v("#")]),t._v(" 问题原因")]),t._v(" "),s("p",[t._v("其实这个问题在 MDN 文档中 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length",target:"_blank",rel:"noopener noreferrer"}},[t._v("String.length - JavaScript | MDN"),s("OutboundLink")],1),t._v(" 早已描述过。")]),t._v(" "),s("blockquote",[s("p",[t._v("JavaScript 使用 UTF-16 编码，该编码使用一个 16 比特的编码单元来表示大部分常见的字符，使用两个代码单元表示不常用的字符。因此 length 返回值可能与字符串中实际的字符数量不相同。")])]),t._v(" "),s("p",[t._v("也就是说对于一个字符，在 JS 内部是以 2 个字节来保存。但是有些字符串是 4 字节的，比如 "),s("code",[t._v("𝄞")]),t._v("，那么就会占用两个单元，甚至一些 Emoji 会占用更多！而 "),s("code",[t._v("String.length")]),t._v(" 是返回的字符单元数而不是字符数量，就产生了这个问题。")]),t._v(" "),s("p",[t._v("为什么 "),s("code",[t._v("String.length")]),t._v(" 要返回字符单元数而不是字符数量呢？同样的 Java 语言也是这样做的。我的想法是为了程序执行效率。针对变长的字符串，要返回正确的字符数量，需要扫描整个字符串。而返回单元长度，只需要将分配的内存数量除以每个单元长度就好了，不需要扫描整个字符串。")]),t._v(" "),s("h2",{attrs:{id:"字符串拆成数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串拆成数组"}},[t._v("#")]),t._v(" 字符串拆成数组")]),t._v(" "),s("p",[t._v("执行下面代码")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --run--")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab𝄞'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 打印结果: ["a","b","\\ud834","\\udd1e"]')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab𝄞'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 打印结果: ["\\ud834"]')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab𝄞'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 打印结果: ["a","b","𝄞"]')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab𝄞'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 打印结果: ["a","b","𝄞"]')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab🇨🇳'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 打印结果: ["a","b","🇨","🇳"]')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab🇨🇳'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 打印结果: ["a","b","🇨","🇳"]')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("可以看到，普通的 "),s("code",[t._v("split")]),t._v(" 方法和直接下标的方法，不能正确将字符串拆分成数组。而 ES6 的解构写法和 "),s("code",[t._v("Array.from")]),t._v(" 则能正确处理一部分的字符，但也不能完美处理某些 Emoji 的情况。")]),t._v(" "),s("p",[t._v("看 MDN 上提供的 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from#polyfill",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polyfill"),s("OutboundLink")],1),t._v(" 和 相关的 "),s("a",{attrs:{href:"https://tc39.es/ecma262/#sec-array.from",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES 规范"),s("OutboundLink")],1),t._v("，貌似也没处理这个问题。运行 Polyfill 的 "),s("code",[t._v("Array.from")]),t._v(" 方法也不能正确分割字符串，所以只能猜测是 Chrome 内部实现处理了一部分这种多字节字符问题。")]),t._v(" "),s("h2",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),s("ol",[s("li",[t._v("在 JavaScript 中，某些情况下 "),s("code",[t._v("String.length")]),t._v(" 返回的不是字符数量。同样的问题可能也存在其他语言中，如 Python 和 Java。")]),t._v(" "),s("li",[t._v("多字节字符的处理比较麻烦，看到的和内部保存的不一致或许算是正常行为。比如某些 Emoji 配合字体把两个字符分开或结合展示也是很正常。这里面有更深的学问，编辑器/浏览器难做呀，致敬 VSCode、Chrome。")]),t._v(" "),s("li",[s("code",[t._v("[...'ab𝄞']")]),t._v(" 或 "),s("code",[t._v("Array.from('ab𝄞')")]),t._v(" 可以在一定程度上解决一些实际问题。")]),t._v(" "),s("li",[t._v("需要注意"),s("strong",[t._v("安全问题")]),t._v("。比如程序不正确处理了多字节字符串的拆分拼接，导致字符逃逸；或者字符数量计算不正确，绕过一些限制，这方面可以再挖掘一下。")])]),t._v(" "),s("blockquote",[s("p",[t._v("本文由「"),s("a",{attrs:{href:"https://github.com/purocean/yn",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yank Note - 一款面向程序员的 Markdown 笔记应用"),s("OutboundLink")],1),t._v("」撰写")])])])}),[],!1,null,null,null);s.default=e.exports}}]);