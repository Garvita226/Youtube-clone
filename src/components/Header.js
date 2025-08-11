import { useDispatch, useSelector } from "react-redux";
import { HAM_ICON, LOGO, USER_ICON, YOUTUBE_SEARCH_VIDEOS_API } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import {  useState } from "react";
import useSuggestions from "../utils/useSuggestions";
import { searchVideos } from "../utils/videoSlice";

const Header = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)
    const suggestions = useSuggestions(searchText)
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }

    const handleSearchVideos = async (suggestion) => {
        const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API + suggestion)
        const json = await data.json()
        dispatch(searchVideos(json.items))
    }

    return (
        <div className="grid grid-flow-col fixed w-full z-40 bg-white items-center shadow-lg py-3 px-4">
            <div className="flex items-center col-span-1">
                <img className="w-7 cursor-pointer" src={HAM_ICON} alt="ham-icon" onClick={handleToggleMenu} />
                <img className="h-6 ml-2" src={LOGO} alt="logo" />
            </div>

            {/* Search bar */}
            <div className="col-span-10">
                <div className="text-center relative flex flex-col w-8/12 mx-auto">
                    <div>
                        <input type="text" placeholder="Search" disabled={isMenuOpen}
                            className="border-2 border-gray-400 w-10/12 py-1 px-4 rounded-l-full disabled:opacity-70"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setShowSuggestions(false)} />

                        <button disabled={isMenuOpen} className="border-2 border-gray-400 border-l-0 w-2/12 p-1 rounded-r-full disabled:opacity-70">🔎</button>
                    </div>

                    {showSuggestions && suggestions.length != 0 &&
                        (<div className="fixed top-[3.2rem] rounded-xl text-left bg-white z-50 w-[40.3%] border-2 py-4 px-2 shadow-md">
                            <ul>
                                {suggestions.map(suggestion =>
                                    <li key={suggestion} className="py-2 px-4 font-medium hover:bg-gray-200"
                                    onMouseDown={() => handleSearchVideos(suggestion)} > 🔍 <span className="mx-2"> {suggestion} </span> </li>)}
                            </ul>
                        </div>)}

                </div>

            </div>

            {/* User icon */}
            <div className="w-10 col-span-1 justify-self-end">
                <img src={USER_ICON} alt="user-icon" className="" />
            </div>
        </div>
    )
}

export default Header;