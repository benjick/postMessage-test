class Site2 {
  constructor() {
    window.addEventListener('message', event => {
      const text = JSON.stringify(event.data, null, 4);
      document.querySelector('#code').innerHTML = text;
      this.event = event;
    });

    document.querySelector('#postMessageBack').addEventListener('click', () => {
      this.sendMessage();
    });
  }

  sendMessage() {
    if (!this.event) {
      return;
    }
    const message = {
      helloFrom: 'page2',
      boolean: true,
      number: 5,
      array: [1, false, 'asdf'],
      youPosted: this.event.data,
    };
    this.event.source.postMessage(message, this.event.origin);
  }
}

new Site2(); // eslint-disable-line
