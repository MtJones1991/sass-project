<template>
<div data-aos-duration="700" data-aos="zoom-in">

    <br>

    <h3>Get in touch.</h3>
    <p style="border-bottom: 1px solid rgba(187, 177, 177, 0.767);">This site is built with Vue.js, Bootstrap <br> and hosted on firebase. If you like what you see, get in touch!</p>
    <br>
    <p >The repo for this site can be found here:</p>
    <p style="border-bottom: 1px solid rgba(187, 177, 177, 0.767);"><a href="https://github.com/MtJones1991/sass-project">https://github.com/MtJones1991/sass-project</a></p>

    <ul class=" shadow nav justify-content-center">
        <li class="nav-item p-4 zoom" style="cursor: pointer;" @click="handleClick('https://github.com/MtJones1991')">
            <i class="fab fa-github-alt fa-2x" style="cursor: pointer;"></i>
            <!-- <a class="nav-link active" href="#">Active</a> -->
        </li>
        <li class="nav-item p-4 zoom" style="cursor: pointer;"  @click="handleClick('https://www.linkedin.com/in/matt-jones-a97530146/')">
            <i class="fab fa-linkedin fa-2x" style="cursor: pointer;"></i>
            <!-- <a class="nav-link" href="#">Link</a> -->
        </li>
        <li class="nav-item p-4 zoom" style="cursor: pointer;" @click="handleClick('https://www.instagram.com/mtlj1991/')">
            <i class="fab fa-instagram fa-2x"></i>
            <!-- <a class="nav-link" href="#">Link</a> -->
        </li>
        <li class="nav-item p-4 zoom" style="cursor: pointer;" @click="handleClick('https://twitter.com/Mtlj1991')">
            <i class="fab fa-twitter fa-2x"></i>
            <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
        </li>
    </ul>

</div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import AnimatedHeader from './AnimatedHeader'

export default {
    components: {
        Parallax,
        AnimatedHeader
    },
    methods: {
       
        handleClick(input) {
            // console.log('Hello')
            // console.lg(input)
            window.open(input);
        }
    }
}
</script> 

<style lang="scss">
.parallaxBottom {
    /* The image used */
    background-image: url("../assets/536693.jpg");
}
</style>
