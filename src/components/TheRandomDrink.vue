<template lang="">
    <section>

        <div class="container py-5 ">
            <div class="row" v-if="store.threeDrink.length>2">
                <div class="col-4" v-for="drink in store.threeDrink">
                    <TheDrinkCard :drink="drink"></TheDrinkCard>
                </div>
                
            </div>
            <div class="box-btn">
                <button class="my-btn-primary ElzaOblique" @click="generateThreeCard()">More</button>
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
                store,
        }
    },
    methods:{
        generateThreeCard(){
            store.threeDrink=[];
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
.box-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    
}

    
</style>