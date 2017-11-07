export default {
  "id": 15637111,
  "title": "Flexbox and Grids: your layout’s best friends",
  "points": 282,
  "user": "reneherse",
  "time": 1509989919,
  "time_ago": "6 hours ago",
  "type": "link",
  "url": "https://aerolab.co/blog/flexbox-grids/",
  "domain": "aerolab.co",
  "comments": [{
    "id": 15638381,
    "level": 0,
    "user": "boubiyeah",
    "time": 1509997427,
    "time_ago": "4 hours ago",
    "content": "<p>Some quick rants.<p>CSS is almost as bad as PHP when it comes to naming. Most flex related properties are prefixed with flex-; but some aren&#x27;t (align-items, etc) so you now have tons of non prefixed properties that actually only work within a very specific context (vertical-align, etc) and there are no compilers to tell you which combinations don&#x27;t make sense or whether you have redundant properties.<p>IE11 has tons of bugs with flexbox; I had to remove a flexbox layout earlier because of that crappy browser (it ignores explicit&#x2F;inline width&#x2F;height set on flex children).<p>Otherwise it&#x27;s a great tool if used sparingly (heavily nested flexbox elements with lots of special properties start to become a bit hard to follow)",
    "comments": [{
      "id": 15638424,
      "level": 1,
      "user": "lwansbrough",
      "time": 1509997651,
      "time_ago": "4 hours ago",
      "content": "<p>I was using VS Code earlier today and used vertical-align in some case where it didn’t make sense and VS called it out. Such things do exist!<p>But I agree with your points. Despite its flaws, it is probably the best thing out there for creating visual layouts from code.",
      "comments": [{
        "id": 15638652,
        "level": 2,
        "user": "sillysaurus3",
        "time": 1509999298,
        "time_ago": "4 hours ago",
        "content": "<p>Webstorm is absolutely incredible. Everyone should try it. Seriously, `cd your-app &amp;&amp; brew cask install webstorm &amp;&amp; webstorm .`<p>Best IDE ever. Better than emacs. And I&#x27;ve loved emacs for a couple years, and Vim for 10 years before that. Webstorm even comes with a Vim plugin.<p>IntelliJ is really rocking it. Webstorm for webdev, Cursive for clojure (<a href=\"https:&#x2F;&#x2F;cursive-ide.com&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;cursive-ide.com&#x2F;</a>), PyCharm for python (<a href=\"https:&#x2F;&#x2F;www.jetbrains.com&#x2F;pycharm&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.jetbrains.com&#x2F;pycharm&#x2F;</a>)... every one of those IDEs feels amazing out of the box.<p>It sounds dumb, but just try it. You&#x27;ll get hooked on Webstorm and never want to go back. Example: press shift twice. It pops up a &quot;Search Everywhere&quot; box, and you can type filenames, symbol names, actions (Rename, etc)... it&#x27;s basically helm M-x, but way better.<p>You won&#x27;t ever feel like &quot;CSS names are bad!&quot; because you won&#x27;t ever need to remember anything. Want to center something? Just type &quot;align&quot; and usually webstorm pops up autocomplete with the right thing. And that&#x27;s true in every context: <a href=\"https:&#x2F;&#x2F;i.imgur.com&#x2F;jCAAesF.png\" rel=\"nofollow\">https:&#x2F;&#x2F;i.imgur.com&#x2F;jCAAesF.png</a><p>All of these IDEs are specializations of IntelliJ IDEA (<a href=\"https:&#x2F;&#x2F;www.jetbrains.com&#x2F;idea&#x2F;download&#x2F;#section=mac\" rel=\"nofollow\">https:&#x2F;&#x2F;www.jetbrains.com&#x2F;idea&#x2F;download&#x2F;#section=mac</a>). They specialize it for web and call it WebStorm, for Python and call it PyCharm, etc. But all the plugins and settings work in all the IDEs, so really the underlying awesomeness is IDEA.<p>At this point I trust IDEA enough to know that if I open any codebase, I can start navigating it right away. Doesn&#x27;t matter if it&#x27;s C++, ocaml, or VueJS. Typing shift-shift will always let me jump to definitions.<p>Yeah it costs money, but $13&#x2F;mo is super reasonble. Dropbox was similarly impactful on my life, and that was $10&#x2F;mo.",
        "comments": [{
          "id": 15639230,
          "level": 3,
          "user": "yscik",
          "time": 1510004181,
          "time_ago": "2 hours ago",
          "content": "<p>It also has 6000+ unresolved issues reported, a lot of them open for 3-4 years with little hope of getting fixed. They keep rolling out half-baked support for the trendiest new JS frameworks, while basic parts of the IDE are falling apart every day. (For example, when opening the mentioned &quot;Search Everywhere&quot; dialog, sometimes it just doesn&#x27;t receive focus. Good luck with that productivity.)<p>Meanwhile, after launch, the IDE grabs focus about six times while loading. Symbol navigation sometimes picks up random unrelated functions from ignored folders instead of the one sitting right beside the file, because it has the same name. Want autocomplete for that vertical-align&#x27;s value? It just throws up every possible value for any CSS property.<p>Pretty bad when code editors running in a browser engine are getting more usable than your paid product.",
          "comments": [{
            "id": 15639401,
            "level": 4,
            "user": "sillysaurus3",
            "time": 1510005757,
            "time_ago": "2 hours ago",
            "content": "<p>Yeah, the unresolved bug reports are pretty annoying. I ran into similar problems trying to get Live Edit working with AngularJS.<p><i>Symbol navigation sometimes picks up random unrelated functions from ignored folders instead of the one sitting right beside the file, because it has the same name.</i><p>Even after excluding a directory? If you have autogenerated build folders (e.g. dist&#x2F;, out&#x2F;, etc) you have to mark them as Excluded: <a href=\"https:&#x2F;&#x2F;i.imgur.com&#x2F;E2uXJzu.png\" rel=\"nofollow\">https:&#x2F;&#x2F;i.imgur.com&#x2F;E2uXJzu.png</a><p>Odd. I haven&#x27;t noticed that, but I&#x27;ll watch out for it.",
            "comments": [{
              "id": 15639605,
              "level": 5,
              "user": "yscik",
              "time": 1510007666,
              "time_ago": "an hour ago",
              "content": "<p>This usually happens from node_modules, marked as a library folder, so it&#x27;s indexed and might even be relevant, but it shouldn&#x27;t really be a better match than the one in the source. And it&#x27;s not even consistent.<p>Hope they&#x27;ll get their shit together, it used to be a pretty great IDE before these annoyances started piling up.",
              "comments": [{
                "id": 15639640,
                "level": 6,
                "user": "sillysaurus3",
                "time": 1510008009,
                "time_ago": "an hour ago",
                "content": "<p>Ah yeah, I&#x27;ve always excluded node_modules. That&#x27;s true though, it should probably be indexed.",
                "comments": []
              }]
            }]
          }]
        }, {
          "id": 15639190,
          "level": 3,
          "user": "teleclimber",
          "time": 1510003823,
          "time_ago": "3 hours ago",
          "content": "<p>I like Webstorm, it&#x27;s my primary dev environment.<p>But I can not praise its abilities as you do. My experience has been mixed. Sure it&#x27;s cool when it works well, but then its bugs are all the more painful. You expect intelligence and you get the opposite.<p>Take this bug I reported two years ago:\n<a href=\"https:&#x2F;&#x2F;youtrack.jetbrains.com&#x2F;issue&#x2F;WEB-19183\" rel=\"nofollow\">https:&#x2F;&#x2F;youtrack.jetbrains.com&#x2F;issue&#x2F;WEB-19183</a><p>It thinks &quot;y&quot; is a global if I put &quot;x.y = ...&quot; anywhere in my code. Genius!<p>Also, It&#x27;s lacking in its support for Vue Js. I get lots of red squiggles all over my code for perfectly valid Vue props, and PostCSS within single-page Vue component also is weak (no $variables support).",
          "comments": [{
            "id": 15639368,
            "level": 4,
            "user": "sillysaurus3",
            "time": 1510005461,
            "time_ago": "2 hours ago",
            "content": "<p>Hmm, FWIW Vue is my primary stack and I haven&#x27;t run into similar issues. Try this:<p>git clone <a href=\"https:&#x2F;&#x2F;github.com&#x2F;vuejs&#x2F;vue-hackernews-2.0\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;vuejs&#x2F;vue-hackernews-2.0</a> &amp;&amp; cd vue-hack* &amp;&amp; yarn &amp;&amp; webstorm .<p>shift-shift &quot;Item&quot; should show <a href=\"https:&#x2F;&#x2F;i.imgur.com&#x2F;AV1bbXG.png\" rel=\"nofollow\">https:&#x2F;&#x2F;i.imgur.com&#x2F;AV1bbXG.png</a><p>And `this.$store.` should show the proper completions:<p><a href=\"https:&#x2F;&#x2F;imgur.com&#x2F;a&#x2F;pjcNs\" rel=\"nofollow\">https:&#x2F;&#x2F;imgur.com&#x2F;a&#x2F;pjcNs</a><p>It&#x27;s possible that I&#x27;ve been getting along without the features that some other editor provides. Does VSCode have better Vue integration?",
            "comments": [{
              "id": 15639669,
              "level": 5,
              "user": "Frizi",
              "time": 1510008377,
              "time_ago": "an hour ago",
              "content": "<p>VSCode is indeed awesome for Vue. It supports pretty much any lang in any block properly, due to its support for embedded language contexts. If you have template lang=&quot;pug&quot; and pug grammar plugin, it just picks it up. Also Vetur extension adds a lot of autocompletes and typescript support.",
              "comments": []
            }, {
              "id": 15639521,
              "level": 5,
              "user": "teleclimber",
              "time": 1510006900,
              "time_ago": "2 hours ago",
              "content": "<p>My problem is more with CSS and template support.<p>Here is Webstorm complaining about in a legit Vue v-for statement in a .vue single-page component.<p>And second image is what it does when I try to use PostCSS variables.<p><a href=\"https:&#x2F;&#x2F;imgur.com&#x2F;a&#x2F;BNAa8\" rel=\"nofollow\">https:&#x2F;&#x2F;imgur.com&#x2F;a&#x2F;BNAa8</a>",
              "comments": [{
                "id": 15639601,
                "level": 6,
                "user": "sillysaurus3",
                "time": 1510007642,
                "time_ago": "an hour ago",
                "content": "<p>Aha! I see. Do you happen to have a repo I can clone to reproduce the problem? I&#x27;m interested in fixing that.<p>Vue&#x27;s tooling is context aware. It knows when you&#x27;re within a &lt;style scoped&gt; tag. I see that there&#x27;s a PostCSS plugin: <a href=\"https:&#x2F;&#x2F;i.imgur.com&#x2F;JTPlIEk.png\" rel=\"nofollow\">https:&#x2F;&#x2F;i.imgur.com&#x2F;JTPlIEk.png</a><p>Theoretically, the tooling should be able to use that plugin&#x27;s lexer rules. PostCSS already registers itself as a language (pcss) so Vue&#x27;s tooling logic should be: &quot;are we within a &lt;style scoped&gt; tag? search for PostCSS tooling; if if none found, use vanilla CSS.&quot;<p>It already does this for &lt;style lang=&quot;scss&quot;&gt;, so postcss should definitely work. The logic happens in <a href=\"https:&#x2F;&#x2F;github.com&#x2F;JetBrains&#x2F;intellij-plugins&#x2F;tree&#x2F;master&#x2F;vuejs&#x2F;src&#x2F;org&#x2F;jetbrains&#x2F;vuejs\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;JetBrains&#x2F;intellij-plugins&#x2F;tree&#x2F;master&#x2F;vu...</a> if you want to explore it.",
                "comments": [{
                  "id": 15639791,
                  "level": 7,
                  "user": "teleclimber",
                  "time": 1510009750,
                  "time_ago": "an hour ago",
                  "content": "<p>Yes I am using this PostCSS plugin: \n<a href=\"https:&#x2F;&#x2F;plugins.jetbrains.com&#x2F;plugin&#x2F;8578-postcss-support\" rel=\"nofollow\">https:&#x2F;&#x2F;plugins.jetbrains.com&#x2F;plugin&#x2F;8578-postcss-support</a><p>But it&#x27;s flawed. PostCSS is itself a host for plugins. So a WebStorm PostCSS plugin would need to allow user to select the PostCSS plugins that they are using.<p>Case in point: I use postcss-simple-vars but the WebStorm plugin assumes I use postcss-custom-properties. And so it fails me.",
                  "comments": []
                }]
              }]
            }]
          }]
        }, {
          "id": 15639149,
          "level": 3,
          "user": "amatecha",
          "time": 1510003497,
          "time_ago": "3 hours ago",
          "content": "<p>I&#x27;ve been using WebStorm (and IntelliJ IDEA) for the past couple years and love it. I have no intention of swapping to any other IDE unless I really have to.  Can definitely speak to the extreme convenience of instantly finding usages&#x2F;definitions, &quot;intellisense&quot; of func params, plugin architecture, super customizable settings, built-in language support and linting&#x2F;evaluation, refactoring assistance, live templates...  Just a godsend, to be frank.",
          "comments": []
        }, {
          "id": 15638848,
          "level": 3,
          "user": "SippinLean",
          "time": 1510001013,
          "time_ago": "3 hours ago",
          "content": "<p>&gt;a &quot;Search Everywhere&quot; box, and you can type filenames, symbol names, actions<p>&gt;Just type &quot;align&quot; and usually webstorm pops up autocomplete with the right thing<p>VS Code does both of these things, and is FOSS",
          "comments": [{
            "id": 15638970,
            "level": 4,
            "user": "sillysaurus3",
            "time": 1510002039,
            "time_ago": "3 hours ago",
            "content": "<p>Here&#x27;s a more persuasive demo: <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=15514285\" rel=\"nofollow\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=15514285</a><p><a href=\"https:&#x2F;&#x2F;imgur.com&#x2F;z2euynI\" rel=\"nofollow\">https:&#x2F;&#x2F;imgur.com&#x2F;z2euynI</a><p><a href=\"https:&#x2F;&#x2F;imgur.com&#x2F;vb4uDMw\" rel=\"nofollow\">https:&#x2F;&#x2F;imgur.com&#x2F;vb4uDMw</a><p><a href=\"https:&#x2F;&#x2F;imgur.com&#x2F;4Xv4BMb\" rel=\"nofollow\">https:&#x2F;&#x2F;imgur.com&#x2F;4Xv4BMb</a><p>It&#x27;s not so much that it has X feature or Y widget, but rather that the whole ecosystem feels cohesive. With emacs you sort of cobble together your configurations until you&#x27;re happy with it, and that&#x27;s very powerful -- it&#x27;s why it&#x27;s so successful. But there&#x27;s something to be said for having &quot;awesomeness out of the box&quot;. It&#x27;s why Spacemacs was so popular.<p>I hear you about FOSS. I was reeeeally hesitant to throw my time into yet another closed source clusterfuck. I grew up as a gamedev, and back in 2000 that meant you had to use Visual Studio. All of my VS skills are now completely obsolete. And whenever I ran into VS issues, I couldn&#x27;t debug it since it was closed source.<p>Two things convinced me IDEA is probably worthwhile:<p>1. They&#x27;re partially open source. <a href=\"https:&#x2F;&#x2F;github.com&#x2F;JetBrains&#x2F;intellij-community\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;JetBrains&#x2F;intellij-community</a> You can build that from source and run it, so you can at least see how most of the system is architected. You won&#x27;t be able to extend some of the closed-source plugins, but you get some of the benefits of FOSS.<p>2. Their tooling is their primary business model. When Microsoft lost their VS monopoly, Microsoft didn&#x27;t die. JetBrains&#x27; sole focus is making the tooling ecosystem work; they&#x27;re the Adobe of tooling.",
            "comments": []
          }, {
            "id": 15638935,
            "level": 4,
            "user": "Viper007Bond",
            "time": 1510001695,
            "time_ago": "3 hours ago",
            "content": "<p>VS Code is indeed nice (I use it as my quick file editor) but can&#x27;t quite match the IntelliJ products, although it can get decently close.",
            "comments": []
          }]
        }, {
          "id": 15639065,
          "level": 3,
          "user": "donut2d",
          "time": 1510002847,
          "time_ago": "3 hours ago",
          "content": "<p>You&#x27;ve got a JetBrains IDE working with OCaml? What plugin are you using with which IDE? The only plugin[1] I&#x27;ve seen seems to be 7 years out of date.<p>[1]: <a href=\"https:&#x2F;&#x2F;plugins.jetbrains.com&#x2F;plugin&#x2F;4986-ocaml-support\" rel=\"nofollow\">https:&#x2F;&#x2F;plugins.jetbrains.com&#x2F;plugin&#x2F;4986-ocaml-support</a>",
          "comments": [{
            "id": 15639267,
            "level": 4,
            "user": "sillysaurus3",
            "time": 1510004568,
            "time_ago": "2 hours ago",
            "content": "<p>I just built and installed <a href=\"https:&#x2F;&#x2F;github.com&#x2F;shawwn&#x2F;ocaml-ide\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;shawwn&#x2F;ocaml-ide</a><p><a href=\"https:&#x2F;&#x2F;i.imgur.com&#x2F;hhnvIhT.png\" rel=\"nofollow\">https:&#x2F;&#x2F;i.imgur.com&#x2F;hhnvIhT.png</a><p>It looks like it was written for 2016.1, but the latest is 2017.3. It&#x27;s throwing an exception, so some of the features are disabled. Still, the lexer rules seem to work, and it&#x27;s pretty straightforward to debug the problem.<p>(This is actually a great example: Intellij community is open source, and that&#x27;s what&#x27;s being used to build this plugin. Meaning you have access to all the relevant code. Debugging is really simple.)",
            "comments": []
          }, {
            "id": 15639125,
            "level": 4,
            "user": "sillysaurus3",
            "time": 1510003336,
            "time_ago": "3 hours ago",
            "content": "<p>I saw that <a href=\"https:&#x2F;&#x2F;github.com&#x2F;sidharthkuruvila&#x2F;ocaml-ide\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;sidharthkuruvila&#x2F;ocaml-ide</a> was pretty recent and assumed that it worked. I haven&#x27;t tried it though.<p>Amusingly someone made a plugin for pg&#x27;s Arc 3.1 code back in &#x27;08: <a href=\"https:&#x2F;&#x2F;i.imgur.com&#x2F;Xe7mvIB.png\" rel=\"nofollow\">https:&#x2F;&#x2F;i.imgur.com&#x2F;Xe7mvIB.png</a><p>If IDEA doesn&#x27;t support a particular language, it&#x27;s pretty easy to fork an existing plugin and throw together some lexer rules.",
            "comments": []
          }]
        }, {
          "id": 15638976,
          "level": 3,
          "user": "acdha",
          "time": 1510002083,
          "time_ago": "3 hours ago",
          "content": "<p>How&#x27;s performance? I&#x27;ve used PyCharm about once a year historically and kept going back to TextMate 2 or (now) VSCode for UI responsiveness.",
          "comments": [{
            "id": 15638992,
            "level": 4,
            "user": "sillysaurus3",
            "time": 1510002230,
            "time_ago": "3 hours ago",
            "content": "<p>Mm, good point. WebStorm performance is good, but IDEA is noticeably slower. I haven&#x27;t used PyCharm yet, so it&#x27;s possible performance could be a pain point there. I find myself firing up Webstorm instead of IDEA due to slower IDEA indexing.<p>FWIW Cursive is a bit sluggish to start, but after it&#x27;s done indexing it feels like the best Lisp development environment ever made.",
            "comments": [{
              "id": 15639033,
              "level": 5,
              "user": "acdha",
              "time": 1510002621,
              "time_ago": "3 hours ago",
              "content": "<p>I liked PyCharm&#x27;s feature list but the index-the-world behaviour definitely like it going back to the pre-SSD era. Not a show-stopper for my biggest project but the cost for everything else definitely left me hesitant to switch.",
              "comments": [{
                "id": 15639688,
                "level": 6,
                "user": "scoggs",
                "time": 1510008617,
                "time_ago": "an hour ago",
                "content": "<p>Sorry, this may be a silly question, but is it possible for PyCharm (and other IntelliJ IDE products) to define a specific working folder &#x2F; path for the file index-the-world feature to stay within or does it always permeate through the entire computers hard drives, just in case?",
                "comments": [{
                  "id": 15639991,
                  "level": 7,
                  "user": "timdev2",
                  "time": 1510011945,
                  "time_ago": "18 minutes ago",
                  "content": "<p>It works similarly to git.  You define a project root, and then exclude subdirectory trees as needed.  I believe there&#x27;s a way to add additional directories outside the root if needed.",
                  "comments": []
                }]
              }, {
                "id": 15639185,
                "level": 6,
                "user": "sillysaurus3",
                "time": 1510003785,
                "time_ago": "3 hours ago",
                "content": "<p>I had the same experience with a Vim plugin called Jedi. It was great, but typing &quot;pdb.&quot; would freeze Vim for 5 seconds. IDEs can definitely try to do too much.",
                "comments": []
              }]
            }]
          }]
        }]
      }]
    }, {
      "id": 15638716,
      "level": 1,
      "user": "pfooti",
      "time": 1509999938,
      "time_ago": "4 hours ago",
      "content": "<p>I just assumed the naming thing was for properties shared between grid and flexbox (such as align-items). It is still pretty frustrating to remember that kind of stuff though.",
      "comments": []
    }, {
      "id": 15639662,
      "level": 1,
      "user": "andrei_says_",
      "time": 1510008293,
      "time_ago": "an hour ago",
      "content": "<p>Having a significant amount of visitors using ie10 &amp; ie11 rules flexbox out for me.<p>So I use Susy grid system (2) and absolutely love it.",
      "comments": []
    }, {
      "id": 15638589,
      "level": 1,
      "user": "soperj",
      "time": 1509998754,
      "time_ago": "4 hours ago",
      "content": "<p>For me the worst bugs have been in Safari by far.",
      "comments": []
    }, {
      "id": 15638517,
      "level": 1,
      "user": "anon335dtzbvc",
      "time": 1509998307,
      "time_ago": "4 hours ago",
      "content": "<p>&quot;and there are no compilers to tell you which combinations don&#x27;t make sense&quot;<p>well thats not quiet true, in purescript you can write type-safe CSS checked at compile time<p><a href=\"https:&#x2F;&#x2F;pursuit.purescript.org&#x2F;packages&#x2F;purescript-css&#x2F;3.3.0&#x2F;docs&#x2F;CSS\" rel=\"nofollow\">https:&#x2F;&#x2F;pursuit.purescript.org&#x2F;packages&#x2F;purescript-css&#x2F;3.3.0...</a>",
      "comments": [{
        "id": 15638824,
        "level": 2,
        "user": "kccqzy",
        "time": 1510000881,
        "time_ago": "3 hours ago",
        "content": "<p>Does it tell you that align-items by itself doesn’t make sense regardless of the value, of the element isn’t otherwise set to use display: flex or grid?",
        "comments": [{
          "id": 15639101,
          "level": 3,
          "user": "teleclimber",
          "time": 1510003215,
          "time_ago": "3 hours ago",
          "content": "<p>I don&#x27;t know the answer, but I&#x27;d be surprised if it did.<p>I&#x27;ve also been very frustrated by CSS due to 1) its lack warnings and debug errors as mentioned above, and 2) that so many properties have side-effects (like setting an element to display:flex changes the auto value of min-width for all its children[1]).<p>I&#x27;ve started working on something to help with this, but it&#x27;s a long way off (and it may not work at all).<p>[1] <a href=\"https:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;css-flexbox-1&#x2F;#min-size-auto\" rel=\"nofollow\">https:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;css-flexbox-1&#x2F;#min-size-auto</a>",
          "comments": []
        }]
      }]
    }]
  }, {
    "id": 15637870,
    "level": 0,
    "user": "c-smile",
    "time": 1509994616,
    "time_ago": "5 hours ago",
    "content": "<p>&quot;flexbox horrors&quot;:<p>&quot;flex-basis&quot; - defines mysterious &quot;main width&quot; (WTF is wrong with just width?)<p>&quot;flex-grow&quot; and &quot;flex-shrink&quot; - grow and shrink relative to what?<p>How to define flexible margins? Like I want left margin to be twice larger than right one and all this to be flexible:<p><pre><code>    |---m:2*-------|--1*---|--m:1*-| \n</code></pre>\n?<p>Effectively flexbox breaks CSS box model that postulates only width&#x2F;height to define box dimensions.<p>Why I cannot say just this:<p><pre><code>    { width: 1fr;\n      margin-left: 2fr;\n      margin-right: 1fr; } \n</code></pre>\n?<p>Where &#x27;fr&#x27; are <i></i>flex units<i></i> introduced in CSS Grid  \n<a href=\"https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;flex_value\" rel=\"nofollow\">https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;flex_value</a><p>Why two specifications define the same entity (flex weight) by two different mechanisms - by property and by unit?<p>CSS looks like Christmas tree where each passer-by (Google and Microsoft here) adds its own shiny stuff ...<p>Is this what we name as modularity of CSS?",
    "comments": [{
      "id": 15638774,
      "level": 1,
      "user": "sillysaurus3",
      "time": 1510000430,
      "time_ago": "3 hours ago",
      "content": "<p>Just use Bulma. You can drop it into any project.  <a href=\"https:&#x2F;&#x2F;bulma.io&#x2F;documentation&#x2F;columns&#x2F;sizes&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;bulma.io&#x2F;documentation&#x2F;columns&#x2F;sizes&#x2F;</a><p>Your example can be accomplished like this:<p><pre><code>  &lt;div class=&quot;columns&quot;&gt;\n    &lt;div class=&quot;column is-half&quot;&gt;m:2*&lt;&#x2F;div&gt;\n    &lt;div class=&quot;column&quot;&gt;1*&lt;&#x2F;div&gt;\n    &lt;div class=&quot;column&quot;&gt;m:*1&lt;&#x2F;div&gt;\n  &lt;&#x2F;div&gt;\n</code></pre>\nThere&#x27;s a good reason to limit yourself to 12 columns: the layout is consistent across all common screen sizes, whether it&#x27;s tiny mobile screens or huge desktop screens. If you have sizes like 1.374fr, you lose a lot of that automatic layout functionality.",
      "comments": [{
        "id": 15639193,
        "level": 2,
        "user": "c-smile",
        "time": 1510003834,
        "time_ago": "3 hours ago",
        "content": "<p>Bulma, as any other grid systems based on % units, is quite limited in real life.<p>Check this: <a href=\"https:&#x2F;&#x2F;sciter.com&#x2F;images&#x2F;wt-langs.png\" rel=\"nofollow\">https:&#x2F;&#x2F;sciter.com&#x2F;images&#x2F;wt-langs.png</a>\nYou see the same HTML markup there but in different languages. Text in most of European languages is longer.<p>This is HTML&#x2F;CSS Sciter UI that uses <i>flex units</i> and <i>flow property</i>: <a href=\"https:&#x2F;&#x2F;sciter.com&#x2F;docs&#x2F;flex-flow&#x2F;flex-layout.htm\" rel=\"nofollow\">https:&#x2F;&#x2F;sciter.com&#x2F;docs&#x2F;flex-flow&#x2F;flex-layout.htm</a>",
        "comments": [{
          "id": 15639282,
          "level": 3,
          "user": "sillysaurus3",
          "time": 1510004714,
          "time_ago": "2 hours ago",
          "content": "<p>Hmm, why is it limited? I&#x27;m interested in hearing your experiences.",
          "comments": [{
            "id": 15639337,
            "level": 4,
            "user": "c-smile",
            "time": 1510005236,
            "time_ago": "2 hours ago",
            "content": "<p>Check screenshots above. There is a block having 4-columns layout. Each column there a) is flexible and b) uses min-content  constraint. So widths of columns are unknown upfront - determined by actual content in grid cells.<p>That last part (use of actual content) is what you cannot reproduce using % units in principle.",
            "comments": []
          }]
        }]
      }]
    }, {
      "id": 15638491,
      "level": 1,
      "user": "Mystrl",
      "time": 1509998153,
      "time_ago": "4 hours ago",
      "content": "<p>Do you mean something like <a href=\"https:&#x2F;&#x2F;jsfiddle.net&#x2F;Mystrl&#x2F;9uj40kam&#x2F;1&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;jsfiddle.net&#x2F;Mystrl&#x2F;9uj40kam&#x2F;1&#x2F;</a>",
      "comments": [{
        "id": 15638617,
        "level": 2,
        "user": "c-smile",
        "time": 1509999006,
        "time_ago": "4 hours ago",
        "content": "<p>Close but without those artificial DOM elements.<p>Here is an illustration of the idea of <i></i>flex units<i></i>:<p><a href=\"https:&#x2F;&#x2F;sciter.com&#x2F;docs&#x2F;flex-flow&#x2F;images&#x2F;flex-springs.png\" rel=\"nofollow\">https:&#x2F;&#x2F;sciter.com&#x2F;docs&#x2F;flex-flow&#x2F;images&#x2F;flex-springs.png</a>",
        "comments": []
      }]
    }, {
      "id": 15638480,
      "level": 1,
      "user": "joshribakoff",
      "time": 1509998090,
      "time_ago": "4 hours ago",
      "content": "<p>Your margin scenario is exactly what css grid handles nicely (grid gutters)",
      "comments": [{
        "id": 15638593,
        "level": 2,
        "user": "c-smile",
        "time": 1509998793,
        "time_ago": "4 hours ago",
        "content": "<p>Yes but <i></i>flex units<i></i> can be used not just in grid context.<p>Consider this:<p><pre><code>   &lt;p&gt;Foo &lt;input style=&quot;width:1fr &#x2F;&gt; bar.&lt;&#x2F;p&gt;\n</code></pre>\nThat &lt;input&gt; will span free space left in the p element from &quot;Foo &quot; and &quot; bar.&quot;",
        "comments": []
      }]
    }, {
      "id": 15638311,
      "level": 1,
      "user": "dangerlibrary",
      "time": 1509996909,
      "time_ago": "4 hours ago",
      "content": "<p>In the face of ambiguity, guess.<p>There should be N-- and preferably only N --obvious ways to do it.",
      "comments": [{
        "id": 15638554,
        "level": 2,
        "user": "c-smile",
        "time": 1509998545,
        "time_ago": "4 hours ago",
        "content": "<p>&quot;obvious&quot; is key point here.<p>This<p><pre><code>    {  width:100px; \n       margin-left:1fr }  \n</code></pre>\nhas clear and obvious physical meaning: solid block with the spring of strength 1 on the left of it.<p>So the block is attached to the right side of its container. And so you don&#x27;t need all those aligns - flex units can do alignment in more flexible ways.<p>That&#x27;s obvious indeed.<p>But those flex-shrink&#x2F;grow ...",
        "comments": []
      }]
    }]
  }, {
    "id": 15639095,
    "level": 0,
    "user": "JepZ",
    "time": 1510003145,
    "time_ago": "3 hours ago",
    "content": "<p>I agree that flexbox and grids complement each other, but I doubt that grids are ready for product. I mean it is nice that all major browsers have a decent support in the newest versions, but production ready includes for me that older browsers (without support or major bugs) are not common anymore (~ &lt;5%).<p>As far as I can see it it is currently scored at ~75%: <a href=\"https:&#x2F;&#x2F;caniuse.com&#x2F;#search=grid\" rel=\"nofollow\">https:&#x2F;&#x2F;caniuse.com&#x2F;#search=grid</a>",
    "comments": [{
      "id": 15639547,
      "level": 1,
      "user": "raquo",
      "time": 1510007175,
      "time_ago": "2 hours ago",
      "content": "<p>Re: CSS Grid, caniuse.com seems to be out of date here.<p>MS Edge 16 was released two weeks ago, and already supports the latest CSS Grid spec (allegedly, I haven&#x27;t tried it myself).<p>---<p>As for the remaining 21%, depending on your target audience you might not care enough about UC Browser for Android, Samsung Internet, Opera Mini, Android Browser, and even IE11, which btw is no longer the default browser for Windows (Edge is).<p>Especially if you&#x27;re building a new product, by the time it becomes big enough that browser compatibility starts to matter, it will probably be a non-issue for CSS grid.",
      "comments": []
    }, {
      "id": 15639417,
      "level": 1,
      "user": "onion2k",
      "time": 1510005934,
      "time_ago": "2 hours ago",
      "content": "<p>You don&#x27;t have to make pages that look identical in every browser. Make something that <i>works</i> for everyone and then use newer browser features to make it as good an experience as possible depending what features are available. CSS even has the &quot;@supports&quot; feature for doing it - <a href=\"https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;%40supports\" rel=\"nofollow\">https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;%40supports</a>",
      "comments": [{
        "id": 15639522,
        "level": 2,
        "user": "c-smile",
        "time": 1510006936,
        "time_ago": "2 hours ago",
        "content": "<p>If to speak about layout methods @supports will not help you but will force you to do the job twice.<p>If you can do your layout without flex boxes why do you need to create second version with them at all?",
        "comments": []
      }, {
        "id": 15639492,
        "level": 2,
        "user": "cvsh",
        "time": 1510006630,
        "time_ago": "2 hours ago",
        "content": "<p>The problem is that grid is best used for overall page layout... which is part of your CSS least amenable to progressive enhancement.",
        "comments": [{
          "id": 15639541,
          "level": 3,
          "user": "c-smile",
          "time": 1510007139,
          "time_ago": "2 hours ago",
          "content": "<p>&lt;heretic-mode&gt; Just use &lt;table&gt; - the best possible Grid layout module out there. Works in all browsers, even IE6.  &lt;&#x2F;heretic-mode&gt;",
          "comments": []
        }]
      }]
    }]
  }, {
    "id": 15639221,
    "level": 0,
    "user": "fauigerzigerk",
    "time": 1510004099,
    "time_ago": "2 hours ago",
    "content": "<p><i>&gt;If you wish to fully support all browsers (yay!) then I’d highly recommend using feature queries to provide an alternative layout for browsers that don’t support Grids or have an older syntax.</i><p>How does that not translate into &quot;Just do all your work twice!&quot;?",
    "comments": []
  }, {
    "id": 15639213,
    "level": 0,
    "user": "amatecha",
    "time": 1510004019,
    "time_ago": "3 hours ago",
    "content": "<p>These &quot;Grid by Example&quot; videos by Rachel Andrew are an excellent intro to CSS Grid:<p><a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=Dz9BzY21Zks&amp;list=PLQkVA6z3dFvbnBJetfYDAF3-cG_ubgdZR\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=Dz9BzY21Zks&amp;list=PLQkVA6z3dF...</a><p>Highly recommended for anyone who&#x27;s not familiar and wants a quick introduction -- each video is just a few minutes long.  :)",
    "comments": []
  }, {
    "id": 15638735,
    "level": 0,
    "user": "IgorPartola",
    "time": 1510000100,
    "time_ago": "4 hours ago",
    "content": "<p>Is it now possible to do a responsive CSS-only layout a la Masonry&#x2F;Pinterest, with the correct order of elements using this?:<p><pre><code>    [1]  [2]  [3]\n    [4]  [5]  [6]</code></pre>",
    "comments": [{
      "id": 15638811,
      "level": 1,
      "user": "sorrymate",
      "time": 1510000714,
      "time_ago": "3 hours ago",
      "content": "<p>I too would like to know! I have yet to find a way display flex rows that are different heights and that align left to right. It seems the only options are to align by column, or use Masonry.js which seems like overkill. Even Bootstrap 4 only supports column layout.<p>Anyone been able to accomplish this with CSS-Grid or Flexbox?",
      "comments": [{
        "id": 15638855,
        "level": 2,
        "user": "IgorPartola",
        "time": 1510001045,
        "time_ago": "3 hours ago",
        "content": "<p>From what I can tell, it hasn&#x27;t been done with Flexbox alone. To get the order right, you have to specify a fixed height for each element, making it non-responsive at best. I am wondering if grid somehow helps.<p>There is also of course the order property, which with some cleverness can re-order elements from 1, 2, 3, 4, 5, 6 to 1, 4, 2, 5, 3, 6. You&#x27;d have to get awful clever with it though to figure out how to do this right, so still might rely on JS.",
        "comments": []
      }]
    }, {
      "id": 15639386,
      "level": 1,
      "user": "gsnedders",
      "time": 1510005650,
      "time_ago": "2 hours ago",
      "content": "<p>No, you can&#x27;t, because the position of each item depends on all the previous items.<p>Flexbox only deals with a single row at a time, whereas masonry doesn&#x27;t really have a notion of a row (given the 4th item in each column can be at very different places, depending on the sizes of the items above). Grid requires you to bind things to an actual grid, so you still can&#x27;t do masonry (for similar reasons). The closest you can do is using multicol, but that&#x27;s then top-to-bottom then left-to-right instead of left-to-right then top-to-bottom.<p>Note that this is mostly thinking about unequal height items (which is the common case of masonry); equal height you can do with floats yet alone more recent layout modes.",
      "comments": [{
        "id": 15639938,
        "level": 2,
        "user": "IgorPartola",
        "time": 1510011252,
        "time_ago": "29 minutes ago",
        "content": "<p>Thanks for the rundown. That’s unfortunate. This might be another case where browsers will eventually implement yet another layout method (how many are we up to now with floats, tables, columns, flex box, grid?) as soon as these layouts are replaced by something new.",
        "comments": []
      }]
    }, {
      "id": 15639331,
      "level": 1,
      "user": "akrigline",
      "time": 1510005194,
      "time_ago": "2 hours ago",
      "content": "<p>Sort of\n<a href=\"https:&#x2F;&#x2F;codepen.io&#x2F;akrigline&#x2F;pen&#x2F;qVaWQo\" rel=\"nofollow\">https:&#x2F;&#x2F;codepen.io&#x2F;akrigline&#x2F;pen&#x2F;qVaWQo</a><p>You can&#x27;t simulate the way items can extend into other rows easily with CSS Grids, but the default behavior for children of a display:grid element is to flow horizontally into cells until they have to start wrapping.",
      "comments": []
    }, {
      "id": 15639410,
      "level": 1,
      "user": "couchand",
      "time": 1510005858,
      "time_ago": "2 hours ago",
      "content": "<p>What&#x27;s the correct order of elements?",
      "comments": [{
        "id": 15639935,
        "level": 2,
        "user": "IgorPartola",
        "time": 1510011231,
        "time_ago": "30 minutes ago",
        "content": "<p>The second element should be to the right of the first, not below it.",
        "comments": []
      }]
    }]
  }, {
    "id": 15639176,
    "level": 0,
    "user": "amatecha",
    "time": 1510003739,
    "time_ago": "3 hours ago",
    "content": "<p>Be careful using CSS Grid - IE11 supports only an old version[0] of the spec, and thus is missing many major CSS Grid features like repeat(), grid-gap and span.<p>[0] <a href=\"https:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;2011&#x2F;WD-css3-grid-layout-20110407&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;2011&#x2F;WD-css3-grid-layout-20110407&#x2F;</a>",
    "comments": []
  }, {
    "id": 15638792,
    "level": 0,
    "user": "dehef",
    "time": 1510000594,
    "time_ago": "3 hours ago",
    "content": "<p>When using conditionnal arrival of dom object (I mean like using ngIf in Angular or simply using switching display none&#x2F;block on some block) flexbox layout seem very difficult to anticipate. For that kind of things I still prefer using inline-block, that is more predictable.<p>A tip: Strangely Safari tend to need flex-basis value everywhere",
    "comments": [{
      "id": 15639423,
      "level": 1,
      "user": "gsnedders",
      "time": 1510006005,
      "time_ago": "2 hours ago",
      "content": "<p>&gt; A tip: Strangely Safari tend to need flex-basis value everywhere<p>Most of the Safari issues should have been fixed in Safari 11, FYI. (The implementation of flexbox was largely copied over from Blink.)",
      "comments": []
    }]
  }, {
    "id": 15637498,
    "level": 0,
    "user": "purple-dragon",
    "time": 1509992407,
    "time_ago": "6 hours ago",
    "content": "<p>I was able to finally start using grid in production for a new project a couple of weeks ago. It made page layout a breeze and my html and scss are so much tidier and easier to read. Flexbox still has its place as the article points out, but abusing it to do 2-dimensional layout didn&#x27;t feel any better than doing the same with older techniques.",
    "comments": [{
      "id": 15637783,
      "level": 1,
      "user": "irrational",
      "time": 1509994149,
      "time_ago": "5 hours ago",
      "content": "<p>My understanding is Grid is designed for whole page layout, while Flexbox is designed for sub-page or component layout.",
      "comments": [{
        "id": 15637878,
        "level": 2,
        "user": "purple-dragon",
        "time": 1509994653,
        "time_ago": "5 hours ago",
        "content": "<p>Yes, but before grid was available people did some funky things to build responsive grids (like using a flexbox column containing flexbox rows or using a lot of repetitive media queries).",
        "comments": []
      }, {
        "id": 15638021,
        "level": 2,
        "user": "lostapathy",
        "time": 1509995335,
        "time_ago": "5 hours ago",
        "content": "<p>Yeah - they do solve different problems. We recently switched our production app to using both (from strictly bourbon&#x2F;neat grids) and it&#x27;s made life so much simplier.",
        "comments": []
      }]
    }]
  }, {
    "id": 15637500,
    "level": 0,
    "user": "chrisweekly",
    "time": 1509992411,
    "time_ago": "6 hours ago",
    "content": "<p>Fantastic piece. Clarity, breadth, depth, working examples... this is what “howto”-style, practical posts should look like.",
    "comments": [{
      "id": 15639236,
      "level": 1,
      "user": "CamperBob2",
      "time": 1510004232,
      "time_ago": "2 hours ago",
      "content": "<p>I agree, it&#x27;s a nice piece of work.  It makes a better flexbox tutorial than most flexbox tutorials.",
      "comments": []
    }]
  }, {
    "id": 15638621,
    "level": 0,
    "user": "andrewfromx",
    "time": 1509999047,
    "time_ago": "4 hours ago",
    "content": "<p>this is great info, <a href=\"https:&#x2F;&#x2F;gridbyexample.com\" rel=\"nofollow\">https:&#x2F;&#x2F;gridbyexample.com</a> is also good resource",
    "comments": []
  }, {
    "id": 15637509,
    "level": 0,
    "user": "wolco",
    "time": 1509992470,
    "time_ago": "6 hours ago",
    "content": "<p>I had the chance to see Rachel Andrew speak at laracon.  Great presentation and got me excited about flexbox and grid.  I&#x27;m still wondering is the browser support wide enough to implement this in production for the average site?",
    "comments": [{
      "id": 15637731,
      "level": 1,
      "user": "irrational",
      "time": 1509993914,
      "time_ago": "5 hours ago",
      "content": "<p>It all depends on if you have to support IE or not:<p><a href=\"https:&#x2F;&#x2F;caniuse.com&#x2F;#search=grid\" rel=\"nofollow\">https:&#x2F;&#x2F;caniuse.com&#x2F;#search=grid</a><p><a href=\"https:&#x2F;&#x2F;caniuse.com&#x2F;#search=flexbox\" rel=\"nofollow\">https:&#x2F;&#x2F;caniuse.com&#x2F;#search=flexbox</a>",
      "comments": [{
        "id": 15638046,
        "level": 2,
        "user": "notahacker",
        "time": 1509995500,
        "time_ago": "5 hours ago",
        "content": "<p>With only 70% browser support, you&#x27;re going to have to have a pretty strong reason to believe your audience is different (or not to care) to justify using Grids",
        "comments": [{
          "id": 15639011,
          "level": 3,
          "user": "dictum",
          "time": 1510002433,
          "time_ago": "3 hours ago",
          "content": "<p>Grids are most useful in wider viewports (tablets and laptop&#x2F;desktop browsers).<p>Except for IE11, basically all browsers that don&#x27;t support Grid are outdated mobile browsers (pre-iOS 10.3 versions of Mobile Safari, Android Browser in older Android, and browsers that are based on Android Browser and have high usage in developing countries, like UC Browser)",
          "comments": []
        }]
      }, {
        "id": 15637888,
        "level": 2,
        "user": "wolco",
        "time": 1509994708,
        "time_ago": "5 hours ago",
        "content": "<p>Has everyone decided to drop ie?  For tech related sites that might make sense but I think not supporting ie means turning off support to the users who are older in some cases but more likely to buy.<p>Where are people drawing the line?  Bootstrap 3 still supports legacy browsers but version 4 and other popular frameworks like bulma use flexbox.",
        "comments": [{
          "id": 15638675,
          "level": 3,
          "user": "irrational",
          "time": 1509999461,
          "time_ago": "4 hours ago",
          "content": "<p>Every website is different. I work for a Fortune 150 company, but the site I work on is so narrow in focus that we have the luxury of deciding that the amount of people using IE&#x2F;Edge (very very few based on our server stats) is not worth the development&#x2F;QA efforts to support them.<p>This is especially nice since none of us have a Windows machine at work or at home ;-)",
          "comments": []
        }, {
          "id": 15638005,
          "level": 3,
          "user": "Silhouette",
          "time": 1509995261,
          "time_ago": "5 hours ago",
          "content": "<p><i>Has everyone decided to drop ie?</i><p>Maybe some consumer sites aimed at smartphone-wielding younger audiences can now get away with dropping IE completely. <i>Maybe</i> some sites aimed at very small businesses too.<p>If you&#x27;re aiming at older individuals or at medium to large organisations, not a chance.",
          "comments": []
        }]
      }]
    }]
  }, {
    "id": 15638249,
    "level": 0,
    "user": "chobo2",
    "time": 1509996565,
    "time_ago": "5 hours ago",
    "content": "<p>The article does not really say what to use if something does not support grids? should your fallback be flex box? Also IE 11 does not support the @support.",
    "comments": [{
      "id": 15638288,
      "level": 1,
      "user": "HaoZeke",
      "time": 1509996753,
      "time_ago": "5 hours ago",
      "content": "<p>My personal favorite is lazy loading a traditional grid system with Javascript if there&#x27;s no css grid support...",
      "comments": []
    }, {
      "id": 15638475,
      "level": 1,
      "user": "joshribakoff",
      "time": 1509998063,
      "time_ago": "4 hours ago",
      "content": "<p>A common technique is fallback to mobile first layout",
      "comments": []
    }]
  }, {
    "id": 15637542,
    "level": 0,
    "user": "crush-n-spread",
    "time": 1509992652,
    "time_ago": "6 hours ago",
    "content": "<p>Most everything with CSS Grid is broken on Edge 15, which is what most Edge users are running. Thus Grid is not something you should be putting in production.<p><a href=\"https:&#x2F;&#x2F;caniuse.com&#x2F;#feat=css-grid\" rel=\"nofollow\">https:&#x2F;&#x2F;caniuse.com&#x2F;#feat=css-grid</a>",
    "comments": [{
      "id": 15638096,
      "level": 1,
      "user": "michaelmrose",
      "time": 1509995774,
      "time_ago": "5 hours ago",
      "content": "<p>The same site says virtually nobody, aprox 2-3% is using edge.<p>You either have to go all the way back to supporting IE11 and ignore everything not supported by 2013 microsoft to capture another shrinking single digit percentage of possible users until they progressively die of old age or ignore Microsoft stuff.<p>Alternatively start providing a slightly degraded interface with fewer features and a banner. Our website works best with a modern browser with links to up to date edge, firefox, and chrome at top of page. Preferably with a notice regarding dropping support for internet exploder sometime next year.",
      "comments": [{
        "id": 15638862,
        "level": 2,
        "user": "superkuh",
        "time": 1510001130,
        "time_ago": "3 hours ago",
        "content": "<p>It also doesn&#x27;t work in the Firefox fork I use. But that&#x27;s probably an even smaller market share.<p>I noticed this when Mozilla recently resigned their add-ons site and starting using CSS Grid support sniffing to determine weather to show the real site or the gimped mobile site. As it is all browsers without CSS Grid are forced to use the mobile site.<p>It&#x27;s super annoying.",
        "comments": []
      }, {
        "id": 15638839,
        "level": 2,
        "user": "nilved",
        "time": 1510000977,
        "time_ago": "3 hours ago",
        "content": "<p>&gt;  The same site says virtually nobody, aprox 2-3% is using edge.<p>What?  Do you know how many people that is?",
        "comments": []
      }]
    }, {
      "id": 15637758,
      "level": 1,
      "user": "irrational",
      "time": 1509994020,
      "time_ago": "5 hours ago",
      "content": "<p>Unless, of course, your production site purposefully does not support Edge (or IE) as a matter of policy. Fortunately that applies to me.",
      "comments": []
    }, {
      "id": 15637668,
      "level": 1,
      "user": "ch4s3",
      "time": 1509993442,
      "time_ago": "5 hours ago",
      "content": "<p>You&#x27;re making the error of assuming that all web applications in production have the same user base and constraints as yours. For example, I work on an application that is a companion app to some larger domain applications that themselves only work on newer versions of Chrome and Firefox. I defacto don&#x27;t have to support IE, as none of my users can use it. Additionally if you make a developer focused tool like bug reporting, APM, or log aggregation, you can probably ignore IE, if you don&#x27;t target Windows devs.",
      "comments": []
    }, {
      "id": 15638039,
      "level": 1,
      "user": "lostapathy",
      "time": 1509995453,
      "time_ago": "5 hours ago",
      "content": "<p>I&#x27;ve run it in production, with the ms-prefixed workarounds.  It actually wasn&#x27;t too bad to get that going, but I look forward to not needing that.",
      "comments": []
    }]
  }, {
    "id": 15637576,
    "level": 0,
    "user": "jbob2000",
    "time": 1509992850,
    "time_ago": "6 hours ago",
    "content": "<p>&gt; If you wish to fully support all browsers (yay!) then I’d highly recommend using feature queries to provide an alternative layout for browsers that don’t support Grids or have an older syntax.<p>So basically, write two versions of your layout: the old way, and the new way. Flexbox and grids aren&#x27;t ready for production yet.",
    "comments": [{
      "id": 15637785,
      "level": 1,
      "user": "Waterluvian",
      "time": 1509994164,
      "time_ago": "5 hours ago",
      "content": "<p>Well, it depends on context. More and more, web tools are being used in a way where you can control what browser they&#x27;re running in. Not just Electron, but also when making UIs for things like industrial tools, where you control not just the browser, but the hardware it runs on.",
      "comments": [{
        "id": 15638884,
        "level": 2,
        "user": "alxmdev",
        "time": 1510001318,
        "time_ago": "3 hours ago",
        "content": "<p><i>&gt; Not just Electron, but also when making UIs for things like industrial tools, where you control not just the browser, but the hardware it runs on.</i><p>Wow, is that becoming common these days, using web browser engines to run UIs on specialized devices? Sounds a little off in the context of industrial tools, where I&#x27;m thinking embedded systems and relatively low-performance SOCs.",
        "comments": [{
          "id": 15639708,
          "level": 3,
          "user": "Waterluvian",
          "time": 1510008923,
          "time_ago": "an hour ago",
          "content": "<p>Sorry. I realise that I combined words that will sound frightening to some. I mean non safety critical systems in an industrial environment. For example, mobile robot health and KPI monitoring.",
          "comments": []
        }]
      }]
    }, {
      "id": 15637918,
      "level": 1,
      "user": "SippinLean",
      "time": 1509994822,
      "time_ago": "5 hours ago",
      "content": "<p>Flexbox, especially with Autoprefixer, is pretty safe to use in production.<p>Grid support is much spottier, but can be safely used in production depending upon your supported browsers.",
      "comments": []
    }]
  }, {
    "id": 15639504,
    "level": 0,
    "user": "smash33",
    "time": 1510006762,
    "time_ago": "2 hours ago",
    "content": "<p>Every page doesnt have to look the same in each browser.",
    "comments": []
  }],
  "comments_count": 92
};
