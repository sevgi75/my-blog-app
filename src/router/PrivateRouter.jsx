import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = () => {
  const user = true
  // const currentUser = true

  return user ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRouter
