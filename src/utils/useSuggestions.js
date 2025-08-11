import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "./constants";
import { useEffect, useState } from "react";
import { cacheResults } from "./searchSlice";

const useSuggestions = ( searchText ) => {
    const searchCache = useSelector(store => store.search);
    const dispatch = useDispatch()
    const [suggestions, setSuggestions] = useState([])

    const getSuggestions = async () => {
            const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchText)
            const json = await data.json()
            setSuggestions(json[1])
            dispatch(cacheResults({
                [searchText]: json[1]
            }))
        }
    
        useEffect(() => {
    
            if (!searchText) return
    
            const timer = setTimeout(() => {
    
                if (searchCache[searchText]) {
                    setSuggestions(searchCache[searchText])
                } else {
                    getSuggestions()
                }
    
            }, 200)
    
            return () => {
                clearTimeout(timer)
            }
    
        }, [searchText])

        return suggestions
}

export default useSuggestions;