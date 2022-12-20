import authReduser from "./auth.reduser";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    authentication: authReduser,
    // authentication:productReduser
    // authentication:cartReduser
  },
});

export default store;
