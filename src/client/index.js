import './index.scss';
import App from '../app/app.js';

var hello=document.createElement("div");
hello.innerHTML='<h1> Hello World!</h1>';
//document.body.appendChild(hello);

var title = require('./components/title.js');
console.log(title());

var app = document.getElementById("hello");
app.appendChild(title());
app.appendChild(hello);

//document.body.appendChild(title);
