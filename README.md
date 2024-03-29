1.  Html

    1.  Html

        1.  Html加载原理

        2.  块级元素

            1.  a span img input select

        3.  行内元素

            1.  div ul ol li dl dt dd h1 p

        4.  空元素

            1.  \<br\> \<hr\> \<link\> \<meta\>

    2.  Html5

        ![](imgs/e8bc40d7006f13fa0a191d774b7db36a_r.jpg)

        1.  浏览器加载原理

            1.  首先，开源浏览器一般以8k每块下载html页面。

               解析
                    根据html文件生成DOM tree

                    根据css文件产生css规则树(CSS Rule Tree)

                    解析JavaScript脚本

               构建渲染树(Rendering tree)

                    通过DOM API和CSSOM API来操作DOM Tree和CSS Rule Tree 构建Rendering tree

                    Rendering Tree 渲染树并不等同于DOM树，因为一些像Header或display:none的东西就没必要放在渲染树中了。

                    CSS 的 Rule Tree主要是为了完成匹配并把CSS Rule附加上Rendering Tree上的每个Element。也就是DOM结点。也就是所谓的Frame。

                    然后，计算每个Frame（也就是每个Element）的位置，这又叫layout和reflow过程。

               绘制

                    最后通过调用操作系统Native GUI的API绘制

        2.  浏览器缓存技术

        3. DOM tree 生成内部原理

            字节数据 => 字符串 => tokens => Nodes => Dom tree

    3.  常见浏览器内核

        1.  Trident内核：IE,MaxThon,TT,The Word,360,搜狗浏览器等

        2.  Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等

        3.  Presto内核：Opera7及以上[现为：Blink]

        4.  Webkit内核：Safari,Chrome等[Chrome的:Blink(Webkit的分支)]

    4.  语义化

        1.  用正确的标签做正确的事情

        2.  让页面的内容结构化，结构更清晰，便于对浏览器，搜索引擎解析

        3.  即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的

        4.  搜索引擎的爬虫也依赖于HTML标记确定上下文和各个关键字的权重，利于SEO

        5.  使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解

    5.  渐进增强和优雅降级

        1.  渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能，达到更好的用户体验

        2.  优雅降级：一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容

    6.  defer和async的区别

        1.  defer：此布尔属性被设置为向浏览器指示脚本在文档被解析后执行。

            1.  对于defer，我们可以认为是将外链的js放在了页面底部。js的加载不会阻塞页面的渲染和资源的加载。不过defer会按照原本的js的顺序执行，所以如果前后有依赖关系的js可以放心使用

        2.  async：设置此布尔属性，以指示浏览器如果可能的话，应异步执行脚本。

            1.  对于async，这个是html5中新增的属性，它的作用是能够异步的加载和执行脚本，不因为加载脚本而阻塞页面的加载。一旦加载到就会立刻执行在有async的情况下，js一旦下载好了就会执行，所以很有可能不是按照原本的顺序来执行的。如果js前后有依赖性，用async，就很有可能出错。

        3.  两个属性会有三种可能的情况

            1.  如果async为true，那么脚本在下载完成后异步执行。

            2.  如果async为false，defer为true，那么脚本会在页面解析完毕之后执行。

            3.  如果async和defer都为false，那么脚本会在页面解析中，停止页面解析，立刻下载并且执行。

        4.  alt 和title的区别

            1.  alt是\<img\>标签的特有属性，当图片加载失败时显示alt文字

            2.  title属性是global attribute之一，作用是提供建议性的信息，通常是鼠标滑动到元素上是显示

        5.  DOCTYPE 作用

            1.  DOCTYPE是用来声明文档类型和DTD规范的，一个主要的用途便是文件的合法性验证

            2.  HTML4.01的doctype

                1.  在HTML4.01中，\<!DOCTYPE\>声明引用DTD，因为HTML4.01基于SGML。DTD规定了标记语言的规则，这样浏览器才能正确的呈现内容。在HTML4.01中有三种\<!DOCTYPE\>声明。

                2.  严格模式

                    1.  \<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                        "http://www.w3.org/TR/html4/strict.dtd"\>

                3.  过渡模式：

                    2.  \<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01
                        Transitional//EN"
                        "http://www.w3.org/TR/html4/loose.dtd"\>

                4.  框架模式：

                    3.  \<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01
                        Frameset//EN"
                        "http://www.w3.org/TR/html4/frameset.dtd"\>

            3.  HTML5的doctype

                5.  HTML5不基于SGML，所以不需要引用DTD。在HTML5中\<!DOCTYPE\>只有一种\<！DOCTYPE
                    html\>

        6.  global attribute

            1.  style class id title data-\*等等

2.  Css

    1.  Css

        1.  盒子模型

            1.  W3C标准盒子模型

                属性width,height只包含内容content，不包含border和padding。

            2.  IE盒子模型

                属性width,height包含border和padding，指的是content+padding+border。

        2.  文档流和文本流

            文档流是相对于盒子模型讲的

            文本流是相对于文子段落讲的

            元素浮动之后，会让它跳出文档流，也就是说当它后面还有元素时，其他元素会无视它所占据了的区域，直接在它身下布局。但是文字却会认同浮动元素所占据的区域，围绕它布局，也就是没有拖出文本流。但是绝对定位后，不仅元素盒子会拖出文档流，文字也会拖出文本流。那么后面元素的文本就不会在认同它的区域位置，会直接在它后面布局，不会在环绕。当然你可以使用 index-z 来让底部的元素到上面来，类似于一个图层的概念

        3.  选择器

            1.  选择器
                
                基本选择器: * 通用选择器匹配所有， 标签选择器， class选择器，id选择器

                ![](imgs/shuxingxuanze2.png)

                ![](imgs/weilei2.png)

                ![](imgs/weiyuansu2.png)

                ![](imgs/tongji3.png)

                ![](imgs/shuxing3.png)

                ![](imgs/yonghuweilei3.png)

                ![](imgs/jiegouweilei3.png)

                ![](imgs/fanxuanweilei3.png)


            3.  优先级算法计算

               算法规则 由(A, B, C, D)决定

                  如果存在内联样式，那么 A = 1, 否则 A = 0;

                  B 的值等于 ID选择器 出现的次数;

                  C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;

                  D 的值等于 标签选择器 和 伪元素 出现的总次数 。

               比较规则

                  从左往右依次进行比较 ，较大者胜出，如果相等，则继续往右移动一位进行比较 。如果4位全部相等，则后面的会覆盖前面的.

               特殊情况

                    !important 万不得已下使用

        4.  三种定位机制

            1.  普通流 也叫正常流

            2.  浮动

                6.  元素浮动，脱离文档流，不脱离文本流，位置尽量靠上，并靠左或右

                7.  清除浮动

            3.  定位position属性： 把元素放置到一个静态的、相对的、绝对的、或固定的位置中。

                8.  Static

                    position的默认值。没有定位，元素出现在正常的文档流中。

                9.  Relative(相对定位）

                    生成相对定位的元素，相对于其正常（原来）位置进行定位。元素框偏移某个距离。元素仍保持其未定位前的形状，它原本所占的空间仍保留。可以微调，不影响其他。top,bottom,left,right的值确定定位元素的位置。


                10. Absolute（绝对定位）

                    生成绝对定位的元素，相对最近的一个position不为static的祖先元素进行偏移。不占据文档流的位置。经常用来布局。top,bottom,left,right的值确定定位元素的位置。

                11. Fixed（固定定位）

                    生成绝对定位的元素，相对于浏览器窗口进行定位。top,bottom,left,right的值确定定位元素的位置。可以做对话框或者悬浮广告。

        5.  Display

            1.  None

            2.  Inline

            3.  Block

            4.  Inline-block

            5.  Table

            6.  Table-cell

            7.  Table-row

            8.  Flex

                作用在flex容器上

                flex-direction: 属性决定主轴的方向（即项目的排列方向）。

                flex-wrap: 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

                flex-flow: 属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

                justify-content: 属性定义了项目在主轴上的对齐方式。

                align-items: 属性定义项目在交叉轴上如何对齐。

                align-content: 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。


                作用在flex子项上

                order: 定义项目的排列顺序。数值越小，排列越靠前，默认为0。

                flex-grow: 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

                flex-shrink: 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

                flex-basis: 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

                flex: 属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

                align-self: 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

                flex出现是为了解决什么问题？

                    响应式问题，移动端适配问题，float和行内块不适合布局的问题,float一开始不是用来布局的而是文字环绕

            9. grid 网格布局

                display: grid;块级网格布局

                display: inline-grid;行内网格布局
                #### template显式网格属性 已知行和列的属性

                grid-template-columns: auto(默认) ch fr(占剩余空间) minmax(10px, 100px)

                grid-template-rows 

                #### auto隐式网格属性 多余行和列的属性
                grid-auto-rows

                grid-auto-columns



        6.  透明

        7.  块级格式上下文BFC

            BFC布局规则

                内部的Box会在垂直方向，一个接一个地放置。

                Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠

                每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
                BFC的区域不会与float box重叠。

                BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

                计算BFC的高度时，浮动元素也参与计算

            作用: 清除浮动，防止margin重叠等等
            [BFC示例](BFC_example.html)

        8.  Line-height

            1.  理解(行高指的是什么?)

                两行文字基线之间的距离称之为行高

                那么基线又指的什么呢？ 标准是x字符的下端沿(中文没有标准)

            2.  默认normal,单位，纯数字，百分比三种区别

                normal: 根据字体，浏览器，操作系统都可能不同。

                单位: px 像素大小

                数字: 行高=数字*font-size

                百分比: 行高= 百分比*font-size

        9.  Css单位

            1.  px 像素单位

            2.  % 父元素宽度百分数

            3.  Em 1em=父元素font-size

            4.  Rem 1rem=根元素font-size

            5.  Vw,vh,vmin,vmax

                100vw = 视口宽度

                100vh = 视口高度

                vmin的值是当前vw和vh中较小的值。

                vmax的值是当前vw和vh中较大的值。

        10. Link和import的区别

        11. css属性继承性

        12. 文本换行问题

            word-break: break-all;只对英文起作用，以字母作为换行依据

            word-wrap: break-word; 只对英文起作用，以单词作为换行依据

            white-space: pre-wrap; 只对中文起作用，强制换行

            white-space: nowrap; 强制不换行，都起作用

            white-space: nowrap; overflow:hidden; text-overflow:ellipsis;不换行，超出部分隐藏且以省略号形式出现（部分浏览器支持） 

    2.  Css3

    3.  Css优化，提高性能

3.  Scss

    变量

    循环

    混入

    函数
    
4.  Webpack

    1.  Webpack基本用法

    2.  常用插件

    3.  打包速度优化

5.  JavaScript

    1.  Es3

        1.  基本类型

            1.  值类型

                14. Boolean，number，string，null，undefined，symbol（es6新加）

            2.  引用类型

                15. Object

                    4.  内置对象

        2.  类型判断方法

            1.  Typeof 或精确判断使用Object.prototype,toString.call(param)

        3.  ==和===区别

            1.  == 会隐式转换

        4.  String常用方法

            substr 从第n开始截取m个元素 第一个参数可以传负值 第二个参数负值会转化成0

            substring 从第n开始截取到第m结束 传负值都会转化成0 

            slice  从第n开始截取到第m结束 两个参数都可以传负值

            replace 查找替换

            repeat 重复

            split 按第一个参数值切割成数组

            includes 是否包含 存在返回true 否则返回false

            indexOf 是否包含 存在返回下标 不存在返回-1

            search 是否包含 存在返回下标 不存在返回-1
            
            trim 去掉两边空格


        5.  Array常用方法

            pop

            push

            shift

            unshift

            concat

            forEach

            some

            filter

            map

            some

            every

            fill 对数组元素统一赋值

            slice

            join

            reverse

        6.  Object常用方法

        7.  继承

        8.  作用域链

        9.  原型链

        10. 闭包

        11. 跨域通讯

        12. This指向问题

        13. 正则表达式

        14. New 操作符理解

        15. 函数

            参数传递 

            1. 值传递
            
                基本类型传递给函数， 会以副本的形式传递给函数， 在函数内部进行更改的话，不会对外部变量造成影响。
            2. 对象引用传递

                引用类型传递给函数，会传递给函数引用副本， 对引用副本进行修改，不会对外部引用对象造成影响。

                但如果函数在内部对引用类型内部数据进行修改的话会对外部引用对象进行影响。因为引用地址是相同的。



    2.  Es5

        1.  新增API

    3.  Es6

        1.  Var，let，const

        2.  Symbal类型

        3.  Promise

            1.  等待中pending

            2.  完成了resolved

            3.  拒绝了rejected

        4.  Class

        5.  Babel

        6.  箭头函数

        7.  函数

        8.  模块化

        9.  Set，map，weakmap，weakset

        10. generator 深入理解

    4.  Es7

        1.  Async await

    5.  常见js功能或算法实现

        1.  防抖

        2.  节流

        3.  快速排序

        4.  递归

        5.  尾递归

        6.  递归转for循环

        7.  浅拷贝

        8.  深拷贝

        9.  函数柯里化

        10. 简单实现call，apply，bind

        11. 实现promise

        12. 简单实现async/await中的async函数

    6.  Js事件循环机制

    7.  XHR，ajax和fetch的区别

    8.  模块化发展历程

6.  Dom

    1.  节点操作

        1.  生成

        2.  删除

        3.  插入

        4.  查询

        5.  事件

            1.  事件绑定方法

            2.  自定义事件

7.  Jquery

8.  Typescript

9.  Vue

    1.  Vue

        1.  生命周期

        2.  Mvvm

        3.  虚拟dom

        4.  双向绑定

        5.  组件传值

        6.  Diff算法

        7.  事件总线evetbus

        8.  指令

            1.  通用指令
                v-if

                v-show

            2.  自定义指令
                bind: 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

                inserted: 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

                update: 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新

                componentUpdated: 指令所在组件的 VNode 及其子 VNode 全部更新后调用。

                unbind: 只调用一次，指令与元素解绑时调用

            3. 指令引入

                全局引入

                    Vue.directive('name', {生命周期})定义指令

                    Vue.use(引入指令)

                局部引入

                    组件内使用directives属性定义

        9.  计算属性和监听器computed和watch

            computed 属性监听

            watch 复杂事件监听

        10. Prop

        11. 自定义事件

        12. 插槽

        13. 混入

            mixin

            mixins

        14. 过滤器

            filter

        15. 其他

            1.  Extend，extends和mixin的区别

                16. extend用于创建vue实例

                17. mixins可以混入多个mixin，extends只能继承一个

                18. mixins类似于面向切面的编程（AOP），extends类似于面向对象的编程

                19. 优先级Vue.extend\>extends\>mixins

            2.  Object.defineProperty和proxy

    2.  Vuex

        1.  状态管理

        2.  State

        3.  Mutation

        4.  Action

        5.  Model

    3.  Vue-router

        1.  路由模式

            1.  History

            2.  Hash 

        2.  哨兵函数

            1.  全局哨兵函数

                beforeEach(to, from, next)

                afterEach(to, from, next)

            2.  组件内哨兵函数

                beforeRouteEnter

                beforeRouteLeave

                beforeRouteUpdate
                

        3.  路由传参

        4.  路由跳转

            方式1：this.$router.push(‘路由地址’)
            
            方式2：<router-link to="路由地址"></router-link>

    4.  Vue后端渲染VUE SSR

        1.  Vue-server-renderer

        2.  Nuxt.js

10. React

    1.  React

        1.  生命周期

        2.  单项数据流

        3.  Diff算法

    2.  Redux

    3.  React-router

    4.  Flux

    5.  react后端渲染

    6.  hook react16.8新增函数开发组件，完全不使用class那一套, react 未来

        1. useState 状态钩子
        
            用于函数组件引入状态，纯函数不能有状态，所以把状态放入钩子里面

            const [count, setCount] = useState(0)

            count时状态 setCount时设置count的方法

        2. useEffect副作用 可以解决99%的问题，

           useLayoutEffect 当dom更新后，会同时出发执行该函数，会阻止浏览器的渲染，等改函数执行之后，将一起渲染界面，会产生视觉阻塞，尽量使用useEffect代替。谨慎使用

        3. useReducer 当 useState 复杂的状态逻辑涉及多个子值或下一个状态取决于前一个状态时，通常 useReducer 更可取。useReduce 还可以让您优化触发深度更新的组件的性能

        4. useContext 共享状态钩子

        5. useRef

            获取dom元素节点

            获取自组件实例

            渲染周期之间共享数据存储

            React.forwardRef 高阶组件， 当我们想要操作子组件里面的ref时，可以使用此组件来转发ref, 示例如下:

            ```js
                const Index = () => {
                    const inputEl = useRef(null);
                    const handleFocus = () => {
                        inputEl.current.focus();
                    };
                    return (
                        <>
                            <Child ref={inputEl} />
                            <button onClick={handleFocus}>Focus</button>
                        </>
                    );
                };

                const Child = forwardRef((props, ref) => {
                    return <input ref={ref} />;
                });
            ```

        6. useCallback

            优化性能: 1.当父组件数据变化时，使子组件不至于重新渲染. 也就是可以控制子组件渲染次数

        7. useMemo 避免在每次渲染时都进行高开销的计算的优化的策略

            返回一个 memoized 值。在依赖参数不变的的情况返回的是上次第一次计算的值，优化针对于当前组件高开销的计算，具有记忆功能。
        
        8. useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值，减少暴露给父组件过多属性值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用，

        9. 自定义hook函数


    7. 其他问题
        1. useRef ，forwardRef，createRef区别 


11. http

    1.  三次握手

    2.  请求方法

        1.  Get

        2.  Post

        3.  Put

        4.  Delete

        5.  Patch

    3.  状态码

12. Websocket

    1.  Websocket在vue中的应用

    2.  Websocket在react中的应用

13. node

    1.  node

        1.  常用包使用

        2.  事件循环机制

    2.  koa2

    3.  express

14. SEO

    1.  前后端不分离

    2.  前后端分离

15. mysql

    1.  存储模式

16. Redis

17. 服务器

    1.  Nginx

18. Git

19. web安全

20. docker

21. 垃圾回收机制

    形成原因： 栈只保存简单数据类型的内存， 由操作系统自动分配和释放。
             堆空间中的内存由于大小不固定系统无法进行自动释放，这个时候就需要js引擎的垃圾回收机制来手动释放这些内存

    垃圾回收算法： 

        新生代： 任何对象的声明分配到的内存，都会先被放置在新生代中。

            Scavenge算法：典型的牺牲空间换取时间的复制算法

                from-space  <----> to-space

                首先找到from-space中的存活的对象， 复制到to-space中，然后释放from-space非存活对象的内存。
                最后将from和to数据进行互换。这样循环往复。第一次垃圾回收之后存活对象会从nursery子代转到intermediate 子代，再一次垃圾回收之后如果还存活将会把对象从intermediate 子代移动到老生代(晋升)

            对象的可达性(判断对象存活依据): mark-and-sweep算法
                从根(global)找到所有他下边的引用对象并标记他们， 没有被标记的对象将会成为孤岛





        老生代：


22. 算法和数据结构

    1. 数据结构

        二叉树

        链表

        栈

        队列

        堆

        数组

        字符串

        LRU缓存结构 hashmap+双向链表的结构

    2. 算法

       五大常用算法

        分治: 分而治之

        贪婪: 通过找出一系列局部的最优解得出整体的一个最优解

        动态规划: 每次决策依赖于当前状态，又随即引起状态的转移。一个决策序列就是在变化的状态中产生出来的，所以，这种多阶段最优化决策解决问题的过程就称为动态规划。

        回溯: 分割回文串

        穷举
