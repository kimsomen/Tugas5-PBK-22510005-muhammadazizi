// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import './style.css'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')

document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".animated-text");
  text.classList.add("typing-animation");
});
const button = document.querySelector(".expand-button");

button.addEventListener("click", function () {
  window.scroll({
    top: 955,
    left: 0,
    behavior: "smooth",
  });
});


