import { USER_ICON } from "../utils/constants"

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center py-2 shadow-sm">
      <img src={USER_ICON} alt="username" className="w-6 h-6 mr-1" />
      <span className="font-semibold px-2">{name}</span>
      <span className="px-1">{message}</span>
    </div>
  )
}

export default ChatMessage
