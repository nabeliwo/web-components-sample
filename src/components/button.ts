export class Button extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  static get observedAttributes() {
    return ['size', 'variant', 'square', 'wide']
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {

  }
}
