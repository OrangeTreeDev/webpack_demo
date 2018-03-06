import _ from 'lodash';
import './main.css';
import { printError } from './print.js';

function component() {
    var element = document.createElement('div');
    element.className = 'app';
    // 通过import引入外部依赖
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    printError();
    return element;
}

document.body.appendChild(component());