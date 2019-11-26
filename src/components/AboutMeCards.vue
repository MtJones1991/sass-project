<template>
<div class="wrapper">

    <div class="animatedText d-flex justify-content-center mt-5">
        <h1 class="">A little insight. </h1>
    </div>

    <div class="pt-5 grid">
        <div class="mt-5 mt-5 content projectDiv" data-aos-duration="700" data-aos="zoom-in" >
            <i class="fas fa-fill-drip fa-3x"></i>
            <h2 class="pt-4">Painter</h2>
            <p>Both miniatures and oil painting. A relxing hobby that helps me unwind after a hectic week of development.</p>
        </div>

        <div class="mt-5 content projectDiv" data-aos-duration="1000" data-aos="zoom-in" >
            <i class="fas fa-camera fa-3x"></i>
            <h2 class="pt-4">Photographer</h2>
            <p>Astrophotography and landscapes. A lifelong hobby that has taken me to some spectacular places.</p>
        </div>

        <div class="mt-5 content projectDiv" data-aos-duration="1300" data-aos="zoom-in">
            <i class="fas fa-hat-wizard fa-3x"></i>
            <h2 class="pt-4">Tinkerer.</h2>
            <p>I build and paint model villages as well as customize old guitars and even furniture! Making something out of nothing has always been a joy. </p>
        </div>
    </div>

    <div class="grid">
        <div class="mt-5 content projectDiv" data-aos-duration="1600" data-aos="zoom-in">
            <i class="fas fa-dice-d20 fa-3x"></i>
            <h2 class="pt-4">Game Master</h2>
            <p>Creating worlds and running games of Pathfinder for my friends. Flexing the creative muscles helps with many aspects of my career</p>
        </div>

        <div class="mt-5 content projectDiv" data-aos-duration="1900" data-aos="zoom-in">
            <i class="fas fa-cookie-bite fa-3x"></i>
            <h2 class="pt-4">Baker</h2>
            <p>The most recent addition to my repertoire. Baking bagels and bread has become a weekly ritual. </p>
        </div>

        <div class="mt-5 content projectDiv" data-aos-duration="2200" data-aos="zoom-in">
            <i class="fas fa-mountain fa-3x"></i>
            <h2 class="pt-4">Outdoorsman</h2>
            <p>Wild camping, hiking and astrophotography. A balance of a busy city life and being in the wilds has always been important</p>
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


