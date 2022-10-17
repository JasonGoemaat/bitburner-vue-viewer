<script setup>
import { ref } from 'vue'
import { useLogs } from '../stores/logs-store'
import { useTables } from '../stores/tables-store'
import { storeToRefs } from 'pinia'


/* run this to open the page and listen for messages
var w = window.open('http://127.0.0.1:5173/bitburner-vue-viewer/')
var listener = window.addEventListener('message', event => {
  console.log(`message from origin '${event.origin}''`)
  console.log('  ' + JSON.stringify(event.data))
  source.postMessage({ text: 'Thank you!' }, event.origin)
})

// post a sample message to our vue app
w.postMessage({ text: 'Hello, world!' }, "*")
w.postMessage({ text: 'Hello, world!' }, "http://127.0.0.1:5173/")

//
*/

const logStore = useLogs()
const { logs } = storeToRefs(logStore)

console.log('logStore:', logStore)

const selectedLog = ref(null)
const selectedTable = ref(null)
const selectLog = (id) => {
  selectedLog.value = logStore.logs.find(x => x.id === id)
  selectedTable.value = null
}

defineProps({
  logId: String,
  lines: String
})

const addLog = event => {
  let id = logId.value
  let lines = text.value
  console.log({ id, lines })
  addLines(logId.value, text.value)
  // if (window.opener) {
  //   window.opener.postMessage({ source: 'counter', count: count.value }, "*")
  // }
}

const isLogActive = (id) => {
  console.log(selectLog, selectLog.value)
  return selectedLog && selectedLog.value && selectedLog.value.id && selectedLog.value.id === id
}

const logId = ref('sample.js')
const text = ref('Hello\nworld!')

</script>

<template>

  <div class="sidebar">
    <h3>Logs</h3>
    <ul>
      <li v-for="log in logs"
      :key="log.id"
      
      :class="{ active: isLogActive(log.id) }" 
      @click="selectLog(log.id)">{{log.id}}</li>
    </ul>
  </div>

  <div v-if="selectedLog" class="content">
    <div class="logs">
      {{selectedLog.lines.join('\n')}}
    </div>
  </div>

  <!-- <div v-if="table" class="content">
    <div class="logs">
      {{log.lines.join('\n')}}
    </div>
  </div> -->

  <!-- For testing: add log with id -->
  <div>
    <form @submit.prevent="addLog(logId, text)">
      <input v-model="logId" type="text" /><br/>
      <textarea v-model="text" placeholder="add multiple lines"></textarea><br/>
      <button>Add</button>
    </form>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

div.logs {
  font-family: monospace;
  white-space: pre;
  line-height: 1em;
}

.sidebar {
  width: 20%;
  height: 100%;
  background-color: lightslategray;
  position: fixed;
  overflow: scroll;
}

.sidebar h3 {
  margin-bottom: 5px;
}

.sidebar ul {
  margin-top: 5px;
  padding-left: 10px
}
.sidebar ul li {
  cursor: pointer;
  list-style-type: none;
}

.sidebar ul li.active {
  background-color: green;
}

.content {
  margin-left: 21%;
  width: 75%;
  height: 100%;
}

div.logs p {
  margin: 0
}
</style>
