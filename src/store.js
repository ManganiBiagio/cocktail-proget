import { reactive } from "vue";
import axios from "axios";
import { Navbar } from "./navBar";

export const store = reactive({
    
    threeDrink:[],
    random3drink(){
        for(let i=0;i<3;i++){
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then((resp)=>{
               store.threeDrink.push(resp.data.drinks[0]) ;
               
                
            })

        }
        
    },
    navBar:new Navbar(),
    

})