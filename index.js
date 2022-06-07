const body = document.querySelector('body')
body.removeChild(document.querySelector('#main'));

const newHeader = document.createElement('h1');
newHeader.id  = 'victory';
newHeader.textContent = 'Mercy is the champion';
body.appendChild(newHeader);
