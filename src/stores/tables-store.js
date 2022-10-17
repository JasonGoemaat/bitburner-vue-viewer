import { defineStore } from 'pinia'

export const useTables = defineStore('tables', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    tables: [{
      id: 'start-hgw.js',
      actions: [],
      data: [{ target: 'total', host: '', income: '--', hourly: '--', expGain: '' }]
    }],
  }),
  getters: {
  },
  actions: {
    // any amount of arguments, return a promise or not
    addLines(id, lines) {
      let log = this.findOrAddLog(id)
      if (typeof(lines) === 'string') {
        this.lines = this.lines.concat(lines.split('\n'))
      } else {
        this.lines.concat(lines.map(x => x.split('\n')))
      }
    },
    clear(id) {
      let log = this.logs.find(x => x.id)
      if (!log) this.addLog(id)
    },
    close(id) {
      this.logs = this.logs.filter(x => x.id !== id)
    },
    findOrAddLog(id) {
      let log = this.logs.find(x => x.id === id)
      if (!log) {
        log = { id, lines: []}
        this.logs.push(log)
      }
      return log
    }
  },
})
