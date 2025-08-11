import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const searchResults = useSelector(store => store.videos)

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json()
    setVideos(json.items)
  }

  useEffect(() => {
    searchResults.length ? setVideos(searchResults) : getVideos()
  }, [])

  useEffect(() => {
    setVideos(searchResults)
  }, [searchResults])

  return (
    <div className="py-2 flex flex-wrap justify-center">
      { videos.map( video =>  ( 
       <Link key={video.etag} to={'/watch?v=' + (video.id.videoId || video.id)}> <VideoCard info={video} /> </Link> ) ) }
    </div>
  )
}

export default VideoContainer
