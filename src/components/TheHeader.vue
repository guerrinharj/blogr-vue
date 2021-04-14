<template>
    <div class="header">
        <div class="logo-menu">
            <the-logo> </the-logo>
            <div class="menu"> 
                <ul>
                    <li v-for="(item, index) in menu" :id="item.name" :key="index"> 

                         <span class="the-name"> {{ item.name }} 

                        <img src="../assets/icon-arrow-light.svg"> 

                         
                        <span class="the-drop" :class="{'active': item.isActive}"> 
                            <drop-down :subitem="item.subitems" :isfooter="false"> </drop-down> 
                        </span>
                        </span>
                        
                    </li>
                </ul>
            </div>
            
        </div>

        <div class="auth">
            <ul>
                <li :class="{border: authitem.border} " v-for="authitem in auth" :key="authitem"> {{ authitem.name }} </li>
            </ul>
        </div>

    </div>

</template>


<script>



export default {


    inject: ['menu', 'auth']
   
    
}
</script>


<style scoped>

.header {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    top: 40px;
    color: white;
}

.logo-menu {
    display: flex;
    align-items: center;
}


.border {
    border: solid 2px white;
    border-radius: 20px;
    background-color: white;
    color:  hsl(353, 100%, 62%); 
    padding: 8px 15px;
    transition: 0.1s ease
}

.border:hover {
    transition: 0.1s ease;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
}

ul {
    display: flex;
    list-style-type: none;
}

.auth ul {
    display: flex;
    align-items: center;
}


li {
    margin: 0 20px;
    cursor: pointer;
}

.the-drop {
    opacity: 0;
    height: 0px;
    transition: 0.2s ease;
    color: black;
}

.the-name:hover .the-drop {
    opacity: 1;
    height: auto;
    transition: 0.3s ease;

}

.active {
    opacity: 1;
    height: auto;
    transition:  0.3s ease;
}


</style>