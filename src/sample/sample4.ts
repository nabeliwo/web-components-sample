import { LitElement, html, css } from 'lit'
import { property, query, state } from 'lit/decorators.js'

type ToDoItem = {
  text: string
  completed: boolean
}

export class Sample4 extends LitElement {
  @property()
  hideCompleted = false

  @state()
  private _listItems = [
    { text: 'Start Lit tutorial', completed: true },
    { text: 'Make to-do list', completed: false, },
  ]

  @query('#newitem')
  input!: HTMLInputElement

  addToDo() {
    this._listItems = [...this._listItems, { text: this.input.value, completed: false }]
    this.input.value = ''
  }

  toggleCompleted(item: ToDoItem) {
    item.completed = !item.completed
    this.requestUpdate()
  }

  setHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked
  }

  render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems
    const caughtUpMessage = html`
      <p>You're all caught up!</p>
    `
    const todos = html`
      <ul>
        ${items.map((item) => html`
          <li
            class=${item.completed ? 'completed' : ''}
            @click=${() => this.toggleCompleted(item)}
          >
            ${item.text}
          </li>
        `)}
      </ul>
    `
    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage

    return html`
      <h2>To Do</h2>
      ${todosOrMessage}
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
      <br>
      <label>
        <input type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}
        />
        Hide completed
      </label>
    `
  }

  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777777;
    }
  `
}
