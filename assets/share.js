class ShareButton extends HTMLElement {
  constructor() {
    super();

    this.elements = {
      button: this.querySelector('button'),
      details: this.querySelector('details'),
      fallback: this.querySelector('.share-button__fallback'),
      closeButton: this.querySelector('.share-button__close'),
      copyButton: this.querySelector('.share-button__copy'),
      copyMessage: this.querySelector('.share-button__message'),
      urlInput: this.querySelector('.field__input'),
    };

    if (navigator.share) {
      this.elements.button.addEventListener('click', () => {
        navigator.share({
          url: this.elements.urlInput.value,
          title: document.title,
        });
      });
    } else {
      this.elements.button.addEventListener('click', () => {
        this.elements.details.setAttribute('open', '');
      });

      this.elements.closeButton.addEventListener('click', () => {
        this.elements.details.removeAttribute('open');
      });

      this.elements.copyButton.addEventListener('click', () => {
        this.copyToClipboard();
      });

      this.elements.details.addEventListener('toggle', () => {
        if (!this.elements.details.hasAttribute('open')) {
          this.elements.copyMessage.classList.add('hidden');
        }
      });
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.elements.urlInput.value).then(() => {
      this.elements.copyMessage.classList.remove('hidden');
      this.elements.copyMessage.textContent = window.theme.strings.copied;

      setTimeout(() => {
        this.elements.copyMessage.classList.add('hidden');
      }, 3000);
    });
  }
}

customElements.define('share-button', ShareButton);
