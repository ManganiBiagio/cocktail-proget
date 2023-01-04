<template lang="">
    <div class="my-card">
                        <div class="title ElzaExtralightOblique py-3 ">
                            {{drink.strDrink}}
                        </div>
                        <div class="img-box">
                            <img :src="drink.strDrinkThumb" class="img-fluid" alt="">
                        </div>
                        <div class="instruction ElzaThin">
                           {{drink.strInstructionsIT}}
                
                        </div>
                        <div class="ingredient">

                            <div class="subtitle ElzaThinOblique">Ingredienti</div>
                            <div class="ingredient-list ElzaThin">
                                    <ul >
                                        <li v-for="ingredient in ingredientList" >
                                            {{ingredient.ingredient}} - {{ingredient.mesaure}}                                     
                                        </li>
                                        
                                    </ul>
        
                            </div>
                        </div>
                        
                    </div>
</template>
<script>
export default {
    props:{
        drink:Object,
    },
    data(){
        return{
                
                
        }
    },
    computed:{
        ingredientList(){
            const toReturn=[];
            for(let i=1;i<16;i++){
                if(this.drink[`strIngredient${i}`]!==null){

                    const ingredient=this.drink[`strIngredient${i}`];
                    const mesaure=this.drink[`strMeasure${i}`]
                    toReturn.push({ingredient,mesaure});

                }
                

            }
            return toReturn
        }


       
    },
    
}
</script>
<style lang="scss" scoped>
.my-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-white);
    border-radius: 20px;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    


    .img-box{
        border-radius: 80px;
        overflow: hidden;
        border:3px solid var(--color-white);
        margin: 1rem;
        
    }
    .instruction{
        padding: .5rem 3rem;
        font-size: 1.5rem;
        
        
        
  
        
       
        
        
    }
    .ingredient{
        flex-grow: 1;
    }
    .title{
        font-size: 2.5rem;
    }
    
    .subtitle{
        font-size: 2rem;
        text-align: center;
    }
}
    
</style>