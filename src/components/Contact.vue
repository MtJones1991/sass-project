<template>
<div>

    <div class="parallaxBottom">
        <div class="center-item-middle pb-5">
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col">
                1 of 2
            </div>
            <div class="col">
                2 of 2
            </div>
        </div>
        <div class="row">
            <div class="col">
                1 of 3
            </div>
            <div class="col">
                2 of 3
            </div>
            <div class="col">
                3 of 3
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import AnimatedTitle from './AnimatedTitle'

export default {
    components: {
        Parallax,
        AnimatedTitle
    }
}
</script> 

<style lang="scss">
.parallaxBottom {
    /* The image used */
    background-image: url("../assets/38580.jpg");
}
</style>
