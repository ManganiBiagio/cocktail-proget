<script >

import TheHero from './components/TheHero.vue';
import TheNavbar from './components/TheNavbar.vue';
import TheRandomDrink from './components/TheRandomDrink.vue';
export default{
  components:{
    TheHero,
    TheNavbar,
    TheRandomDrink

  },
}
</script>

<template>
  <TheNavbar class="nav-box"></TheNavbar>

  <TheHero></TheHero>
  <TheRandomDrink></TheRandomDrink>

</template>

<style lang="scss">
@use "./styles/general.scss";
.nav-box{
  position:fixed;
  top: 0;
  z-index: 5;

}


</style>
