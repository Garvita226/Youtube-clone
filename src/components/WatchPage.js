import {  useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import useOpacity from '../utils/useOpacity';
import useScroll from '../utils/useScroll';
import useVideoDetails from '../utils/useVideoDetails';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
  useScroll();
  const opacity = useOpacity();

  const [isExpanded, setIsExpanded] = useState(false)

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const [details, comments] = useVideoDetails(videoId);
  const { snippet, statistics } = details;


  const handleDesc = () => {
    setIsExpanded(!isExpanded)
  }


  return details && (

    // Embedded video section
    <div className={'grid grid-flow-col transition duration-100 ease-in-out py-6 px-24 opacity-' + opacity}>
      <div className='col-span-5'>
        <iframe className='rounded-xl' width="673" height="370" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>

        <div className='w-[42rem] my-2 px-1'>

          {/* Video Title */}
          <div className='font-bold text-xl text-justify'>{snippet?.title}</div>

          {/* Actions Section */}
          <div className='grid grid-flow-col my-2 items-center'>
            <div className='flex col-span-3 justify-between pr-16'>
              <div className='font-semibold text-lg bg-gray-100 px-2 rounded-sm cursor-pointer mr-3'> {snippet?.channelTitle} </div>
              <button type='button' className='text-sm font-medium bg-black text-white rounded-full px-4 cursor-pointer'>Subscribe</button>
            </div>
            <div className='col-span-9 flex justify-between items-center pl-6 pr-4 ml-10 max-w-96'>
              <span className='bg-gray-100 px-2 py-1 rounded-full'>
                <span className='text-2xl cursor-pointer'>👍🏿</span>
                <span className='text-md font-medium'>{statistics?.likeCount}  </span>
                <span className='text-2xl ml-3 cursor-pointer'> 👎🏿</span>
              </span>
              <span className='text-md font-medium bg-gray-100 px-3 py-1 rounded-full cursor-pointer'>➡️ Share</span>
              {/* <span className='text-2xl font-medium bg-gray-100 px-2 py-1 rounded-full'>...</span> */}
            </div>
          </div>

          {/* Description Section */}
          <div className='my-4 p-4 text-justify bg-gray-100 rounded-xl'>
            <div className='text-sm font-semibold'>{statistics?.viewCount} views </div>
            <div className='text-sm whitespace-pre-line my-1'>{ !isExpanded ? snippet?.description.slice(0,123) + '...' :  snippet?.description } </div>
            <button type='button' className='text-sm font-semibold cursor-pointer focus:bg-gray-200' onClick={handleDesc} >
              { !isExpanded ? '...more' : 'Show less' }
              </button>
          </div>


          {/* Comments Section */}
          { comments && (<div className='my-2'>
            <h1 className='text-xl font-bold mt-4'>{statistics?.commentCount} Comments</h1>
            <CommentContainer comments={comments}/>
          </div>)}

        </div>
      </div>
    </div>
  )
}

export default WatchPage
