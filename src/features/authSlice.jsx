import { createSlice } from "@reduxjs/toolkit"

const initialState={
  user: "",
  loading: false,
  error: false,
  token: "",
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state)=>{
      state.loading=true;
    },
    loginSuccess: (state, {payload})=>{
      state.loading=false
      state.user=payload.user
      state.token=payload.token
    },
    logoutSuccess:(state)=>{
      state.loading=false
      state.user=""
      state.token=""
    },
    registerSuccess:(state, {payload})=>{
      state.loading=false
      state.user=payload.data
      state.token=payload.token
    },
    fetchFail:(state)=>{
      state.loading=false
      state.error=true
    },
  },
})

export const {fetchStart, loginSuccess, logoutSuccess, registerSuccess,fetchFail} = authSlice.actions
export default authSlice.reducer
