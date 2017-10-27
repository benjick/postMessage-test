const target = 'http://localhost:3002';

const data = {
  arbitraty: 'data',
  almost: 'anything',
  array: [1, 2, 3, 4],
};

let ref;

document.querySelector('#postMessage').addEventListener('click', () => {
  ref = window.open(target, 'myWindow');
  if (ref) {
    setTimeout(() => {
      ref.postMessage(data, '*');
    }, 500);
  }
});

window.addEventListener('message', event => {
  const text = JSON.stringify(event.data, null, 4);
  document.querySelector('#code').innerHTML = text;
  ref.close();
});
