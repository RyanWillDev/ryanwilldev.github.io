webpackJsonp([3],{"+xS3":function(e,t){e.exports=[{data:{title:"The Meaning of Truth",url:"js-truthy-falsy",description:"How to use the idea of truthy and falsy to write simpler code.",tags:["JavaScript"],publicationDate:"February 10, 2018"},html:'<p>JavaScript not only has the boolean types <code>true</code> and <code>false</code>, but it also has the idea of truthy and falsy values.\nThat is non-boolean values can be coerced to a boolean value when evaluated in a boolean context.\nThis can be an unfamiliar idea to new developers or those coming from other languages.</p>\n<h2 id="truthyvsfalsy">Truthy vs Falsy</h2>\n<p>In JavaScript all values that are not <code>""</code>, <code>undefined</code>, <code>null</code>, <code>0</code>, <code>NaN</code>, and, of course, <code>false</code> are considered true\nwhen evaluated as a boolean, that is placed in an <code>if</code> conditional.</p>\n<p>For example the following will evaluate to true and the statement will be logged to the console.</p>\n<pre><code class="javascript language-javascript">if (1) {\n  console.log(\'1 is true.\');\n}\n</code></pre>\n<p>So, why is this useful? The idea of truthy and falsy can be taken advantage of to write simpler code.</p>\n<p>Let\'s say you have the following array.</p>\n<pre><code class="javascript language-javascript">var arr = [ 1, 2, 3];\n</code></pre>\n<p>If you wanted to do something with the array only if it has elements inside it, you could use a comparison operator like <code>&gt;=</code>\nto check if the length of the array was greater than or equal to <code>1</code>.</p>\n<pre><code class="javascript language-javascript">if (arr.length &gt;= 1) {\n  // do stuff\n}\n</code></pre>\n<p>This works but can be simplified by checking for a truthy or falsy value.\nKnowing that any number other than <code>0</code> is truthy and that if the array is empty it\'s length property will be <code>0</code>, the <code>if</code> can be\nrewritten as the follows.</p>\n<pre><code class="javascript language-javascript">if (arr.length) {\n  // do stuff\n}\n</code></pre>\n<h2 id="explicitbooleancoercion">Explicit Boolean Coercion</h2>\n<p>If you every need to convert a truthy or fasly value to a a boolean you can just add a <code>!!</code> in front of the value.\nThe first <code>!</code> will convert the value to the opposite of what it was.\nAdding the second <code>!</code> will convert the value to a boolean of the same logical value as the original value.</p>\n<pre><code class="javascript language-javascript">!0 // true\n!!0 // false\n</code></pre>'},{data:{title:"Putting Service workers to work",url:"working-with-service-workers",description:"An introduction to Service workers. What they are, how they work, and what they can do for you.",tags:["PWA","Progressive Web App","PWA","service workers"],publicationDate:"January 13, 2018"},html:'<p>Service workers are event driven JavaScript files that can be registered as background tasks with the browser.</p>\n<h2 id="registeringaserviceworker">Registering a service worker</h2>\n<p>In order to get a service worker to do your bidding, you must first register it with the browser.</p>\n<pre><code class="javascript language-javascript">if (navigator.serviceWorker) {\n  navigator.serviceWorker\n    .register(\'/serviceWorker.js\')\n    .then(result =&gt; {\n      console.log(\'Service Worker registered!\', result);\n    });\n}\n</code></pre>\n<p>The check for <code>navigator.serviceWorker</code> is necessary because some browsers do not yet support service workers.\nI\'m looking at you Safari.</p>\n<p>For up to date info on what browser support check out the service worker page on <a href="https://caniuse.com/#feat=serviceworkers">caniuse.com</a>.</p>\n<h2 id="soserviceworkersarejustjs">So, service workers are just JS?</h2>\n<p>Well, not exactly. While you do write the service worker in JavaScript, they behave a bit differently than the JavaScript you\'re used to.\nThey run in a separate thread, and they do not have access to the DOM.</p>\n<p>Instead, service workers register a series of events to which they want to respond.\nThese events include lifecycle events (install, activate, and download) for the service worker itself as well as fetch events issued by the browser, among others.\nRegistering an event in the service worker should look like pretty standard JavaScript.</p>\n<p>Here is a very simple example of registering an event to watch for the service worker\'s install event which is called every time a new service worker is\ndownloaded by the brower.\nSelf in the snippet below references the service worker.</p>\n<pre><code class="javascript language-javascript">self.addEventListener(\'install\', event =&gt; {\n  console.log(\'Service Worker was installed!\', event);\n});\n</code></pre>\n<h2 id="reliableworker">Reliable worker</h2>\n<p>When you register an event listener for fetch events issued by the browser the service worker effectively becomes a proxy server, a middleman, between\nthe browser and the actually server that hosts the assets you want.</p>\n<p>Note that an AJAX request is not the same as a request sent using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a>.\nService workers can only intercept requests made using the Fetch API.</p>\n<p>You can choose with each request whether to cache the response, or, perhaps, not send the request to the server at all and respond with a previously\ncached response.\nYou can even load your app without an internet connection by caching the necessary assets when the service worker is installed.\nThis is a technique known as pre-caching the app shell.</p>\n<h2 id="workinginthebackground">Working in the background</h2>\n<p>Since service workers run as background tasks separate from the thread your nomral JavaScript runs in, they are able to listen and respond to events even when\nthe browser is not open.</p>\n<p>This enables features such as background sync and push notifications, which allow developers to create more resilent and immersive UIs.</p>'},{data:{title:"Web Manifest",url:"pwa-manifest",description:"The web manifest file is the first step on the road to a building a Progressive Web App.",tags:["PWA","Progressive Web App"],publicationDate:"January 4, 2018"},html:'<p>The manifest file is one of the basic building blocks of a Progressive Web App (PWA).\nIt is a simple JSON file stored in the root of your server\'s web directory that lists properties of your app, including the name, icons and theme colors, orientation of the app, and much more.</p>\n<p>Along with the other technologies, the manifest file allows you to create a web app with performance and experience that rivals that of native apps.\nUsers will be able to install the app on the device\'s home screen directly from the web, use the app when offline, and recieve push notifications.\nThis will allow companies to focus on building a single app that provides a great experience for web and native users.</p>\n<h2 id="browsersupport">Browser Support</h2>\n<p>At the time of writing, <a href="https://caniuse.com/#feat=web-app-manifest">caniuse</a> reports that only Chrome, Chrome for Android, and the Samsung browser support\nthe Web App Manifest.\nThose three browsers alone provide support for 59% of all internet users.</p>\n<p>The other top three browsers, Microsoft Edge, FireFox, and Safari (WebKit) are listed as in development.\nSo, it will only be a matter of time before we see support in those browsers.</p>\n<p>As with other features of a Progressive Web App, the lack of browser support is not a deterrent.\nThese features only enhance the experience of users on supported platforms and do not significantly degrade the experience on platforms without support.</p>'},{data:{title:"Nuxt Rewrite",url:"nuxt-rewrite",description:"A quick write up on how I converted this site from a single page Vue site to a static site with Nuxt.",tags:["vue","nuxt"],publicationDate:"October 31, 2017"},html:'<p>Recently I converted this site from a single page Vue app to a static site generated with Nuxt.\nThe decision to do so was motivated by a few factors, but in the end it was the ability to generate a static site that convinced me.\nWell, that and every developer\'s weakness - curiosity.</p>\n<h2 id="whatisnuxt">What is Nuxt?</h2>\n<p><a href="https://nuxtjs.org/guide">Nuxt</a> is a framework for easily creating Universal or Server Rendered apps with <a href="https://vuejs.org/">Vue</a>.\n It is inspired by the framework <a href="https://zeit.co/blog/next2">Next</a> from Zeit.</p>\n<p>Nuxt also provides the ability to generate a static version of your site.\nThis feature is similar to <a href="https://jekyllrb.com/">Jekyll</a>, but allows you to use the full power of Vue and related tools like Vuex and Vue Router as well. The static site generated with Nuxt can be hosted on any static hosting provider; I used Github pages for this site.\nThe Nuxt team uses the same technique to generate their docs.</p>\n<h2 id="integratingnuxt">Integrating Nuxt</h2>\n<p>First step to integrating Nuxt was to install it in my app with <code>npm install nuxt --save</code>. After installing Nuxt, I had to remove some old dependencies installed with Vue app that were now redundant.</p>\n<p>Once the dependencies were straightened out, I needed to create the <a href="https://nuxtjs.org/guide/directory-structure">directory structure</a> Nuxt uses to automatically create routes.\nThis mostly consisted of moving the container component I already had into the layouts directory and moving the components that were acting as pages to the pages directory.\nAll the other components I moved to a new directory called components and imported them as needed into the components in the Nuxt directories.</p>\n<h2 id="configuringnuxt">Configuring Nuxt</h2>\n<p>By default Nuxt is configured to handle many things for you.\nAny changes can be added easily by editing the <a href="https://nuxtjs.org/guide/configuration">nuxt.config.js</a>.</p>\n<p>I used the router property of the Nuxt config to add a class to my active links.\nI also added the following simple middleware that redirects visitors to the about route from the root of the site.</p>\n<pre><code class="javascript language-javascript">export default function({ route, redirect }) {\n  if (route.path === \'/\') redirect(\'/about\');\n}\n</code></pre>\n<p>Another convienent configuration available in the Nuxt config is the head property.\nThe head property allows you to define the default meta properties for you app.\nThis can be used in combination with the head method Nuxt adds to your components to very simply update the meta tags per page.\nI use this technique to update the Open Graph meta tags on my journal entries.</p>\n<h2 id="staticsitewithnuxt">Static Site with Nuxt</h2>\n<p>Generating a static site using Nuxt was pretty straight forward.\nI only ran into one relatively small and easy to fix issue.\nNavigating to a journal entry once on the site worked fine, but if you refreshed the page you would get a 404 error.\nThis was because by default Nuxt only generates routes for the root of your static site.\nIf you want to add dynamic routes or routes with dynamic params you have to add a tiny tweak to the config file.</p>\n<p>For my site, I wanted to add a dynamic param for each journal entry.\nThat is <code>/journal/:titleOfEntry</code>. Adding the following snippet to my config allowed the desired routes to be generated.</p>\n<pre><code class="javascript language-javascript">generate: {\n  routes() {\n    return new Promise(resolve =&gt; resolve(journal.map(entry =&gt;\n      ({ route: `journal/${entry.data.url}`, payload: entry }))));\n  },\n</code></pre>\n<p>The route property in the object above is required and used by Nuxt to generate the dynamic routes.\nThe payload property is optional and is used to provide data to you components during the generation.\nAny data provided in the payload property is passed to the the asyncData method, which Nuxt adds to your page components and is called when the component is rendered server side or during the static site generation.</p>\n<p>Async data is also called just before navigating to the route that renders the page component.\nThough in this case, it is not provided the payload.\nAn alternative method for getting the data will need to be provided when payload is false.\nHere is the asyncData method from my journalEntry component.</p>\n<pre><code class="javascript language-javascript">async asyncData({ payload, params }) {\n  return {\n    entry: payload\n      || journal.find(entry =&gt; entry.data.url === params.journalEntry),\n  };\n},\n</code></pre>\n<h2 id="conclusion">Conclusion</h2>\n<p>Overall switching to Nuxt was easy and pretty straightforward.\nThe ability to statically generate your site is very neat feature.\nAn easy to use, static blog framework is just asking to be built on top of Nuxt.</p>\n<p>Hmmm… 🤔 Maybe someday.</p>\n<p>In the meantime, if I happen to find myself needing a way to render a future project on the server I will definitely be reaching for Nuxt.</p>'},{data:{title:"Help! I commited to the wrong branch.",url:"commit-wrong-branch",description:"Everyone's made their commits to the wrong branch at least once. Here is a simple fix.",tags:["git","cli"],publicationDate:"September 30, 2017"},html:'<p>At <a href="https://metova.com">Metova</a> we use git flow when making changes to our codebase.\nThat is when adding a feature or fixing a bug, we branch from develop to create a feature or bugfix branch and merge back into develop when our work is complete.\nThis is probably a familar process to most of you.</p>\n<p>Something else that might be familar is completing your feature preparing, to push your changes, and realizing your 12 commits were made on develop.\nNow, if you\'re anything like me git can still be a little intimidating when trying to fix your errors.\nHave no fear, though. This particular screw up is very easy to fix.</p>\n<p>First, create a feature or bugfix branch from develop. Then, reset develop back to where it should be.</p>\n<pre><code class="bash language-bash">git branch &lt;name-of-new-branch&gt;\n\n# find the sha if you don\'t already know it.\ngit log\n\ngit reset &lt;SHA-to-go-back-to&gt; --hard\n</code></pre>\n<p>That\'s it. Now your new branch will contain the commits you made on develop and develop will be back where you want it.</p>'},{data:{title:"Elm First Impressions",url:"elm-first-impressions",description:"My impressions of Elm while building the customary To Do application.",tags:["elm","functional programming"],publicationDate:"July 22, 2017"},html:'<p>I have been interested in functional programming languages, particularly Elm,\nfor a while but have been hesitant to take the plunge and build something with one.\nAfter listening to quite a few episodes of <a href="https://elmtown.github.io/">Elm Town</a> and watching some talks on Elm,\nI decided to make the customary To Do application.\nI know. You can\'t get much more cliche than your first application with a new language being a To Do app,\nbut it allows you to test out the language relatively quickly.\nYou can find my code <a href="https://github.com/RyanWillDev/elm-todo">here</a>.</p>\n<h2 id="thedevelopmentexperience">The Development Experience</h2>\n<p>When writing Elm code I spent quite a lot of time trying to appease the compiler.\nI would make a change to the code and the compiler would tell me I did something wrong.\nI\'d make another change and the compiler would become angry again.</p>\n<p>It was a vicious cycle.</p>\n<p>You may think this would slow your development down tremendously. Well… You\'re right. It does, but the pay off is worth it.\nAfter I won my first major battle with the compiler and my app finally rendered in the browser,\nthe first thing I did was open the dev tools and start clicking around.\nI did not believe the compiler when it told me everything was fine.</p>\n<p>Coming from the JavaScript world, I was sure there was a runtime exception waiting to be thrown.\nI just needed to find it.\nBut after a few minutes of adding and completing to do\'s I could not break my app.\nThe compiler was right.</p>\n<p>With Elm you have a pretty strong guarantee that if your code compiles it will run without error.\nThis guarantee is made possible by Elm\'s type system and compiler working together to minimize the number of\nmistakes you make while building your application.</p>\n<h2 id="thetypesystem">The Type System</h2>\n<p>The type system was one of the main reasons I was interested in Elm and other functional languages.\nThe ability to describe and model your data in a more meaningful way was very appealing.\nIt is like being able to communicate with your application on a deeper level by describing exactly what you want\nthe shape of your data to be.</p>\n<p>For instance, in my to do application I define a to do as such:</p>\n<pre><code class="elm language-elm">type alias Todo =\n  { title : String\n  , completed : Bool\n  , id : Int\n  }\n</code></pre>\n<p>Comparing that to JavaScript, all we would have to work with is an object with default values.</p>\n<pre><code class="javascript language-javascript">const todoModel = {\n  title: \'\',\n  completed: false,\n  id: 0\n};\n</code></pre>\n<p>The type alias above does not seem particularly special at first, but the power becomes evident once you begin to leverage\nthat definition throughout the application.</p>\n<p>One example is how the Todo type is used inside the model\'s type definition.</p>\n<pre><code class="elm language-elm">type alias Model =\n  { newTodoTitle : String\n  , todoList : List Todo\n  , currentFilter : Filter\n  , prevId : Int\n  }\n</code></pre>\n<p>As you can see above, I was able to tell the Elm program that the todoList was not only a list but that the list was\nto contain only Todo\'s. Now Elm knows exactly what I want my list to contain.</p>\n<p>Having never worked with a statically typed language before Elm\'s syntax and features took a little getting used to.\nFortunately the Elm community and Evan Czaplicki, the creator of Elm, are focused on making Elm easy to use.\nThis means that while there is a slight learning curve to Elm it is not as drastic as other languages.</p>\n<p>One of the biggest benefits of Elm\'s type system is it encourages you to spend time up front determining the\nstructure of your application.\nAs developer\'s, we tend to want to get our hands on the keyboard and start building something as quickly as possible, which\ncan cause us to neglect forethought and planning.\nIt is nice to have something to remind you that those things are necessary.</p>\n<h2 id="theelmarchitecture">The Elm Architecture</h2>\n<p>Elm web applications have a preferred structure known as the Elm Architecture.\nIt consists of a series of functions (model, view, and update) that describe your app and the way it can change.</p>\n<p>A <strong>very</strong> brief explanation of the Elm Architecture is the model holds the data/state of your application,\nthe view function describes to the Elm virtual DOM what to render,\nand the update function receives messages from the view and returns a new model describing the updated state of your application.</p>\n<p>Having used Redux before and knowing it was inspired by the Elm Architecture, I had a basic understanding of what was going on.\nUnlike with Redux, you do not have to wire together the Elm Architecture. The language takes care of that for you.\nHonestly, this bothered me a little when starting on my app. I wanted to understand what was going on behind the scenes.\nOnce I accepted that Elm would take care of connecting things, working with the Elm Architecture was very pleasant.</p>\n<h2 id="thetooling">The Tooling</h2>\n<p>I want to start by saying the tooling around Elm is pretty great.\nThe packages for the Atom editor add a lot of cool features for working with Elm.\nI really enjoyed the inline compiler errors provided by the <a href="https://atom.io/packages/linter-elm-make">Elm Linter</a>,\nthe autocompletion provided by <a href="https://atom.io/packages/elmjutsu">Elmjutsu</a>,\nbut by far my favorite was <a href="https://atom.io/packages/elm-format">Elm Format</a>.</p>\n<p>Coming from a JavaScript background the formatting of Elm was a little strange at first.\nThe ability to just throw some Elm code on the page hit cmd-s and have Elm Format take care of the formatting\nwas great. It allowed me to maintain focus on trying to solve the current problem instead of getting caught up with formatting.</p>\n<p>I also found <a href="https://github.com/elm-lang/elm-reactor">Elm Reactor</a> to be an invaluable tool while working with Elm.\nTo have your code compiled on the fly and see your changes reflected in the browser made developing with Elm\nalmost as easy as modern JS development.</p>'},{data:{title:"Hello World",url:"hello-world",description:"The first entry in my journal gives a brief rundown of the technologies used to build this site.",tags:["vue","showdownjs","highlightjs","node","JavaScript"],publicationDate:"June 3, 2017"},html:'<p>Like most developers\' personal sites, this has been my playground and has gone through many rewrites.\nI wanted an excuse to try out <a href="https://vuejs.org/">Vue</a>, so I decided to rewrite this site from React.\nI really enjoyed working with Vue and learning some new tricks and techniques to make a "blog" without a database.</p>\n<p>I am already itching to do another rewrite, though. This time with Elm =)\nI guess that is the developer\'s eternal struggle.</p>\n<h2 id="vue">Vue</h2>\n<p>Overall working with Vue was very pleasant. The <a href="https://vuejs.org/v2/guide/single-file-components.html">.vue</a>\nfiles are a very cool way to organize your code on a component level.\nYou can combine all the HTML, CSS, and JavaScript that make up your component into a single file.\nThis allows you to seamlessly create reusable components.</p>\n<p>Like many of the modern frontend frameworks and libraries Vue has the <a href="https://github.com/vuejs/vue-cli">vue-cli</a>\nwhich makes setting up your build and dev environments trivially easy. It does the heavy lifting of setting up the\nWebpack configs including hot reloading and production build file.</p>\n<h2 id="myjournal">My Journal</h2>\n<p>I wanted a way to write a "blog" without having to store the entries on a server. Of course, I could have used a static site\ngenerator like <a href="https://jekyllrb.com/">Jekyll</a>, but I wanted to try out Vue.</p>\n<p>The solution I came up with was to write the entries in markdown and use Node to compile the markdown to HTML using <a href="http://showdownjs.github.io/demo/">Showdown.js</a>.\nOnce I have the HTML, I generate a JSON object made up of the markdown and some metadata about the post.\nI then import the JSON file into my Vue app so it is available to display.</p>\n<p>To add syntax highlighting for the code in the journal entries I used <a href="https://highlightjs.org/">Highlight.js</a>.\nWhen a JournalEntry component loads it finds all the code elements and uses highlightjs to add syntax highlighting.</p>\n<p>Building the Journal this way gave me some of the same benefits of using a static site generator like the posts being version controlled\nand not needing a server or database, but it also allowed me to give Vue a try. It also allowed me to get some practice in\nwith manipulating files and directories using Node.</p>'}]},"6Ptt":function(e,t){function a(e){return e.split(" ").join("-")}function n(e){return e.split("-").join(" ")}e.exports={formatTagForJournalSearch:n,formatTagForUrl:a}},"86GN":function(e,t,a){"use strict";var n=a("Xxa5"),o=a.n(n),r=a("exGp"),i=a.n(r),s=a("+xS3"),l=a.n(s),h=a("6Ptt"),d=a.n(h);t.a={name:"SelectedTag",asyncData:function(){function e(e){return t.apply(this,arguments)}var t=i()(o.a.mark(function e(t){var a=t.payload,n=t.params;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{journal:a||l.a.filter(function(e){return e.data.tags.indexOf(d.a.formatTagForJournalSearch(n.selectedTag))>-1})});case 1:case"end":return e.stop()}},e,this)}));return e}(),methods:{capitalize:function(e){return e.split(" ").map(function(e){return e[0].toUpperCase().concat(e.slice(1))}).join(" ")},formatTagForUrl:d.a.formatTagForUrl}}},"9zo0":function(e,t,a){"use strict";function n(e){a("rnJI")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("86GN"),r=a("yF40"),i=a("VU/8"),s=n,l=i(o.a,r.a,!1,s,"data-v-59e5ef4d",null);t.default=l.exports},Z4mO:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"ul[data-v-59e5ef4d]{list-style:none;margin:0;padding:0}ul li[data-v-59e5ef4d]{margin:32px 0}h3[data-v-59e5ef4d]{color:#313233;display:inline-block;margin:0 12px 0 0}a[data-v-59e5ef4d]{color:#313233;text-decoration:none}a:hover h3[data-v-59e5ef4d]{text-decoration:underline}p[data-v-59e5ef4d]{margin-top:8px}.tags .tag[data-v-59e5ef4d]{height:100%}@media screen and (max-width:500px){.tags[data-v-59e5ef4d]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.tags .tag[data-v-59e5ef4d]{margin-top:8px}}.clear-btn[data-v-59e5ef4d]{width:15%;-ms-flex-item-align:end;align-self:flex-end;text-align:center}.clear-btn[data-v-59e5ef4d],.tag[data-v-59e5ef4d]{background-color:#bcbcbc;border-radius:5px;cursor:pointer;font-size:.8em;font-weight:700;margin-right:8px;padding:5px}.clear-btn[data-v-59e5ef4d]:hover,.tag[data-v-59e5ef4d]:hover{padding:8px;text-decoration:underline}.pub-date[data-v-59e5ef4d]{color:#7c7f81;font-size:.85em;margin-top:8px}",""])},rnJI:function(e,t,a){var n=a("Z4mO");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("7ffd25aa",n,!0)},yF40:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h1",{staticClass:"section-head"},[e._v("Journal")]),a("nuxt-link",{staticClass:"clear-btn",attrs:{replace:"",to:"/journal"}},[e._v("\n    See All Entries\n  ")]),a("ul",e._l(e.journal,function(t,n){return a("li",{key:n},[a("nuxt-link",{key:n,attrs:{to:"/journal/entry/"+t.data.url}},[a("h3",[e._v(e._s(t.data.title))]),a("span",{staticClass:"pub-date"},[e._v(e._s(t.data.publicationDate))])]),a("p",[e._v(e._s(t.data.description))]),a("div",{staticClass:"tags"},e._l(t.data.tags,function(t,n){return a("nuxt-link",{key:n,staticClass:"tag",attrs:{to:"/journal/filtered/"+e.formatTagForUrl(t)}},[e._v("\n            "+e._s(e.capitalize(t))+"\n        ")])}))],1)}))],1)},o=[],r={render:n,staticRenderFns:o};t.a=r}});
//# sourceMappingURL=_selectedTag.05f73e2ba50856900a9f.js.map