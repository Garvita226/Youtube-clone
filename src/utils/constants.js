export const HAM_ICON = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'

export const LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png'

export const USER_ICON = 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'

const GOOGLE_API_KEY = 'AIzaSyCLgdS1OXlY1zJJiz0jQpCtTaV1_aF01C8'

export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + GOOGLE_API_KEY

export const YOUTUBE_SEARCH_SUGGESTIONS_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const YOUTUBE_WATCH_VIDEO_API = 'https://www.googleapis.com/youtube/v3/videos?key=' + GOOGLE_API_KEY + '&part=snippet,statistics&id='

export const YOUTUBE_SEARCH_VIDEOS_API = 'https://www.googleapis.com/youtube/v3/search?key=' + GOOGLE_API_KEY + '&part=snippet&maxResults=50&type=video&q='

export const COMMENTS_API = 'https://www.googleapis.com/youtube/v3/commentThreads?part=id,replies,snippet&maxResults=100&key=' + GOOGLE_API_KEY + '&videoId='

