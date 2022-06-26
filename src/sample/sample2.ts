import { LitElement, html } from 'lit'
import { property } from 'lit/decorators.js'

export class Sample2 extends LitElement {
  @property()
  name = 'Your name here'

  changeName(event: Event) {
    const input = event.target as HTMLInputElement
    this.name = input.value
  }

  render() {
    return html`
      <p>Hello, ${this.name}</p>
      <input @input="${this.changeName}" placeholder="Enter your name" />
    `
  }
}
