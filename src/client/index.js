import './index.scss';
import * as App from '../app/index';
import Jobs from './data/jobs';
var hello = document.createElement('div');
hello.innerHTML = '<h1> Hello World!</h1>';
//document.body.appendChild(hello);

var title = require('./components/title.js');
console.log(title());
console.log(Jobs);
//ll
var app = document.getElementById('hello');
app.appendChild(title());
app.appendChild(hello);

//document.body.appendChild(title);
