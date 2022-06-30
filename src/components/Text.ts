import { LitElement, html } from 'lit'
import { property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

import { fontSize } from '../theme/fontSize'

export class Text extends LitElement {
  @property() size: keyof typeof fontSize = 'M'

  render() {
    const styles = {
      fontSize: fontSize[this.size],
    }

    return html`
      <span style=${styleMap(styles)}>
        <slot></slot>
      </span>
    `
  }
}
