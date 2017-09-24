webpackJsonp([3],{"+xS3":function(e,t){e.exports=[{data:{title:"Elm First Impressions",url:"elm-first-impressions",description:"My impressions of Elm while building the customary To Do application.",tags:["elm","functional programming"],publicationDate:"July 22, 2017"},html:'<p>I have been interested in functional programming languages, particularly Elm,\nfor a while but have been hesitant to take the plunge and build something with one.\nAfter listening to quite a few episodes of <a href="https://elmtown.github.io/">Elm Town</a> and watching some talks on Elm,\nI decided to make the customary To Do application.\nI know. You can\'t get much more cliche than your first application with a new language being a To Do app,\nbut it allows you to test out the language relatively quickly.\nYou can find my code <a href="https://github.com/RyanWillDev/elm-todo">here</a>.</p>\n<h2 id="thedevelopmentexperience">The Development Experience</h2>\n<p>When writing Elm code I spent quite a lot of time trying to appease the compiler.\nI would make a change to the code and the compiler would tell me I did something wrong.\nI\'d make another change and the compiler would become angry again.</p>\n<p>It was a vicious cycle.</p>\n<p>You may think this would slow your development down tremendously. Well... You\'re right. It does, but the pay off is worth it.\nAfter I won my first major battle with the compiler and my app finally rendered in the browser,\nthe first thing I did was open the dev tools and start clicking around.\nI did not believe the compiler when it told me everything was fine.</p>\n<p>Coming from the JavaScript world, I was sure there was a runtime exception waiting to be thrown.\nI just needed to find it.\nBut after a few minutes of adding and completing to do\'s I could not break my app.\nThe compiler was right.</p>\n<p>With Elm you have a pretty strong guarantee that if your code compiles it will run without error.\nThis guarantee is made possible by Elm\'s type system and compiler working together to minimize the number of\nmistakes you make while building your application.</p>\n<h2 id="thetypesystem">The Type System</h2>\n<p>The type system was one of the main reasons I was interested in Elm and other functional languages.\nThe ability to describe and model your data in a more meaningful way was very appealing.\nIt is like being able to communicate with your application on a deeper level by describing exactly what you want\nthe shape of your data to be.</p>\n<p>For instance, in my to do application I define a to do as such:</p>\n<pre><code class="elm language-elm">type alias Todo =\n  { title : String\n  , completed : Bool\n  , id : Int\n  }\n</code></pre>\n<p>Comparing that to JavaScript, all we would have to work with is an object with default values.</p>\n<pre><code class="javascript language-javascript">const todoModel = {\n  title: \'\',\n  completed: false,\n  id: 0\n};\n</code></pre>\n<p>The type alias above does not seem particularly special at first, but the power becomes evident once you begin to leverage\nthat definition throughout the application.</p>\n<p>One example is how the Todo type is used inside the model\'s type definition.</p>\n<pre><code class="elm language-elm">type alias Model =\n  { newTodoTitle : String\n  , todoList : List Todo\n  , currentFilter : Filter\n  , prevId : Int\n  }\n</code></pre>\n<p>As you can see above, I was able to tell the Elm program that the todoList was not only a list but that the list was\nto contain only Todo\'s. Now Elm knows exactly what I want my list to contain.</p>\n<p>Having never worked with a statically typed language before Elm\'s syntax and features took a little getting used to.\nFortunately the Elm community and Evan Czaplicki, the creator of Elm, are focused on making Elm easy to use.\nThis means that while there is a slight learning curve to Elm it is not as drastic as other languages.</p>\n<p>One of the biggest benefits of Elm\'s type system is it encourages you to spend time up front determining the\nstructure of your application.\nAs developer\'s, we tend to want to get our hands on the keyboard and start building something as quickly as possible, which\ncan cause us to neglect forethought and planning.\nIt is nice to have something to remind you that those things are necessary.</p>\n<h2 id="theelmarchitecture">The Elm Architecture</h2>\n<p>Elm web applications have a preferred structure known as the Elm Architecture.\nIt consists of a series of functions (model, view, and update) that describe your app and the way it can change.</p>\n<p>A <strong>very</strong> brief explanation of the Elm Architecture is the model holds the data/state of your application,\nthe view function describes to the Elm virtual DOM what to render,\nand the update function receives messages from the view and returns a new model describing the updated state of your application.</p>\n<p>Having used Redux before and knowing it was inspired by the Elm Architecture, I had a basic understanding of what was going on.\nUnlike with Redux, you do not have to wire together the Elm Architecture. The language takes care of that for you.\nHonestly, this bothered me a little when starting on my app. I wanted to understand what was going on behind the scenes.\nOnce I accepted that Elm would take care of connecting things, working with the Elm Architecture was very pleasant.</p>\n<h2 id="thetooling">The Tooling</h2>\n<p>I want to start by saying the tooling around Elm is pretty great.\nThe packages for the Atom editor add a lot of cool features for working with Elm.\nI really enjoyed the inline compiler errors provided by the <a href="https://atom.io/packages/linter-elm-make">Elm Linter</a>,\nthe autocompletion provided by <a href="https://atom.io/packages/elmjutsu">Elmjutsu</a>,\nbut by far my favorite was <a href="https://atom.io/packages/elm-format">Elm Format</a>.</p>\n<p>Coming from a JavaScript background the formatting of Elm was a little strange at first.\nThe ability to just throw some Elm code on the page hit cmd-s and have Elm Format take care of the formatting\nwas great. It allowed me to maintain focus on trying to solve the current problem instead of getting caught up with formatting.</p>\n<p>I also found <a href="https://github.com/elm-lang/elm-reactor">Elm Reactor</a> to be an invaluable tool while working with Elm.\nTo have your code compiled on the fly and see your changes reflected in the browser made developing with Elm\nalmost as easy as modern JS development.</p>'},{data:{title:"Hello World",url:"hello-world",description:"The first entry in my journal gives a brief rundown of the technologies used to build this site.",tags:["vue","showdownjs","highlightjs","node","JavaScript"],publicationDate:"June 3, 2017"},html:'<p>Like most developers\' personal sites, this has been my playground and has gone through many rewrites.\nI wanted an excuse to try out <a href="https://vuejs.org/">Vue</a>, so I decided to rewrite this site from React.\nI really enjoyed working with Vue and learning some new tricks and techniques to make a "blog" without a database.</p>\n<p>I am already itching to do another rewrite, though. This time with Elm =)\nI guess that is the developer\'s eternal struggle.</p>\n<h2 id="vue">Vue</h2>\n<p>Overall working with Vue was very pleasant. The <a href="https://vuejs.org/v2/guide/single-file-components.html">.vue</a>\nfiles are a very cool way to organize your code on a component level.\nYou can combine all the HTML, CSS, and JavaScript that make up your component into a single file.\nThis allows you to seamlessly create reusable components.</p>\n<p>Like many of the modern frontend frameworks and libraries Vue has the <a href="https://github.com/vuejs/vue-cli">vue-cli</a>\nwhich makes setting up your build and dev environments trivially easy. It does the heavy lifting of setting up the\nWebpack configs including hot reloading and production build file.</p>\n<h2 id="myjournal">My Journal</h2>\n<p>I wanted a way to write a "blog" without having to store the entries on a server. Of course, I could have used a static site\ngenerator like <a href="https://jekyllrb.com/">Jekyll</a>, but I wanted to try out Vue.</p>\n<p>The solution I came up with was to write the entries in markdown and use Node to compile the markdown to HTML using <a href="http://showdownjs.github.io/demo/">Showdown.js</a>.\nOnce I have the HTML, I generate a JSON object made up of the markdown and some metadata about the post.\nI then import the JSON file into my Vue app so it is available to display.</p>\n<p>To add syntax highlighting for the code in the journal entries I used <a href="https://highlightjs.org/">Highlight.js</a>.\nWhen a JournalEntry component loads it finds all the code elements and uses highlightjs to add syntax highlighting.</p>\n<p>Building the Journal this way gave me some of the same benefits of using a static site generator like the posts being version controlled\nand not needing a server or database, but it also allowed me to give Vue a try. It also allowed me to get some practice in\nwith manipulating files and directories using Node.</p>'}]},"3vnW":function(e,t,a){"use strict";var n=a("+xS3"),o=a.n(n);t.a={name:"Journal",data:function(){return{selectedTag:""}},props:{journal:Array},methods:{capitalize:function(e){return e.split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(" ")},updateSelectedTag:function(e){this.selectedTag=e},filteredEntries:function(){var e=this;return this.selectedTag.length?o.a.filter(function(t){return t.data.tags.includes(e.selectedTag)}):o.a}}}},HVIQ:function(e,t,a){var n=a("L0Ft");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("0ef00c4a",n,!0)},L0Ft:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"ul[data-v-135e5874]{list-style:none;margin:0;padding:0}ul li[data-v-135e5874]{margin:32px 0}h3[data-v-135e5874]{color:#313233;display:inline-block;margin:0 12px 0 0}a[data-v-135e5874]{color:#313233;text-decoration:none}a:hover h3[data-v-135e5874]{text-decoration:underline}p[data-v-135e5874]{margin-top:8px}@media screen and (max-width:500px){.tags[data-v-135e5874]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.tags .tag[data-v-135e5874]{margin-top:8px}}.clear-btn[data-v-135e5874]{width:15%;-ms-flex-item-align:end;align-self:flex-end;text-align:center}.clear-btn[data-v-135e5874],.tag[data-v-135e5874]{background-color:#bcbcbc;border-radius:5px;cursor:pointer;font-size:.8em;font-weight:700;margin-right:8px;padding:5px}.clear-btn[data-v-135e5874]:hover,.tag[data-v-135e5874]:hover{padding:8px;text-decoration:underline}.pub-date[data-v-135e5874]{color:#7c7f81;font-size:.85em;margin-top:8px}",""])},UZqC:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h1",{staticClass:"section-head"},[e._v("Journal")]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedTag,expression:"selectedTag"}],staticClass:"clear-btn",on:{click:function(t){e.updateSelectedTag("")}}},[e._v("See All Entries")]),a("ul",e._l(e.filteredEntries(),function(t){return a("li",[a("router-link",{attrs:{to:t.data.url,append:""}},[a("h3",[e._v(e._s(t.data.title))]),a("span",{staticClass:"pub-date"},[e._v(e._s(t.data.publicationDate))])]),a("p",[e._v(e._s(t.data.description))]),a("div",{staticClass:"tags"},e._l(t.data.tags,function(t){return a("span",{staticClass:"tag",on:{click:function(a){e.updateSelectedTag(t)}}},[e._v(e._s(e.capitalize(t)))])}))],1)}))])},o=[],i={render:n,staticRenderFns:o};t.a=i},wu2r:function(e,t,a){"use strict";function n(e){a("HVIQ")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("3vnW"),i=a("UZqC"),s=a("VU/8"),r=n,l=s(o.a,i.a,r,"data-v-135e5874",null);t.default=l.exports}});
//# sourceMappingURL=index.dbb5aaa96d2a57502610.js.map