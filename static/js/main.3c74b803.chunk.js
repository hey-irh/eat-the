(this["webpackJsonpeat-the"]=this["webpackJsonpeat-the"]||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),i=a.n(n),r=a(18),o=a.n(r),s=(a(35),a(36),a(37),a(61)),l=a(3),j=Object(n.createContext)(null);function b(e){var t=e.children,a=Object(n.useState)(186e9),i=Object(l.a)(a,2),r=i[0],o=i[1],s=Object(n.useState)("Jeff Bezos"),b=Object(l.a)(s,2),u=b[0],h=b[1],d=Object(n.useState)(r),m=Object(l.a)(d,2),O=m[0],x=m[1],g=Object(n.useState)(0),S=Object(l.a)(g,2),f=S[0],v=S[1];return Object(c.jsx)(j.Provider,{value:{billionaire:r,setbillionaire:o,name:u,setname:h,remainingWealth:O,setremainingWealth:x,tax:f,setTax:v},children:t})}function u(){return Object(n.useContext)(j)}var h=a(63),d=(a(38),a.p+"static/media/JeffBezoslaughing.a33aefd1.png"),m=a.p+"static/media/markZuckerbergWave.99de0ad1.png",O=a.p+"static/media/ElonMuskPic.32fda5c1.png",x=a.p+"static/media/bill gates.d22ab26a.png",g=(a.p,a.p,a.p,a.p,Object(s.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})));var S=function(){var e=u(),t=e.setbillionaire,a=e.setname,n=e.setremainingWealth,i=e.name,r=e.billionaire,o=g();return console.log(i),Object(c.jsx)("div",{className:o.root,children:Object(c.jsx)(h.a,{container:!0,spacing:3,children:Object(c.jsx)(h.a,{item:!0,xs:12,children:Object(c.jsxs)("div",{className:"entire",children:[Object(c.jsxs)("div",{className:"headers",children:[Object(c.jsx)("h1",{children:"BILLIONAIRE TAXER"}),Object(c.jsxs)("p",{className:"intro",children:["Since 2015 the world's top 1% has owned more wealth than the rest of the population combined.",Object(c.jsx)("br",{}),"Use the slider to tax a billionaire's wealth and help fund social change."]}),Object(c.jsx)("p",{className:"picker",children:"Pick your billionaire"}),Object(c.jsxs)("div",{className:"images",children:[Object(c.jsx)("img",{src:O,alt:"Elon Musk",className:"ElonMusk-img billionaire-img",onClick:function(){t(209e9),a("Elon Musk's"),n(209e9)}}),Object(c.jsx)("img",{src:x,alt:"Bill Gates",className:"BillGates-img billionaire-img",onClick:function(){t(134e9),a("Bill Gates"),n(134e9)}}),Object(c.jsx)("img",{src:d,alt:"Jeff Bezos",className:"JeffBezos-img billionaire-img",onClick:function(){t(186e9),a("Jeff Bezos"),n(186e9)}}),Object(c.jsx)("img",{src:m,alt:"Mark Zuckerberg",className:"MarkZuckerberg-img billionaire-img",onClick:function(){t(101e9),a("Mark Zuckerberg's"),n(101e9)}})]})]}),Object(c.jsxs)("h2",{className:"initialStatement",children:[i," net worth is"," ",Object(c.jsxs)("span",{className:"valuepercent",children:[100*Math.round((r-65904)/65904),"%"]})," ","above the US average."]})]})})})})},f=(a(43),a(28)),v=a(64),p=a(65),M=[{value:65904,label:"USA median wealth: $65,904"},{value:1e9,label:"\ud83d\udcb5 1 billion US dollars"},{value:2608e6,label:"Eritrea GDP: $2,608,000,000"},{value:202e8,label:"Iceland GDP: $20,200,000,000"},{value:82e9,label:"Sri Lanka GDP: $82,000,000,000"},{value:88e9,label:"British Royal Families net worth: $88,000,000,000"},{value:735e8,label:"Warren Buffet net worth: $73,500,000,000"},{value:115e9,label:"Ukriane GDP: $115,000,000,000"}],N=(a(44),Object(s.a)({root:{height:1e4}}));function L(e){return"$".concat(e)}function w(){var e=u(),t=e.billionaire,a=e.name,r=e.setremainingWealth,o=e.remainingWealth,s=e.tax,j=e.setTax,b=Object(n.useState)(M),h=Object(l.a)(b,2),d=h[0],m=h[1],O=N();return Object(n.useEffect)((function(){m([].concat(Object(f.a)(d),[{value:t,label:"".concat(a," net worth: $").concat(t.toLocaleString())}]))}),[t]),Object(n.useEffect)((function(){j(Math.round((t-o)/t*100))})),Object(c.jsx)(i.a.Fragment,{children:Object(c.jsx)("div",{className:"main",children:Object(c.jsx)(v.b,{injectFirst:!0,children:Object(c.jsx)("div",{className:O.root,children:Object(c.jsx)(p.a,{className:"slider",orientation:"vertical",defaultValue:t,onChange:function(e,t){return function(e,t){r(t);var a=window.innerHeight,c=e.clientY-a/2;window.scrollBy(0,.1*c)}(e,t)},max:t,getAriaValueText:L,"aria-labelledby":"vertical-slider",marks:d,valueLabelDisplay:"on",valueLabelFormat:function(e){return Object(c.jsxs)("div",{id:"sliderText",children:[" ","Tax ",a," Wealth ",s,"% ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"To reduce his net worth to: $",e.toLocaleString()]})}},"slider-".concat(t+Math.random))})})})})}var y=Object(n.createContext)(null);function P(e){var t=e.children,a=u(),i=a.billionaire,r=a.remainingWealth,o=Object(n.useState)(0),s=Object(l.a)(o,2),j=s[0],b=s[1],h=Object(n.useState)(0),d=Object(l.a)(h,2),m=d[0],O=d[1],x=Object(n.useState)(0),g=Object(l.a)(x,2),S=g[0],f=g[1],v=Object(n.useState)(0),p=Object(l.a)(v,2),M=p[0],N=p[1],L=Object(n.useState)(0),w=Object(l.a)(L,2),P=w[0],k=w[1],I=Object(n.useState)(0),B=Object(l.a)(I,2),E=B[0],$=B[1],C=Object(n.useState)(0),T=Object(l.a)(C,2),U=T[0],G=T[1],W=Object(n.useState)(0),F=Object(l.a)(W,2),z=F[0],A=F[1],D=Object(n.useState)(0),J=Object(l.a)(D,2),q=J[0],R=J[1],Z=Object(n.useState)(0),V=Object(l.a)(Z,2),H=V[0],X=V[1],Y=Object(n.useState)(0),K=Object(l.a)(Y,2),Q=K[0],_=K[1],ee=Object(n.useState)(0),te=Object(l.a)(ee,2),ae=te[0],ce=te[1],ne=Object(n.useState)(0),ie=Object(l.a)(ne,2),re=ie[0],oe=ie[1],se=Object(n.useState)(0),le=Object(l.a)(se,2),je=le[0],be=le[1];return Object(n.useEffect)((function(){r>=165e9?(f(Math.round(.5*(i-r)/1125e5).toLocaleString()),O(Math.round(.25*(i-r)/1e3).toLocaleString()),A(Math.round(.25*(i-r)/59).toLocaleString()),b(0),N(0),k(0),$(0),ce(0),G(0),R(0),X(0),be(0),_(0),oe(0)):r<165e9&&r>=133e9&&(f(Math.round(.3*(i-r)/1125e5).toLocaleString()),O(Math.round(.12*(i-r)/1e3).toLocaleString()),A(Math.round(.12*(i-r)/59).toLocaleString()),b(Math.round(.16*(i-r)/16269543).toLocaleString()),N("$".concat(Math.round(.2*(i-r)/3282e5).toLocaleString())),k(Math.round(.1*(i-r)/2.48).toLocaleString()),$(0),ce(0),G(0),R(0),X(0),be(0),_(0),oe(0)),r<133e9&&r>=1e11&&(f(Math.round(.2*(i-r)/1125e5).toLocaleString()),O(Math.round(.09*(i-r)/1e3).toLocaleString()),A(Math.round(.09*(i-r)/59).toLocaleString()),b(Math.round(.09*(i-r)/16269543).toLocaleString()),N("$".concat(Math.round(.13*(i-r)/3282e5).toLocaleString())),k(Math.round(.09*(i-r)/2.48).toLocaleString()),$(Math.round(.09*(i-r)/6e4).toLocaleString()),ce(Math.round(.09*(i-r)/11e6).toLocaleString()),G(Math.round(.13*(i-r)/20).toLocaleString()),R(0),X(0),be(0),_(0),oe(0)),r<1e11&&r>=71e9?(O(Math.round(.06*(i-r)/1e3).toLocaleString()),b(Math.round(.1*(i-r)/16269543).toLocaleString()),f(Math.round(.12*(i-r)/1125e5).toLocaleString()),N("$".concat(Math.round(.12*(i-r)/3282e5).toLocaleString())),k(Math.round(.06*(i-r)/2.48).toLocaleString()),$(Math.round(.07*(i-r)/6e4).toLocaleString()),ce(Math.round(.07*(i-r)/11e6).toLocaleString()),G(Math.round(.1*(i-r)/20).toLocaleString()),A(Math.round(.06*(i-r)/59).toLocaleString()),R(Math.round(.07*(i-r)/25).toLocaleString()),X(Math.round(.1*(i-r)/15e4).toLocaleString()),be(Math.round(.07*(i-r)/28020).toLocaleString()),_(0),oe(0)):r<71e9&&(O(Math.round(.06*(i-r)/1e3).toLocaleString()),b(Math.round(.08*(i-r)/16269543).toLocaleString()),f(Math.round(.1*(i-r)/1125e5).toLocaleString()),N("$".concat(Math.round(.1*(i-r)/3282e5).toLocaleString())),k(Math.round(.05*(i-r)/2.48).toLocaleString()),$(Math.round(.06*(i-r)/6e4).toLocaleString()),ce(Math.round(.06*(i-r)/11e6).toLocaleString()),G(Math.round(.1*(i-r)/20).toLocaleString()),oe(Math.round(.06*(i-r)/29e3).toLocaleString()),A(Math.round(.05*(i-r)/59).toLocaleString()),R(Math.round(.06*(i-r)/25).toLocaleString()),X(Math.round(.1*(i-r)/15e4).toLocaleString()),_(Math.round(.06*(i-r)/24e4).toLocaleString()),be(Math.round(.06*(i-r)/28020).toLocaleString()))}),[r]),Object(c.jsx)(y.Provider,{value:{usaSchools:j,solarEnergy:m,hospitals:S,cash:M,schoolMeals:P,uniScolarship:E,covid:U,clothing:z,homelessNights:q,cancerTreatment:H,houses:Q,libraries:ae,playground:re,mileRoad:je},children:t})}a(45);var k=function(e){var t=e.ItemNumber,a=e.text,n=e.emoji;return Object(c.jsx)("div",{className:"paragraph",children:Object(c.jsxs)("div",{className:"statements",children:[Object(c.jsx)("p",{className:"big-number",children:t}),Object(c.jsxs)("p",{children:[a," ",n]})]})})};a(46);var I=function(){var e=u(),t=e.name,a=e.tax,i=e.remainingWealth,r=Object(n.useContext)(y),o=r.usaSchools,s=r.solarEnergy,j=r.hospitals,b=r.cash,h=r.schoolMeals,d=r.uniScolarship,m=r.covid,O=r.clothing,x=r.homelessNights,g=r.cancerTreatment,S=r.houses,f=r.libraries,v=r.playground,p=r.mileRoad,M=Object(n.useState)(0),N=Object(l.a)(M,2),L=N[0],w=N[1],P=Object(n.useState)(!1),I=Object(l.a)(P,2),B=I[0],E=I[1];return Object(n.useEffect)((function(){var e=parseInt(s);w(1e3*e*200)}),[i,s]),Object(n.useEffect)((function(){i<=1e9&&E(!0)}),[i]),Object(c.jsxs)("div",{className:"textBox",children:[Object(c.jsxs)("h2",{className:"tax",children:["Taxing ",t," wealth by ",a,"% could pay for:"]}),Object(c.jsx)("div",{className:"P1",children:Object(c.jsx)(k,{ItemNumber:j,text:"new hospitals in the US",emoji:"\ud83c\udfe5"})}),Object(c.jsx)("div",{className:"P2",children:Object(c.jsx)(k,{ItemNumber:s,text:"kilowatt's of solar energy to supply ".concat(L," homes"),emoji:"\ud83c\udf1e"})}),Object(c.jsx)("div",{className:"P3",children:Object(c.jsx)(k,{ItemNumber:O,text:"winter clothing for a child",emoji:"\ud83e\udde4"})}),Object(c.jsx)("div",{className:"P4",children:Object(c.jsx)(k,{ItemNumber:o,text:"median sized schools in the US",emoji:"\ud83d\udcda"})}),Object(c.jsx)("div",{className:"P5",children:Object(c.jsx)(k,{ItemNumber:b,text:"cash per person in the US",emoji:"\ud83d\udcb8"})}),Object(c.jsx)("div",{className:"P6",children:Object(c.jsx)(k,{ItemNumber:h,text:"elementary school meals",emoji:"\ud83c\udf5b"})}),Object(c.jsx)("div",{className:"P7",children:Object(c.jsx)(k,{ItemNumber:d,text:"full US university scolarships",emoji:"\ud83d\udc69\u200d\ud83c\udf93"})}),Object(c.jsx)("div",{className:"P8",children:Object(c.jsx)(k,{ItemNumber:f,text:"US libraries",emoji:"\ud83d\udcda"})}),Object(c.jsx)("div",{className:"P9",children:Object(c.jsx)(k,{ItemNumber:m,text:"Pfizer COVID vaccinations",emoji:"\ud83d\udc89"})}),Object(c.jsx)("div",{className:"P10",children:Object(c.jsx)(k,{ItemNumber:x,text:"nights in a homeless shelter",emoji:"\ud83d\udecf"})}),Object(c.jsxs)("div",{className:"P11",children:[Object(c.jsx)(k,{ItemNumber:g,text:"patients cancer treatment",emoji:"\ud83d\ude91"}),Object(c.jsx)("div",{className:"billionStatement",children:B&&Object(c.jsxs)("p",{children:["A billion dollars is more than any individual needs. ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Proposal's to abolishing billionaires would help close the gap between the world's richest and poorest and help create a fairer society."]})})]}),Object(c.jsx)("div",{className:"P12",children:Object(c.jsx)(k,{ItemNumber:p,text:"miles of highway road repaired",emoji:"\ud83d\udea6"})}),Object(c.jsx)("div",{className:"P13",children:Object(c.jsx)(k,{ItemNumber:S,text:"avg. homes in the US",emoji:"\ud83c\udfe1"})}),Object(c.jsx)("div",{className:"P14",children:Object(c.jsx)(k,{ItemNumber:v,text:"childrens playgrounds",emoji:"\ud83e\ude81"})})]})},B=Object(s.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var E=function(){var e=B();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsxs)(h.a,{container:!0,spacing:3,children:[Object(c.jsx)(h.a,{item:!0,xs:4,children:Object(c.jsx)(w,{})}),Object(c.jsx)(P,{children:Object(c.jsx)(h.a,{item:!0,xs:8,children:Object(c.jsx)(I,{})})})]})})};var $=function(){return Object(c.jsx)(b,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(S,{}),Object(c.jsx)(E,{className:"mainGrid"}),Object(c.jsxs)("div",{className:"bottomStatement",children:[" ","Learn more about wealth inequality at: ",Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"https://inequality.org/facts/wealth-inequality/",children:"inequality.org/facts/wealth-inequality/"})]})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)($,{})}),document.getElementById("root")),C()}},[[47,1,2]]]);
//# sourceMappingURL=main.3c74b803.chunk.js.map