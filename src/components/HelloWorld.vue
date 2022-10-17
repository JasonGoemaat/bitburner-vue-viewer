<script setup>
import { ref } from 'vue'
/* run this to open the page and listen for messages
var w = window.open('http://127.0.0.1:5173/bitburner-vue-viewer/')
var listener = window.addEventListener('message', event => {
  console.log(`message from origin '${event.origin}''`)
  console.log('  ' + JSON.stringify(event.data))
  event.source.postMessage({ text: 'Thank you!' }, event.origin)
})

// post a sample message to our vue app
w.postMessage({ text: 'Hello, world!' }, "*")
w.postMessage({ text: 'Hello, world!' }, "http://127.0.0.1:5173/")

//
*/

defineProps({
  msg: String,
})

const countClick = event => {
  count.value++
  if (window.opener) {
    window.opener.postMessage({ source: 'counter', count: count.value }, "*")
  }
}

const count = ref(0)
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <div class="card">
    <button type="button" @click="countClick">count is {{ count }}</button>
    <!-- <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p> -->
  </div>

  <!-- <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
