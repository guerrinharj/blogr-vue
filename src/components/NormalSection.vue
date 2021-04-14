<template>
    <main>

        <div class="header"> 
            <h2> {{ title }} </h2>
        </div>

        <div class="section" :class="{inverting: inverted}">

            <div class="info">

                <div class="subinfo">
                    <h3> {{ subtitleA }} </h3>
                    <p> {{ textA }} </p>
                </div>

                <div class="subinfo">
                    <h3> {{ subtitleB }} </h3>
                    <p> {{ textB }} </p>
                </div>

            </div>

            <div class="image">
                <img alt="section" :src="require('@/assets/' + background + '')">
            </div>      

        </div>

    </main>


    
</template>

<script>
export default {
    props: ['title', 'subtitleA', 'subtitleB', 'textA', 'textB', 'background', "inverted"]
    
}
</script>

<style scoped>

main {
    max-width: 70%;
    margin: 120px auto;
}

.header {
    text-align: center;
}

h2 {
    color: hsl(208, 49%, 24%);
    font-size: 2.5rem

}


.section {
    display: flex;
    align-items: center;
    margin: 100px auto;
}

.inverting {
    flex-direction: row-reverse;
}

.inverting .image img {
    right: 30%;
    left: auto;
}

.info {
    width: 50%;
}

.subinfo {
    margin: 80px 0
}

h3 {
    color: hsl(208, 49%, 24%);
    font-size: 2rem;
}

p {
    opacity: 0.5;
    line-height: 1.5;
    font-weight: 500
}

.image {
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    position: relative
}

.image img {
    width: 150%;
    position: absolute;
    left: 50%
}

@media (max-width: 600px) {

    .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        flex-direction: column-reverse;
        margin: 15vh auto;
    }

    .info, .image {
        margin: auto;
        width: 80%
    }

    .image img, .inverting .image img {
        position: relative;
        left: 0;
        width: 100%;
            transform: scale(1.6);
    }


}


</style>