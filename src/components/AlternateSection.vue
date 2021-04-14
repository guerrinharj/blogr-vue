<template>
    <main>
        <section>

            <div class="image">
                <img :src="require('@/assets/' + image + '')" alt="celulares">
            </div>  


            <div class="info">
                <h3> {{ title }}</h3>
                <p> {{ text }} </p>

            </div>

         </section> 
    </main>
</template>

<script>
export default {
    props: ['title', 'text', 'image']
}
</script>

<style scoped>

main {
    background-image: url('../assets/bg-pattern-circles.svg'), linear-gradient(0.25turn, hsl(237, 17%, 21%), hsl(237, 23%, 32%)) ;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px 100px 0px 100px;
    width: 100%
}

section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%
}

.image {
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
}

.info {
    width: 50%
}

h3 {
    font-size: 2.3rem;
    color: white;
    margin-block-start: 0;
    margin-block-end: 0;
}

p {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    line-height: 1.5;
     width: 70%;
}


@media (max-width: 600px) {

    main {
        height: auto;
        background-position: bottom;
    }

    section {
        flex-wrap: wrap;
    }

    .image {
        height: 20vh;
        width: 100%;
    }

    .image img {
    position: absolute;
    width: 100%;
    }

    .info {
           width: 80%;
    margin: 15vh auto;
    text-align: center;
        
    }


}


</style>