import { defineStore } from 'pinia'

export const useLogs = defineStore('logs', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    logs: [{
      id: 'start-hgw.js',
      actions: [],
      lines: ['Restart in 74.5 min at 5:10:59 PM',
        '', 
        '┌────────┬────────┬────────┬────────┬─────────┐',
        '│ target │ host   │ income │ hourly │ expGain │',
        '├────────┼────────┼────────┼────────┼─────────┤',
        '│ total  │        │     -- │     -- │     731 │',
        '│ all    │ peta-1 │  $0.00 │  $0.00 │     733 │',
        '│ all    │ peta-2 │     -- │     -- │ waiting │',
        '│ all    │ peta-3 │     -- │     -- │ waiting │',
        '└────────┴────────┴────────┴────────┴─────────┘',
    ]
    }],
  }),
  getters: {
  },
  actions: {
    // any amount of arguments, return a promise or not
    addLines(id, lines) {
      let log = this.findOrAddLog(id)
      if (typeof(lines) === 'string') {
        log.lines = log.lines.concat(lines.split('\n'))
      } else {
        log.lines.concat(lines.map(x => x.split('\n')))
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
