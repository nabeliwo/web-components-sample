import { LitElement, html } from 'lit'
import { property } from 'lit/decorators.js'

export class Sample3 extends LitElement {
  @property()
  checked = false

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked
  }

  render() {
    return html`
      <div>
        <input type="text" value="Hello there." ?disabled=${!this.checked} />
      </div>

      <label>
        <input type="checkbox" @change=${this.setChecked} />
        Enable editing
      </label>
    `
  }
}
