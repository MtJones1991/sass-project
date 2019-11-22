<template>
  <div class="home">
    <Portfolio />
    <AboutMeCards msg="Welcome to Your Vue.js App"/>
    <ProjectsParallax />
    <Projects />

  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from "@/components/Portfolio.vue"
import AboutMeCards from '@/components/AboutMeCards.vue'
import ProjectsParallax from "@/components/ProjectsParallax.vue"
import Projects from "@/components/Projects"



export default {
  name: 'home',
  components: {
    AboutMeCards,
    Portfolio,
    ProjectsParallax,
    Projects
  }
}
</script>
