<template>

    <div class="parallax">
        <div class="center-item-middle pb-5">
            <AnimatedTitle />
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
.parallax {
    /* The image used */
    background-image: url("../assets/38585.jpg");
}
</style>
