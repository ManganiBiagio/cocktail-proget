<script >


import TheNavbar from './components/TheNavbar.vue';
import TheHome from './components/TheHome.vue'
import {store} from './store'

export default{
  components:{
    TheHome,
    TheNavbar,
    
},
data(){
        return{
                store,
        }
    },
}
</script>

<template>
  <TheNavbar class="nav-box"></TheNavbar>
  <TheHome v-if="store.navBar.indexLink===0"></TheHome>
  

  

</template>

<style lang="scss">
@use "./styles/general.scss";
.nav-box{
  position:fixed;
  top: 0;
  z-index: 5;

}


</style>
