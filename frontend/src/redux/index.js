import { configureStore } from "@reduxjs/toolkit"
import authReduser from "./auth.reduser"



const store = configureStore({
    reducer:{
        authentication:authReduser
        // authentication:productReduser
        // authentication:cartReduser
    }
})

export default store 