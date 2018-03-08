import _ from 'lodash';
import './main.css';
import { printError } from './print.js';
import { cube } from './math.js';

function component() {
    var element = document.createElement('div');
    element.className = 'app';
    // 通过import引入外部依赖
    let txt = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = txt + cube(5);
    element.onclick = printError;
    return element;
}

document.body.appendChild(component());

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   })
// }