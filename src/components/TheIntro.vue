<template>
   <main> 

       <div class="desktop-menu-area">
            <the-header> </the-header>
       </div>

        <div class="mobile-menu-area">
            <the-logo> </the-logo>
            <div v-if="isIcon">
                <img @click="openMenu" src="../assets/icon-hamburger.svg"/>
            </div>
            <div v-else>
                <img @click="openMenu" src="../assets/icon-close.svg"/>
            </div>
         </div>   


   
         <mobile-menu v-if="isMobileMenu"> </mobile-menu>


           
     
            
        

       <div class="container">
           <h2> {{ title }} </h2>
            <h3> {{ description }} </h3>
            <div class="buttons">
                <div class="button" v-for="button in buttons" :key="button"> 
                    {{ button }} 
                </div>
            </div>   
        </div>   
   </main>
</template>


<script>

import TheHeader from './TheHeader.vue'
import MobileMenu from './MobileMenu.vue'


export default {
    components: {
        TheHeader,
        MobileMenu
    },
    data() {
        return {
            title: "A modern publishing platform",
            description: "Grow your audience and build your online brand",
            buttons: ['Start For Free', 'Learn More'],
            isMobileMenu: false,
            isIcon: true
        }
    },
    methods: {
        openMenu() {
            this.isMobileMenu = !this.isMobileMenu
            this.isIcon = !this.isIcon
        }
    }
    
}
</script>


<style scoped>

main {
    background-image: url('../assets/bg-pattern-intro.svg'), linear-gradient(0.25turn, hsl(13, 100%, 72%), hsl(353, 100%, 62%)) ;
    background-position: center;
    background-size: 2300px;
    width: 100%;
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 0px 220px;
    position: relative;
}

.mobile-menu-area {
    display: none;
}


.container {
    margin: auto;
    width: 70%;
    text-align: center;
    color: white
}

h2 {
    font-size: 2.6rem;
    color: white;
    margin-block-start:0;
    margin-block-end: 0;
}

h3 {
    font-size: 1.2rem;
    font-weight: 300;
    margin-block-start:0;
    margin-block-end: 0;
    margin: 10px 0 20px;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
}

.button {
    margin: 0 20px;
    border: solid 2px white;
    border-radius: 20px;
    padding: 13px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    transition: 0.5s ease
}

.button:hover {
    background-color: white;
    color:  hsl(353, 100%, 62%);
    transition: 0.5s ease;
    cursor: pointer;
}

@media (max-width: 600px) {


    main {
        height: 100vh;
        border-radius: 0px 0px 0px 120px;

    }

    .container {
        width: 80%
    }

    .desktop-menu-area {
        display: none;
    }

    .mobile-menu-area {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 40px;
        width: 80%;
        align-items: center;
    }


    .mobile-menu-area img {
        cursor: pointer
    }

}



</style>