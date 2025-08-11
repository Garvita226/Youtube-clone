import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

const Body = () => {
  return (
    <div className="flex relative top-16">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
