<template>
<!-- Page Content -->
<div class="container">

    <!-- Portfolio Item Heading -->
    <h1 class="my-4">
        <small class="">Projects</small>
    </h1>

    <!-- Portfolio Item Row -->
    <div class="row mt-5 projectDiv p-5">

        <div class="col-md-8">
            <img style="cursor: pointer;" @click="handleClick('https://chat-application-55386.web.app/')" class="img-fluid pb-4" src="../assets/capture.jpg" alt="">
        </div>

        <div class="col-md-4">
            <h3 class="my-1">Chat application</h3>
            <p>A live rendering chat application using Vue and google firestore as the database. Using live rendering data users can see comments being posted live, without needed to refresh the applicaion!</p>
            <div class="pt-5">
                <h3 class="">Project Details</h3>
                <ul class="list-group list-group-flush bootstrapList">
                    <li class="list-group-item bootstrapListItem"><a href="https://github.com/MtlJ1991/Vue-Chat-App">https://github.com/MtlJ1991/Vue-Chat-App</a></li>
                    <li class="list-group-item bootstrapListItem">Vue, Vuex, CSS, HTML, Firestore, Firebase</li>
                    <li class="list-group-item bootstrapListItem">Using a brand new framework and live rendering data</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /.row -->

    <div class="row mt-5 pt-5 projectDiv p-5">

        <div class="col-md-8">
            <img style="cursor: pointer;" @click="handleClick('https://fe-nc-news-mtlj1991.herokuapp.com/')" class="img-fluid pb-3" src="../assets/nc-news.jpg" alt="">
        </div>
        
        <div class="col-md-4">
            <h3 class="my-3">Social media app</h3>
            <p>My first full stack application written with node, react and mongoDb, this was written back in 2018 when I can a student at Northcoders.</p>
            <div class="pt-5">
                <h3 class="">Project Details</h3>
                <ul class="list-group list-group-flush bootstrapList">
                    <li class="list-group-item bootstrapListItem"><a href="https://github.com/MtlJ1991/FE-FT-NC-News-Public">https://github.com/MtlJ1991/FE-FT-NC-News-Public</a></li>
                    <li class="list-group-item bootstrapListItem">React, CSS GRID, Node, MongoDB, express, Heroku</li>
                    <li class="list-group-item bootstrapListItem">Used as my main portfolio piece after graduating Northcoders</li>
                </ul>
            </div>
        </div>

    </div>

    <!-- Portfolio Item Row -->
    <div class="row mt-5 projectDiv p-5">

        <div class="col-md-8">
            <img style="cursor: pointer;" @click="handleClick('https://f1-nc-matt-jen.herokuapp.com/')" class="img-fluid pb-4" src="../assets/f1.jpg" alt="">
        </div>

        <div class="col-md-4">
            <h3 class="my-1">F1 information.</h3>
            <p>Another Northcoders project written using JSX! This was the first project I ever pair programmed on!</p>
            <div class="pt-5">
                <h3 class="">Project Details</h3>
                <ul class="list-group list-group-flush bootstrapList">
                    <li class="list-group-item bootstrapListItem"><a href="https://github.com/MtlJ1991/F1-FEMtlJ1991">https://github.com/MtlJ1991/F1-FEMtlJ1991</a></li>
                    <li class="list-group-item bootstrapListItem">JSX, HTML, CSS, Heroku</li>
                    <li class="list-group-item bootstrapListItem">A group project that gave an insight into DOM manipulation</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /.row -->

        <div class="row mt-5 pt-5 projectDiv p-5">

        <div class="col-md-8">
            <img class="img-fluid shadow pb-3" src="../assets/python.jpg" alt="">
        </div>

        <div class="col-md-4">
            <h3 class="my-3">Python adventure</h3>
            <p>In house training and some spare time between projects lead me to Python. Here is a small text based game I'm sure you'll enjoy!</p>
            <div class="pt-5">
                <h3 class="">Project Details</h3>
                <ul class="list-group list-group-flush bootstrapList">
                    <li class="list-group-item bootstrapListItem"><a href="https://github.com/MtJones1991/python-training">https://github.com/MtJones1991<br>python-training</a></li>
                    <li class="list-group-item bootstrapListItem">A short text adventure</li>
                    <li class="list-group-item bootstrapListItem">Writen in Python 3.7</li>
                </ul>
            </div>
        </div>

    </div>

    <!-- Related Projects Row -->
    <!-- <h3 class="my-4 mt-5">Related Projects</h3>

    <div class="row mt-5">

        <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
                <img class="img-fluid" src="http://placehold.it/500x300" alt="">
            </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
                <img class="img-fluid" src="http://placehold.it/500x300" alt="">
            </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
                <img class="img-fluid" src="http://placehold.it/500x300" alt="">
            </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
                <img class="img-fluid" src="http://placehold.it/500x300" alt="">
            </a>
        </div>

    </div> -->
    <!-- /.row -->

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
    background-image: url("../assets/kitchen.jpg");
}
</style>
