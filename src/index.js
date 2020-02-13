import Log from './log';
import Calc from './calc';
import img from './ava_2.jpg';

const log  = new Log();
const calc = new Calc();

log.log(calc.add(1, 2, 3));

const el = document.createElement('img');
el.src = img;
document.body.appendChild(el);

/////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

const App = () => <p>Hello World!</p>;
ReactDOM.render(<App />, document.getElementById('root'));