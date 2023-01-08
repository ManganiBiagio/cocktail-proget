<template lang="">
    <section>

        <div class="container py-5 ">
            <Transition name="slide-fade">
                <div class="row" v-if="store.threeDrink.length>2">
                    <div class="col-4" v-for="drink in store.threeDrink">
                        <TheDrinkCard :drink="drink"></TheDrinkCard>
                    </div>
                    
                </div>
            </Transition>
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

    
</style>