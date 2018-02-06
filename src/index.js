import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    
    // 通过import引入外部依赖
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());