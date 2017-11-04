import './index.scss';
//import {title} from './components/title';

var hello=document.createElement("div");
hello.innerHTML='<h1> Hello World!</h1>';
//document.body.appendChild(hello);

var title = require('./components/title.js');
console.log(title());
ll
var app = document.getElementById("app");
app.appendChild(title());
app.appendChild(hello);

//document.body.appendChild(title);
