<template lang="">
    <div class="my-card">
                        <div class="title ElzaExtralightOblique py-3 ">
                            Negroni
                        </div>
                        <div class="img-box">
                            <img src="../../public/preview.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="instruction ElzaThin">
                            Strofina il bordo del bicchiere con la fetta di lime per
                            far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno
                             e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore
                              e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, 
                              quindi versarli delicatamente nel bicchiere."
                
                        </div>
                        <div class="subtitle ElzaThinOblique">Ingredienti</div>
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
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.my-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-white);
    border-radius: 20px;

    .img-box{
        border-radius: 80px;
        overflow: hidden;
        border:3px solid var(--color-white);
    }
    .instruction{
        padding: .5rem 3rem;
        font-size: 1.5rem;
    }
    .title{
        font-size: 2.5rem;
    }
    .subtitle{
        font-size: 2rem;
    }
}
    
</style>