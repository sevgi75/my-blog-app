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
    logoutSuccess:(state)=>{}
  },
})

export const {} = authSlice.actions
export default authSlice.reducer
