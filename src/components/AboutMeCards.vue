<template>

</template>

<script>
export default {
    components: {
    },

    data() {
        return {
            textClass: "lightFont"
        }
    },

    methods: {
        bindClass() {
            console.log(this.textClass)
            this.textClass == "darkFont" ? this.textClass = "lightFont" : this.textClass = "darkFont"
        }
    }
}
</script> 

<style lang="scss" scoped>
.fontIcon {
    height: 3em;
    width: 3rem !important;
}
</style>
