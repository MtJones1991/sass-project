<template>
<!-- Page Content -->
<div class="container">

    <!-- Portfolio Item Heading -->
    <h1 class="my-4">
        <small class="">Secondary Text</small>
    </h1>

    <!-- Portfolio Item Row -->
    <div class="row mt-5" style="border-bottom: 2px solid grey;">

        <div class="col-md-8">
            <img class="img-fluid pb-4" src="../assets/capture.jpg" alt="">
        </div>

        <div class="col-md-4">
            <h3 class="my-1">Project Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
            <div class="pt-5">
                <h3 class="">Project Details</h3>
                <ul class="list-group list-group-flush bootstrapList">
                    <li class="list-group-item bootstrapListItem">Cras justo odio</li>
                    <li class="list-group-item bootstrapListItem">Dapibus ac facilisis in</li>
                    <li class="list-group-item bootstrapListItem">Morbi leo risus</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /.row -->

    <div class="row mt-5 pt-5" style="border-bottom: 2px solid grey;">
        <div class="col-md-4">
            <h3 class="my-3">Project Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>

            <div class="pt-5">
                <h3 class="">Project Details</h3>
                <ul class="list-group list-group-flush bootstrapList">
                    <li class="list-group-item bootstrapListItem">Cras justo odio</li>
                    <li class="list-group-item bootstrapListItem">Dapibus ac facilisis in</li>
                    <li class="list-group-item bootstrapListItem">Morbi leo risus</li>
                </ul>
            </div>
        </div>

        <div class="col-md-8">
            <img class="img-fluid pb-3" src="../assets/nc-news.jpg" alt="">
        </div>
    </div>

    <!-- Portfolio Item Row -->
    <div class="row mt-5" style="border-bottom: 2px solid grey;">

        <div class="col-md-8">
            <img class="img-fluid pb-4" src="../assets/f1.jpg" alt="">
        </div>

        <div class="col-md-4">
            <h3 class="my-1">Project Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
            <div class="pt-5">
                <h3 class="">Project Details</h3>
                <ul class="list-group list-group-flush bootstrapList">
                    <li class="list-group-item bootstrapListItem">Cras justo odio</li>
                    <li class="list-group-item bootstrapListItem">Dapibus ac facilisis in</li>
                    <li class="list-group-item bootstrapListItem">Morbi leo risus</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /.row -->

    <!-- Related Projects Row -->
    <h3 class="my-4 mt-5">Related Projects</h3>

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

    </div>
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
    }
}
</script> 

<style lang="scss">
.parallaxBottom {
    /* The image used */
    background-image: url("../assets/38580.jpg");
}
</style>
