import { useDispatch } from "react-redux"
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice"
import { useNavigate } from "react-router-dom"
import useAxios from "./useAxios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useAuthCalls = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {axiosWithToken, axiosPublic} = useAxios()

  const login = async(userInfo)=>{
    dispatch(fetchStart())
    try {
      const {data} = await axiosPublic.post("auth/login/", userInfo)
      console.log(data);
      toastSuccessNotify("Login işlemi başarili.")
      dispatch(loginSuccess(data))
      navigate("/")
    } catch (error) {
      console.log(error);
      toastErrorNotify("Login işlemi başarisiz!")
      dispatch(fetchFail())      
    }
  }
  const register = async(userInfo)=>{
    dispatch(fetchStart())
    try {
      const {data} = await axiosPublic.post("/users/", userInfo)
      console.log(data);
      toastSuccessNotify("Register işlemi başarili.")
      dispatch(registerSuccess(data))
      navigate("/")      
    } catch (error) {
      console.log(error);
      toastErrorNotify("Register işlemi başarisiz oldu!")
      dispatch(fetchFail())
    }
  }
  const logout = async () => {
    dispatch(fetchStart())
    try {
      const {data} = await axiosWithToken("/auth/logout/")
      console.log(data);
      toastSuccessNotify("Logout işlemi başarili.")
      dispatch(logoutSuccess())
      navigate("/")
    } catch (error) {
      console.log(error);
      toastErrorNotify("Logout işlemi başarisiz oldu!")
      dispatch(fetchFail())
    }
  }
  return {login, register, logout}
}

export default useAuthCalls