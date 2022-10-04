import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [ { text: "buy groceries", id: 0, finished: false }],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 1,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.finished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.finished)
    },
    /**
     * @returns {{ text: string, id: number, finished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, finished: false })
    },
    removeTodo(id) {
      this.todos = this.todos.filter(x => x.id !== id)
    },
    toggleFinished(id) {
      const todo = this.todos.find(x => x.id === id)
      if (todo) {
        todo.finished = !todo.finished
      }
    }
  },
})
