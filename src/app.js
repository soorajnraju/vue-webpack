import Vue from 'vue'
import App from './App.vue'

/**
 * Register components
 */
import Header from './components/header-c'
import Container from './components/container-c'
import Footer from './components/footer-c'

/**
 * Bootstrap
 */
new Vue({
    el: '#app',
    render: h => h(App)
})