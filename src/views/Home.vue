<template>
  <div class="home">
    <Portfolio />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Contact />

  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from "@/components/Portfolio.vue"
import HelloWorld from '@/components/HelloWorld.vue'
import Contact from "@/components/Contact.vue"



export default {
  name: 'home',
  components: {
    HelloWorld,
    Portfolio,
    Contact
  }
}
</script>
