import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "./appSlice";
import { COMMENTS_API, YOUTUBE_WATCH_VIDEO_API } from "./constants";

const useVideoDetails = (videoId) => {
    const dispatch = useDispatch();
    const [videoDetails, setVideoDetails] = useState({})
    const [comments, setComments] = useState([])

    const getVideo = async () => {
        const data = await fetch(YOUTUBE_WATCH_VIDEO_API + videoId)
        const json = await data.json()
        setVideoDetails(json.items[0])
    }

    const getComments = async () => {
        const data = await fetch(COMMENTS_API + videoId)
        const json = await data.json()
        setComments(json.items)
    }

    useEffect(() => {
        dispatch(closeMenu())
        getVideo()
        getComments()
    }, [])

    return [videoDetails, comments]
}

export default useVideoDetails;