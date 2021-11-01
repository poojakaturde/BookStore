import { createSlice,configureStore } from '@reduxjs/toolkit';

const initialState = {isAuthenticated:false, username:"",password:""}

export const authslice = createSlice({
    name: "authentication",
    initialState:initialState,
    reducers :{
        login:(state,action)=>{
            state.isAuthenticated = !state.isAuthenticated;
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
         logout :(state)=>{
            state.isAuthenticated = false;
       
        },
        
    }
});

const Store = configureStore({
    reducer :{
        auth:authslice.reducer
      
    }
})

export const authActions = authslice.actions; 
export default Store;