import { LitElement, html, css, PropertyValues } from 'lit'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { animate } from '@lit-labs/motion'

export class Sample6 extends LitElement {
  @property({ type: Boolean }) big = false
  @property({ type: Number }) duration = 500
  @state() _renderCount = 0

  shouldUpdate(changedProperties: PropertyValues<this>) {
    return !(changedProperties.size === 1 && changedProperties.has('duration'))
  }

  setDuration(e: Event) {
    const v = (e.target as HTMLSelectElement).value
    this.duration = Number.parseInt(v)
  }

  render() {
    this._renderCount++
    const keyframeOptions = { duration: this.duration }

    return html`
      <p>
        <button @click=${() => { this.big = !this.big }}>Animate</button>
      </p>
      <p>
        <label>
          Speed
          <select @change=${this.setDuration}>
            <option value="250" selected>Fast</option>
            <option value="1500" selected>Slow</option>
          </select>
        </label>
        Render count: ${this._renderCount}
      </p>
      <p class="bar ${classMap({ big: this.big })}" ${animate({ keyframeOptions })}></p>
    `
  }

  static styles = css`
    .bar {
      width: 10vw;
      height: 2em;
      background-color: red;
    }
    .big {
      width: 50vw;
    }
  `
}
