<template>
<div class="wrapper">

    <div class="animatedText d-flex justify-content-center mt-5" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h1 class="">A little insight. </h1>
    </div>

    <div class="pt-5 grid">
        <div class="mt-5 mt-5 content">
            <i class="fas fa-fill-drip fa-5x"></i>
            <h2 class="pt-4">Painter</h2>
            <p>Useful articles.</p>
        </div>

        <div class="mt-5 content">
            <i class="fas fa-camera fa-5x"></i>
            <h2 class="pt-4">Photographer</h2>
            <p>Useful articles.</p>
        </div>

        <div class="mt-5 content">
            <i class="fas fa-hat-wizard fa-5x"></i>
            <h2 class="pt-4">Wizzard</h2>
            <p>Useful articles.</p>
        </div>
    </div>

    <div class="grid">
        <div class="mt-5 content">
            <i class="fas fa-dice-d20 fa-5x"></i>
            <h2 class="pt-4">Game Master</h2>
            <p>Useful articles.</p>
        </div>

        <div class="mt-5 content">
            <i class="fas fa-cookie-bite fa-5x"></i>
            <h2 class="pt-4">Baker</h2>
            <p>Useful articles.</p>
        </div>

        <div class="mt-5 content">
            <i class="fas fa-mountain fa-5x"></i>
            <h2 class="pt-4">Outdoorsman</h2>
            <p>Useful articles.</p>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

h1 {
    color: black !important;
}
</style>
