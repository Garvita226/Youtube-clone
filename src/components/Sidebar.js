import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  return isMenuOpen && (
    <div className="w-48 p-5 shadow-lg h-screen fixed top-16 bg-white z-50 border-2">
      <div className="my-2">
        <ul>
          <Link to={'/'}> <li>Home</li> </Link>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>

      <hr/>
      <div className="my-2">
        <h4 className="font-medium text-lg">Subscriptions</h4>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>

      <hr />
      <div className="my-2">
        <h4 className="font-medium text-lg">Watch Later</h4>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
