const target = 'http://localhost:3002';

const data = {
  arbitraty: 'data',
  almost: 'anything',
  array: [1, 2, 3, 4],
};

let iframe;
const code = document.querySelector('#code');

document.querySelector('#postMessage').addEventListener('click', () => {
  code.innerHTML = '';
  iframe = document.querySelector('#iframe');
  iframe.onload = () => {
    iframe.contentWindow.postMessage(data, '*');
  };
  iframe.src = target;
});

window.addEventListener('message', event => {
  const text = JSON.stringify(event.data, null, 4);
  code.innerHTML = text;
  iframe.src = '';
});
