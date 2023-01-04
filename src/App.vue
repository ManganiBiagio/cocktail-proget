<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheHero from './components/TheHero.vue';
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <TheNavbar class="nav-box"></TheNavbar>

  <TheHero></TheHero>

</template>

<style lang="scss">
@use "./styles/general.scss";
.nav-box{
  position:fixed;
  top: 0;

}


</style>
