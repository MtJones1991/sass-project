<template>
<div class="home">
    Width: {{ window.width }},
    Height: {{ window.height }}
     
    <Portfolio />
    <AboutMeCards msg="Welcome to Your Vue.js App" />
    <ProjectsParallax />


    <Projects v-if="window.width > 968" />
    <ProjectsMobile v-if="window.width < 968" />


</div>
</template>

<script>
// @ is an alias to /src
import Portfolio from "@/components/Portfolio.vue"
import AboutMeCards from '@/components/AboutMeCards.vue'
import ProjectsParallax from "@/components/ProjectsParallax.vue"
import Projects from "@/components/Projects"
import ProjectsMobile from "@/components/ProjectsMobile"


export default {
    name: 'home',
    components: {
        AboutMeCards,
        Portfolio,
        ProjectsParallax,
        Projects,
        ProjectsMobile
    },

    data() {
        return {
           
                window: {
                    width: 0,
                    height: 0
                }
          
        }
    },

    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }

}
</script>
