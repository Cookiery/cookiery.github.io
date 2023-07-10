import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import hljs from "highlight.js";
import 'highlight.js/styles/base16/onedark.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive("highlight", function (el) {
  let blocks = el.querySelectorAll("code");
  blocks.forEach((block: HTMLElement) => {
    hljs.highlightBlock(block);
  });
});

app.mount('#app')