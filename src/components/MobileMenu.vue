<template>
    <main class="mobile-menu-area">
        <div class="mobile-menu">

            <div class="mobile-basic">
            
                <span class="font-mobile-color" v-for="(itemmobile, index) in menu" :id="itemmobile.name" :key="index"> 

                    
                            <div class="mobile-title-arrow" @click="itemmobile.isActive = !itemmobile.isActive"> 
                                <h3> {{ itemmobile.name }} </h3> 

                                <img src="../assets/icon-arrow-dark.svg">
                            </div>

                            <div class="mobile-menu-items" :class="{'subitem_visible': itemmobile.isActive}">
                                <drop-down :subitem="itemmobile.subitems" :isfooter="true"> </drop-down>

                    


                            </div>
                    
                        
                </span>
            </div>

            <div class="mobile-auth">
                <div v-for="authmobile in auth" :key="authmobile"> 
                                    <ul>
                                        <li :class="{'btn': authmobile.border}"> <h3> {{ authmobile.name }} </h3> </li>
                                    </ul>
                </div>
            </div>               
           
        </div>
    </main>
</template>


<script>
import DropDown from './DropDown.vue'
export default {
  components: { DropDown },
    inject: ['menu', 'auth']
}
</script>

<style scoped>

.mobile-menu-area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: absolute;
    background: transparent;
    height: 80%;
    transform: translateY(10%);
}

.mobile-menu {
    background: white;
    padding: 50px;
    width: 75%;
    margin: auto;
    height: auto;
    border-radius: 10px;
    text-align: center;
    box-shadow: 5px 10px 20px #888888;
}

.font-mobile-color ul li {
    color: black!important
}

.mobile-title-arrow, .mobile-auth h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: auto;
}

.mobile-title-arrow h3 {
    margin-right: 5px;
    cursor: pointer;
    color: #5f5f5f;
}

.mobile-menu-items {
    background-color: hsl(0, 3%, 92%);
    color: hsl(240, 35%, 32%);
    padding: 10px;
    border-radius: 20px;
    font-size: 28px;
    font-weight: 400;
    font-family: 'Overpass', sans-serif;
    display: none;
    height: 0;
    transition: 0.3s ease
}

.subitem_visible {
    display: block;
    height: auto;
    transition: 0.3s ease
}

.mobile-auth ul {
    list-style-type: none;
    padding-inline-start: 0;
    
}

.mobile-auth li {
    cursor: pointer;
}


.mobile-auth {
    border-top: solid 1px #ccc
}

.btn {
    background: linear-gradient(0.25turn, hsl(13, 100%, 72%), hsl(353, 100%, 62%)) ;
    padding: 10px 20px;
    color: white;
    width: 100px;
    margin: auto;
    border-radius: 80px;
    transition: 0.3s ease
}

.btn:hover {
    background: white;
    color:  hsl(353, 100%, 62%);
    border: solid 1px hsl(13, 100%, 72%);
    transition: 0.3s ease
}

.btn h3 {
    width: auto;
}





</style>