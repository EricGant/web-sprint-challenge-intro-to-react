(this["webpackJsonpweb-sprint-challenge-intro-to-react"]=this["webpackJsonpweb-sprint-challenge-intro-to-react"]||[]).push([[0],{50:function(e,t,i){},51:function(e,t,i){},76:function(e,t,i){"use strict";i.r(t);var a,n,s=i(2),r=i(40),o=i.n(r),c=(i(50),i(21)),l=i(5),h=i(18),p=(i(51),i(41)),d=i.n(p),m=i(3),v=function(e){var t=Object(s.useState)(!1),i=Object(l.a)(t,2),n=i[0],r=i[1],o=e.char;function p(){r(!n)}var d=h.a.div(a||(a=Object(c.a)(["\n    display:flex;\n    flex-flow:column nowrap;  \n    justify-content: center;\n    text-align: center;\n    align-items: center;\n    border: 1px solid black;\n    border-radius: 1rem;\n    width: 100%;\n    background-color: #828282;\n    padding:6%;\n    margin:1%;\n\n    .display{\n        line-height: 1.3;\n    }\n\n    \n    .nodisplay{\n        display:none;\n    }\n\n\n\n    .btn{\n        background-color: #4f4f4f;\n        border-radius: 1rem;\n        border:1px solid black;\n        margin: 0 0 1rem 0;\n        color:#E1DDDD;\n        &:hover {\n            cursor: pointer;\n            background-color:#161616;\n            transition: 1s;\n        }\n    }\n    \n"])));return Object(m.jsxs)(d,{children:[Object(m.jsxs)("div",{classname:"name",children:[" ",Object(m.jsx)("h2",{children:o.name})]}),Object(m.jsx)("button",{className:"btn",onClick:p,children:"Click to show Character Data"}),Object(m.jsxs)("div",{className:!0===n?"display":"nodisplay",onClick:p,children:[Object(m.jsx)("div",{className:"display"}),Object(m.jsxs)("div",{children:["Gender: ",o.gender]}),Object(m.jsxs)("div",{children:["Height: ",o.height]}),Object(m.jsxs)("div",{children:["Mass: ",o.mass]}),Object(m.jsxs)("div",{children:["Birth Year: ",o.birth_year]}),Object(m.jsxs)("div",{children:["Eye Color: ",o.eye_color]}),Object(m.jsxs)("div",{children:["Hair Color: ",o.hair_color]}),Object(m.jsxs)("div",{children:["Skin Color: ",o.skin_color]})]})]})},b=function(e){var t=e.characters;return console.log(t),Object(m.jsx)("div",{classname:"character-wrapper",children:t.map((function(e){return Object(m.jsx)(v,{name:e.name,char:e},e.id)}))})},w=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),i=t[0],a=t[1];Object(s.useEffect)((function(){d.a.get("https://swapi.dev/api/people").then((function(e){a(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var r=h.a.div(n||(n=Object(c.a)(["\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    color:#E1DDDD;\n    \n    .Header{\n      display:flex;\n      align-items: center;\n      justify-content: center;\n    }"])));return Object(m.jsx)(r,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"Header",children:"Characters"}),Object(m.jsx)(b,{characters:i})]})})},j=i(11),u=i(27),f=[i(7).c.get("https://swapi.dev/api/people/",(function(e,t,i){return t(i.status(200),i.json(g))}))],g=[{name:"Luke Skywalker",height:"172",mass:"77",hair_color:"blond",skin_color:"fair",eye_color:"blue",birth_year:"19BBY",gender:"male",homeworld:"http://swapi.dev/api/planets/1/",films:["A New Hope","The Empire Strikes Back","Return of the Jedi","Revenge of the Sith"],species:[],vehicles:["http://swapi.dev/api/vehicles/14/","http://swapi.dev/api/vehicles/30/"],starships:["http://swapi.dev/api/starships/12/","http://swapi.dev/api/starships/22/"],created:"2014-12-09T13:50:51.644000Z",edited:"2014-12-20T21:17:56.891000Z",url:"http://swapi.dev/api/people/1/"},{name:"C-3PO",height:"167",mass:"75",hair_color:"n/a",skin_color:"gold",eye_color:"yellow",birth_year:"112BBY",gender:"n/a",homeworld:"http://swapi.dev/api/planets/1/",films:["A New Hope","The Empire Strikes Back","Return of the Jedi","The Phantom Menace","Attack of the Clones","Revenge of the Sith"],species:["http://swapi.dev/api/species/2/"],vehicles:[],starships:[],created:"2014-12-10T15:10:51.357000Z",edited:"2014-12-20T21:17:50.309000Z",url:"http://swapi.dev/api/people/2/"},{name:"R2-D2",height:"96",mass:"32",hair_color:"n/a",skin_color:"white, blue",eye_color:"red",birth_year:"33BBY",gender:"n/a",homeworld:"http://swapi.dev/api/planets/8/",films:["A New Hope","The Empire Strikes Back","Return of the Jedi","The Phantom Menace","Attack of the Clones","Revenge of the Sith"],species:["http://swapi.dev/api/species/2/"],vehicles:[],starships:[],created:"2014-12-10T15:11:50.376000Z",edited:"2014-12-20T21:17:50.311000Z",url:"http://swapi.dev/api/people/3/"},{name:"Darth Vader",height:"202",mass:"136",hair_color:"none",skin_color:"white",eye_color:"yellow",birth_year:"41.9BBY",gender:"male",homeworld:"http://swapi.dev/api/planets/1/",films:["A New Hope","The Empire Strikes Back","Return of the Jedi","Revenge of the Sith"],species:[],vehicles:[],starships:["http://swapi.dev/api/starships/13/"],created:"2014-12-10T15:18:20.704000Z",edited:"2014-12-20T21:17:50.313000Z",url:"http://swapi.dev/api/people/4/"},{name:"Leia Organa",height:"150",mass:"49",hair_color:"brown",skin_color:"light",eye_color:"brown",birth_year:"19BBY",gender:"female",homeworld:"http://swapi.dev/api/planets/2/",films:["A New Hope","The Empire Strikes Back","Return of the Jedi","Revenge of the Sith"],species:[],vehicles:["http://swapi.dev/api/vehicles/30/"],starships:[],created:"2014-12-10T15:20:09.791000Z",edited:"2014-12-20T21:17:50.315000Z",url:"http://swapi.dev/api/people/5/"},{name:"Owen Lars",height:"178",mass:"120",hair_color:"brown, grey",skin_color:"light",eye_color:"blue",birth_year:"52BBY",gender:"male",homeworld:"http://swapi.dev/api/planets/1/",films:["A New Hope","Attack of the Clones","Revenge of the Sith"],species:[],vehicles:[],starships:[],created:"2014-12-10T15:52:14.024000Z",edited:"2014-12-20T21:17:50.317000Z",url:"http://swapi.dev/api/people/6/"}];u.a.apply(void 0,Object(j.a)(f)).start(),o.a.render(Object(m.jsx)(w,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.c9d482e2.chunk.js.map