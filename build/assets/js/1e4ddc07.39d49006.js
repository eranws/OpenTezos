(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[1449],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=m(a),d=n,p=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return a?r.createElement(p,i(i({ref:t},l),{},{components:a})):r.createElement(p,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3933:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var r=a(7294),n={button:"button_2UxY"},o=function(e){var t=e.children;return r.createElement("div",{className:n.root},t)}},5164:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var r=a(3552),n=a(7294),o=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={userName:"",sucess:void 0},a}(0,r.Z)(t,e);var a=t.prototype;return a.handleSubmit=function(e){var t=this;e.preventDefault();var a=0,r=0;this.props.children.forEach((function(e){"ExamCheckbox"===e.props.mdxType&&(a+=1,"true"===e.props.isCorrect!=!!t.state[e.props.name]&&(r+=1))})),parseInt(r/a*100)<=10?this.setState({success:!0}):this.setState({success:!1})},a.handleChange=function(e){var t;e.preventDefault();var a=e.target,r="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(((t={})[n]=r,t))},a.handleNameChange=function(e){e.preventDefault(),this.setState({userName:e.target.value})},a.render=function(){var e=this;return n.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},this.props.children.map((function(t){return t.props&&"ExamCheckbox"===t.props.mdxType?n.createElement("div",{key:t.props.name},n.createElement("label",null,n.createElement("input",{className:"exam-checkbox",name:t.props.name,type:"checkbox",checked:!!e.state[t.props.name],onChange:function(t){return e.handleChange(t)}}),t.props.children),n.createElement("br",null)):t.props&&"h3"===t.props.mdxType?n.createElement("div",{key:t.props.children},n.createElement("br",null),n.createElement("br",null),t):t})),n.createElement("br",null),n.createElement("br",null),this.state.success?n.createElement("div",{className:"green"},"Congrats, your pdf certificate has been sent!"):n.createElement("div",null,!1===this.state.success&&n.createElement("div",{className:"red"},"Sorry, you made too many mistakes, please try again."),n.createElement("label",null,"Your name:",n.createElement("input",{type:"text",value:this.state.name,onChange:function(t){return e.handleNameChange(t)},className:"exam-name"})),n.createElement("input",{type:"submit",value:"Submit",className:"exam-submit"})))},t}(n.Component)},1366:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return h}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=a(5164),s=a(3933),c={id:"exam",title:"Exam",authors:"Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez"},m={unversionedId:"tezos-basics/exam",id:"tezos-basics/exam",isDocsHomePage:!1,title:"Exam",description:"Question 1",source:"@site/docs/tezos-basics/exam.md",sourceDirName:"tezos-basics",slug:"/tezos-basics/exam",permalink:"/tezos-basics/exam",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/tezos-basics/exam.md",version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1623413479,formattedLastUpdatedAt:"6/11/2021",frontMatter:{id:"exam",title:"Exam",authors:"Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez"},sidebar:"docs",previous:{title:"Economics and rewards",permalink:"/tezos-basics/economics-and-rewards"},next:{title:"Introduction",permalink:"/deploy-a-node"}},l=[{value:"Question 1",id:"question-1",children:[]},{value:"Question 2",id:"question-2",children:[]},{value:"Question 3",id:"question-3",children:[]},{value:"Question 4",id:"question-4",children:[]},{value:"Question 5",id:"question-5",children:[]},{value:"Question 6",id:"question-6",children:[]},{value:"Question 7",id:"question-7",children:[]},{value:"Question 8",id:"question-8",children:[]},{value:"Question 9",id:"question-9",children:[]},{value:"Question 10",id:"question-10",children:[]},{value:"Question 11",id:"question-11",children:[]},{value:"Question 12",id:"question-12",children:[]},{value:"Question 13",id:"question-13",children:[]},{value:"Question 14",id:"question-14",children:[]},{value:"Question 15",id:"question-15",children:[]}],u={toc:l};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{moduleName:"DeFi",mdxType:"ExamForm"},(0,o.kt)("h3",{id:"question-1"},"Question 1"),(0,o.kt)("p",null,"What are the particularities of Tezos compared to historical blockchains like Bitcoin and Ethereum"),(0,o.kt)(s.Z,{name:"00",isCorrect:"false",mdxType:"ExamCheckbox"},"XTZ is a stable coin"),(0,o.kt)(s.Z,{name:"01",isCorrect:"true",mdxType:"ExamCheckbox"},"The protocol has self-amendment"),(0,o.kt)(s.Z,{name:"02",isCorrect:"false",mdxType:"ExamCheckbox"},"It is a fork from another blockchain project"),(0,o.kt)(s.Z,{name:"03",isCorrect:"true",mdxType:"ExamCheckbox"},"The Liquid Proof-of-Stake consensus"),(0,o.kt)(s.Z,{name:"04",isCorrect:"false",mdxType:"ExamCheckbox"},"High energy consumption"),(0,o.kt)("h3",{id:"question-2"},"Question 2"),(0,o.kt)("p",null,"What are the advantages of the Liquid Proof-of-Stake consensus "),(0,o.kt)(s.Z,{name:"10",isCorrect:"true",mdxType:"ExamCheckbox"},"Low transaction fees"),(0,o.kt)(s.Z,{name:"11",isCorrect:"false",mdxType:"ExamCheckbox"},"No more delegating"),(0,o.kt)(s.Z,{name:"12",isCorrect:"true",mdxType:"ExamCheckbox"},"Low energy consumption"),(0,o.kt)(s.Z,{name:"13",isCorrect:"true",mdxType:"ExamCheckbox"},"Highly decentralized"),(0,o.kt)("h3",{id:"question-3"},"Question 3"),(0,o.kt)("p",null,"What is a roll?"),(0,o.kt)(s.Z,{name:"20",isCorrect:"false",mdxType:"ExamCheckbox"},"A transaction cycle for approving or refusing an amendment period"),(0,o.kt)(s.Z,{name:"21",isCorrect:"true",mdxType:"ExamCheckbox"},"8000 staked XTZ, which give the right to vote on amendments and to participate in the baking process"),(0,o.kt)(s.Z,{name:"22",isCorrect:"false",mdxType:"ExamCheckbox"},"A security mechanism to prevent double-spending"),(0,o.kt)(s.Z,{name:"23",isCorrect:"false",mdxType:"ExamCheckbox"},"The process of bakers' selection"),(0,o.kt)("h3",{id:"question-4"},"Question 4"),(0,o.kt)("p",null,"On which elements are transaction fees calculated?"),(0,o.kt)(s.Z,{name:"30",isCorrect:"true",mdxType:"ExamCheckbox"},"With the gas consumption"),(0,o.kt)(s.Z,{name:"31",isCorrect:"true",mdxType:"ExamCheckbox"},"With the required storage to realize the operation"),(0,o.kt)(s.Z,{name:"32",isCorrect:"false",mdxType:"ExamCheckbox"},"According to the congestion of the network"),(0,o.kt)(s.Z,{name:"33",isCorrect:"false",mdxType:"ExamCheckbox"},"It is free if you are a baker"),(0,o.kt)("h3",{id:"question-5"},"Question 5"),(0,o.kt)("p",null,"What kind of operations is responsible for XTZ creation?"),(0,o.kt)(s.Z,{name:"40",isCorrect:"false",mdxType:"ExamCheckbox"},"Run a node"),(0,o.kt)(s.Z,{name:"41",isCorrect:"true",mdxType:"ExamCheckbox"},"Baking"),(0,o.kt)(s.Z,{name:"42",isCorrect:"true",mdxType:"ExamCheckbox"},"Endorsing"),(0,o.kt)(s.Z,{name:"43",isCorrect:"true",mdxType:"ExamCheckbox"},"Amendment Proposal"),(0,o.kt)("h3",{id:"question-6"},"Question 6"),(0,o.kt)("p",null,"How many periods are required in the self-amending process?"),(0,o.kt)(s.Z,{name:"50",isCorrect:"false",mdxType:"ExamCheckbox"},"2"),(0,o.kt)(s.Z,{name:"51",isCorrect:"true",mdxType:"ExamCheckbox"},"4"),(0,o.kt)(s.Z,{name:"52",isCorrect:"false",mdxType:"ExamCheckbox"},"6"),(0,o.kt)(s.Z,{name:"53",isCorrect:"false",mdxType:"ExamCheckbox"},"8"),(0,o.kt)("h3",{id:"question-7"},"Question 7"),(0,o.kt)("p",null,"What are the two metrics required to validate the ",(0,o.kt)("em",{parentName:"p"},"Exploration Period")," and the ",(0,o.kt)("em",{parentName:"p"},"Promotion Period"),"?"),(0,o.kt)(s.Z,{name:"60",isCorrect:"true",mdxType:"ExamCheckbox"},"Super-majority"),(0,o.kt)(s.Z,{name:"61",isCorrect:"false",mdxType:"ExamCheckbox"},"Participation rate"),(0,o.kt)(s.Z,{name:"62",isCorrect:"true",mdxType:"ExamCheckbox"},"Quorum "),(0,o.kt)(s.Z,{name:"63",isCorrect:"false",mdxType:"ExamCheckbox"},"The alternative vote"),(0,o.kt)(s.Z,{name:"64",isCorrect:"false",mdxType:"ExamCheckbox"},"Semi-proportional system"),(0,o.kt)("h3",{id:"question-8"},"Question 8"),(0,o.kt)("p",null,"An implicit account is:"),(0,o.kt)(s.Z,{name:"70",isCorrect:"false",mdxType:"ExamCheckbox"},"An account linked to a smart contract with Michelson instructions"),(0,o.kt)(s.Z,{name:"71",isCorrect:"true",mdxType:"ExamCheckbox"},"An account that can be registered as a delegate and participate in the baking process"),(0,o.kt)(s.Z,{name:"72",isCorrect:"false",mdxType:"ExamCheckbox"},"An unused account"),(0,o.kt)("h3",{id:"question-9"},"Question 9"),(0,o.kt)("p",null,"Implicit account addresses can start with:"),(0,o.kt)(s.Z,{name:"80",isCorrect:"false",mdxType:"ExamCheckbox"},"XTZ"),(0,o.kt)(s.Z,{name:"81",isCorrect:"false",mdxType:"ExamCheckbox"},"KT1"),(0,o.kt)(s.Z,{name:"82",isCorrect:"false",mdxType:"ExamCheckbox"},"KT2"),(0,o.kt)(s.Z,{name:"83",isCorrect:"true",mdxType:"ExamCheckbox"},"TZ1"),(0,o.kt)(s.Z,{name:"84",isCorrect:"true",mdxType:"ExamCheckbox"},"TZ2"),(0,o.kt)(s.Z,{name:"85",isCorrect:"true",mdxType:"ExamCheckbox"},"TZ3"),(0,o.kt)("h3",{id:"question-10"},"Question 10"),(0,o.kt)("p",null,"If we want to update the Tezos protocol, we need to:"),(0,o.kt)(s.Z,{name:"90",isCorrect:"false",mdxType:"ExamCheckbox"},"Realize a hard fork and hope that the network will follow us"),(0,o.kt)(s.Z,{name:"91",isCorrect:"false",mdxType:"ExamCheckbox"},"Create a new blockchain"),(0,o.kt)(s.Z,{name:"92",isCorrect:"true",mdxType:"ExamCheckbox"},"Make a proposal using the self-amending mechanism"),(0,o.kt)(s.Z,{name:"93",isCorrect:"false",mdxType:"ExamCheckbox"},"Submit a change request to the Tezos developers' community"),(0,o.kt)(s.Z,{name:"94",isCorrect:"false",mdxType:"ExamCheckbox"},"Only Tezos developers can modify the Tezos protocol"),(0,o.kt)("h3",{id:"question-11"},"Question 11"),(0,o.kt)("p",null,"What is defined inside a smart contract?"),(0,o.kt)(s.Z,{name:"100",isCorrect:"true",mdxType:"ExamCheckbox"},"The type of the storage variables"),(0,o.kt)(s.Z,{name:"101",isCorrect:"false",mdxType:"ExamCheckbox"},"The balance of the contract"),(0,o.kt)(s.Z,{name:"102",isCorrect:"false",mdxType:"ExamCheckbox"},"The value of the entrypoints"),(0,o.kt)(s.Z,{name:"103",isCorrect:"true",mdxType:"ExamCheckbox"},"The type of the entrypoints"),(0,o.kt)(s.Z,{name:"104",isCorrect:"false",mdxType:"ExamCheckbox"},"The fixed size of the storage"),(0,o.kt)(s.Z,{name:"105",isCorrect:"true",mdxType:"ExamCheckbox"},"The code of the smart contract"),(0,o.kt)(s.Z,{name:"106",isCorrect:"false",mdxType:"ExamCheckbox"},"The list of users allowed to call the smart contract"),(0,o.kt)("h3",{id:"question-12"},"Question 12"),(0,o.kt)("p",null,"What is returned by the execution of a smart contract?"),(0,o.kt)(s.Z,{name:"110",isCorrect:"true",mdxType:"ExamCheckbox"},"The modified state of the storage after the invocation of the smart contract"),(0,o.kt)(s.Z,{name:"111",isCorrect:"false",mdxType:"ExamCheckbox"},"The related parameters of the called entrypoint"),(0,o.kt)(s.Z,{name:"112",isCorrect:"true",mdxType:"ExamCheckbox"},"The sequence of ran operations"),(0,o.kt)(s.Z,{name:"113",isCorrect:"false",mdxType:"ExamCheckbox"},"The balance of the contract"),(0,o.kt)(s.Z,{name:"114",isCorrect:"false",mdxType:"ExamCheckbox"},"The size of the storage"),(0,o.kt)(s.Z,{name:"115",isCorrect:"false",mdxType:"ExamCheckbox"},"The code of the smart contract"),(0,o.kt)(s.Z,{name:"116",isCorrect:"false",mdxType:"ExamCheckbox"},"The list of users allowed to call the smart contract"),(0,o.kt)("h3",{id:"question-13"},"Question 13"),(0,o.kt)("p",null,"Which CLI command is responsible for a smart contract deployment?"),(0,o.kt)(s.Z,{name:"120",isCorrect:"false",mdxType:"ExamCheckbox"},"tezos-client activate"),(0,o.kt)(s.Z,{name:"121",isCorrect:"false",mdxType:"ExamCheckbox"},"tezos-client register"),(0,o.kt)(s.Z,{name:"122",isCorrect:"true",mdxType:"ExamCheckbox"},"tezos-client originate"),(0,o.kt)(s.Z,{name:"123",isCorrect:"false",mdxType:"ExamCheckbox"},"tezos-client activate"),(0,o.kt)("h3",{id:"question-14"},"Question 14"),(0,o.kt)("p",null,"How many XTZ are created with the validation of a high-priority block from ",(0,o.kt)("em",{parentName:"p"},"Delphi")," amendment?"),(0,o.kt)(s.Z,{name:"130",isCorrect:"false",mdxType:"ExamCheckbox"},"250 \xb5\ua729"),(0,o.kt)(s.Z,{name:"131",isCorrect:"false",mdxType:"ExamCheckbox"},"1.25000 \ua729"),(0,o.kt)(s.Z,{name:"132",isCorrect:"false",mdxType:"ExamCheckbox"},"1,040,000 \xb5\ua729"),(0,o.kt)(s.Z,{name:"133",isCorrect:"false",mdxType:"ExamCheckbox"},"40 \ua729"),(0,o.kt)(s.Z,{name:"134",isCorrect:"true",mdxType:"ExamCheckbox"},"80 \ua729"),(0,o.kt)("h3",{id:"question-15"},"Question 15"),(0,o.kt)("p",null,"How high is the inflation rate from the ",(0,o.kt)("em",{parentName:"p"},"Delphi")," amendment?"),(0,o.kt)(s.Z,{name:"140",isCorrect:"false",mdxType:"ExamCheckbox"},"1.25%"),(0,o.kt)(s.Z,{name:"141",isCorrect:"false",mdxType:"ExamCheckbox"},"2.50%"),(0,o.kt)(s.Z,{name:"142",isCorrect:"false",mdxType:"ExamCheckbox"},"5.00%"),"5.50%"))}h.isMDXComponent=!0}}]);