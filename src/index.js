function component() {
    var element = document.createElement('div');
    // 通过script引入lodash
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());