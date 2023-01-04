<template lang="">
    <section>

        <div class="container py-5 ">
            <div class="row">
                <div class="col-4">
                    <TheDrinkCard></TheDrinkCard>
                </div>
                <div class="col-4">
                    <TheDrinkCard></TheDrinkCard>
                </div>
                <div class="col-4">
                    <TheDrinkCard></TheDrinkCard>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import TheDrinkCard from './TheDrinkCard.vue';
export default {
    components:{
        TheDrinkCard
    }
    
}
</script>
<style lang="scss" scoped>
section{
    background-color:var(--bg-dark) ;
    color: var(--color-white);
}


    
</style>