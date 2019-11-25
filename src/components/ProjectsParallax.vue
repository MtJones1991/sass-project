<template>
<div>

    <div class="parallaxBottom">
        <div class="center-item-middle pb-5">
            <AnimatedHeader />
        </div>
    </div>

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
    background-image: url("../assets/kitchen.jpg");
}
</style>
