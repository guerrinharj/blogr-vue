import { createApp } from 'vue'
import App from './App.vue'
import TheLogo from './components/TheLogo.vue'
import DropDown from './components/DropDown.vue'

const app = createApp(App);

app.component('the-logo', TheLogo)
app.component('drop-down', DropDown)


app.mount('#app');

