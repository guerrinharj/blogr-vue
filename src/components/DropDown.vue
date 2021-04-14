<template>
    <div :class="{footer: isfooter}"> 
        <ul>
            <li class="ubuntu" v-for="si in subitem" :key="si">  {{si}} </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["subitem", 'isfooter']
    
}
</script>

<style scoped>

div {
    position: absolute;
    background-color: white;
    border-radius: 5px;
    padding: 20px 40px 20px 20px;
    box-shadow: 2px 2px 20px #888;
    transform: translate(-10%, 5%)
}

.footer {
    position: relative;
    background-color: inherit;
    padding: 0;
    box-shadow: none;
}


.footer li, .footer li:first-child, .footer li:last-child {
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
}



ul {
    list-style-type: none;
    padding-inline-start: 0px;
}

li {
    font-size: 15px;
    margin: 20px 0;
    opacity: 0.7;
    transition: 0.2s ease
}

li:hover {
    opacity: 1;
     transition: 0.2s ease
}

li:first-child {
    margin: 0px 0px 20px
}

li:last-child {
    margin: 20px 0px 0px
}

@media (max-width: 600px) {

    .footer li {
        font-size: 18px;
        font-weight: 500
    }
}

</style>