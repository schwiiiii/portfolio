import { createApp } from 'vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import './style.css'

createApp(Header).mount('#header')
createApp(Main).mount('#main')
createApp(Footer).mount('#footer')
