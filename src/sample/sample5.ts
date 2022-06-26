import { LitElement, html } from 'lit'
import { property } from 'lit/decorators.js'

export class Sample5 extends LitElement {
  @property()
  result = ''

  flipCoin() {
    if (Math.random() < 0.5) {
      this.result = 'Heads'
    } else {
      this.result = 'Tails'
    }
  }

  render() {
    return html`
      <button @click=${this.flipCoin}>Flip a coin!</button>
      <p>Result: ${this.result}</p>
    `
  }
}