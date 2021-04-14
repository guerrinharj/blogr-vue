<template>
  <the-intro> </the-intro>
  <the-section> </the-section>
  <the-footer> </the-footer>
</template>

<script>

import TheIntro from './components/TheIntro.vue'
import TheSection from './components/TheSection.vue'
import TheFooter from './components/TheFooter.vue'


export default {
  components: {
    TheIntro,
    TheSection,
    TheFooter
  },
    data() {
      return {
         menu: [
                {
                    name: 'Product',
                    subitems: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'],
                    isActive: false
                }, 
                {
                    name: 'Company',
                    subitems: ['About', 'Team', 'Blog', 'Careers'],
                    isActive: false
                },  
                {
                    name: 'Connect',
                    subitems: ['Contact', 'Newsletter', 'LinkedIn'],
                    isActive: false
                }, 
            ],

          auth: [
                    {
                    name: 'Login',
                    border: false
                    }, 
                    {
                    name: 'Sign Up',
                    border: true
                    }
                ]

      }
  },
  provide() {
   return {
     menu: this.menu,
     auth: this.auth
   }

  }
}

</script>



<style>

  @import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');


  body {
    font-family: 'Overpass', sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    overflow-x:hidden
  }

  .ubuntu {
    font-family: 'Ubuntu', sans-serif;
  }

</style>
