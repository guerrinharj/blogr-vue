<template>
    <main>
        <section>
            <the-logo> </the-logo>
            <div v-for="itemfooter in menu" :key="itemfooter">
                <h3> {{ itemfooter.name }}</h3>
                <drop-down :subitem="itemfooter.subitems" :isfooter="true"> </drop-down>
           </div>
        </section>

    </main>   
</template>

<script>

export default {
    inject: ['menu']
}

</script>

<style scoped>

    main {
        background-color: hsl(240, 10%, 16%);
        border-radius: 0px 100px 0px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px
    }

    div {
        color: white!important
    }

    section {
        display: flex;
        justify-content: space-between;
        width: 60%
    }



    h3 {
        color: white;
    }

    li {
        color: white;
    }

    @media(max-width: 600px) {

        section {
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            width: 30%;
            text-align: center;
            color: white;
            
        }

    }

 

</style>