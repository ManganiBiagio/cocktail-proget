<template >
    <div  class="background row g-0">
        
        <div class="col-2">
               
            </div>
            <div class="col-4">
                <div class="center">
                    <div class="box-card">
                        <div class="title ElzaExtralightOblique mb-2">Negroni</div>
                        <div class="paragraf ElzaThin">
                            Fu ideato a <strong>Firenze</strong>  nel 1919-20 dal conte <strong>Camillo Negroni</strong>.
                             Negli anni venti il conte era solito frequentare l'aristocratico
                              Caffè Casoni in Via de' Tornabuoni a Firenze  e, per variare dal suo
                                abituale aperitivo Americano, chiese al barman Angelo Tesauro
                                  di aggiungere un po' di <strong>gin</strong> in sostituzione del seltz, in onore degli ultimi viaggi londinesi.
                                   Il nuovo cocktail divenne noto come <strong>l'"Americano alla moda del conte Negroni"</strong>,
                                    ovvero un Americano con un'aggiunta di gin, e in seguito prese il nome del conte
                                     stesso.
                        </div>
                        <div class="subtitle ElzaThinOblique">
                            Ingredienti

                        </div>
                        <div class="ingredient-list ElzaThin">
                            <ul>
                                <li>
                                    Gin - 3cl
                                </li>
                                <li>
                                    Campari - 3cl
                                </li>
                                <li>
                                    Vermut Rosso - 3cl
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
            <div class="col-6">
               
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
    background-image: url(/negroni01.jpg);
    background-repeat: no-repeat;
    
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
    opacity: 80%;
    padding:1.5rem;
}
</style>