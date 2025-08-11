

const VideoCard = ({info}) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='w-[22rem] mx-1 my-4 p-4 hover:bg-gray-100 rounded-xl'>
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-xl" />
      <ul>
        <li className="font-bold"> {title.slice(0,60)}... </li>
        <li className="text-sm text-gray-700"> {channelTitle} </li>
        { statistics && <li className="text-sm text-gray-700" > {statistics?.viewCount} views </li>}
      </ul>
    </div>
  )
}

export default VideoCard
