<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useTodos } from './stores/test-store'
import { storeToRefs } from 'pinia'

const store = useTodos()
const { todos, filter, nextId } = storeToRefs(store)
const { toggleFinished, addTodo, removeTodo } = store

const text = ref('')

function addTodoClick(str) {
  if (str.length === 0) return;
  addTodo(str)
  text.value = ''
}

function removeTodoClick(id) {
  console.log(`removeTodoClick(${id})`)
  removeTodo(id)
}

function toggleFinishedClick(id) {
  console.log(`toggleFinishedClick(${id})`)
  toggleFinished(id)
}

const move = (event) => {
  console.log(event)
}

onMounted(() => {
  //window.addEventListener('mousemove', move)
})

onBeforeUnmount(() => {
  //window.removeEventListener('mousemove', move)
})
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <HelloWorld msg="Vite + Vue" />

  <div v-for="todo in todos" :key="todo.id">
    <div class="no-select">
      <span :class="{ transparent: !todo.finished }">&#10004;</span>&nbsp;
      <span class="clickable" :class="{ finished: todo.finished }" @click.stop="toggleFinishedClick(todo.id)">{{ todo.text }}</span>&nbsp;
      <span class="clickable" @click="removeTodoClick(todo.id)">&#10060;</span>
    </div>
  </div>
  <div>
    <form @submit.prevent="addTodoClick(text)">
      <input v-model="text" type="text" /><button>Add</button>
    </form>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.finished {
  text-decoration: line-through;
}

.clickable {
  cursor: pointer;
}

.transparent {
  opacity: 0;
}

.no-select {
  user-select: none;
}
</style>
