<template lang="">
    <div  class="background row g-0">

       
           <div class="col-7">
               
            </div>
            <div class="col-3">
                <div class="center">
                    <div class="box-card">
                        <div class="title ElzaExtralightOblique mb-2">Margarita</div>
                        <div class="paragraf ElzaThin">
                            Il margarita è un cocktail composto da <strong>tequila</strong>,
                             <strong>liquore all'arancia</strong>  e <strong>succo di lime</strong>; 
                            spesso viene servito con <strong>sale</strong> sul bordo del bicchiere.
                             È il più comune cocktail messicano a base di tequila 
                             e in genere viene servito come aperitivo
                        </div>
                        <div class="subtitle ElzaThinOblique">
                            Ingredienti

                        </div>
                        <div class="ingredient-list ElzaThin">
                            <ul>
                                <li>
                                    Tequila - 50%
                                </li>
                                <li>
                                    Triple Sec - 21.5%
                                </li>
                                <li>
                                    Lime fresco
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
       

            
      
        
        
        
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.background {
    background-size: cover;
    height: 1000px;
    background-image: url(/HeroHor.jpg);
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    color: var(--color-white);

}

.title {
    font-size: 2.5rem;
    text-align: center;
}

.paragraf {
    font-size: 1.5rem;
}
.subtitle{
    text-align: center;
    font-size: 2rem;

}
.ingredient-list{
    text-align: center;
    ul{
        margin: unset;
        padding: unset;
        list-style: none;

        li{
            
            text-align: center;
        }
    }
}

.center {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.box-card {
    background-color: black;
    opacity: 50%;
    padding: 2rem;
}
</style>