<template lang="">
    <section>

        <div class="container py-5 ">
            <div class="row" v-if="drinkList">
                <div class="col-4" v-for="drink in drinkList">
                    <TheDrinkCard :drink="drink"></TheDrinkCard>
                </div>
                
            </div>
        </div>
    </section>
</template>
<script>
import {store} from '../store'
import TheDrinkCard from './TheDrinkCard.vue';
export default {
    components:{
        TheDrinkCard
    },
    data(){
        return{
                drinkList:store.threeDrink,
                store,
        }
    },
    methods:{
        generateThreeCard(){
          store.random3drink();
                
                
            
        }

    },
    mounted(){
        this.generateThreeCard();
    }
    
}
</script>
<style lang="scss" scoped>
section{
    background-color:var(--bg-dark) ;
    color: var(--color-white);
}


    
</style>