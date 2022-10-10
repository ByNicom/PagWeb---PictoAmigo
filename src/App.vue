<template>
    <div>
        <div id="header"></div>

        <div id="main-container">
            <HomeView/>
        </div>
    </div>
  </template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HomeView from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    }   
}
</script>