import { LitElement, html } from 'lit'
import { property } from 'lit/decorators.js'

export class Sample1 extends LitElement {
  @property()
  version = 'STARTING'

  render() {
    return html`
      <p>Welcom to the Lit tutorial!</p>
      <p>this is the ${this.version} code.</p>
    `
  }
}
