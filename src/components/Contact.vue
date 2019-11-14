<template>
<div>

    <div class="parallaxBottom">
        <div class="center-item-middle pb-5">
            <AnimatedTitle />
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
