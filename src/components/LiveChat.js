import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, generateRandomString } from "../utils/helper";

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState('')
  const chats = useSelector(store => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomNames(),
        message: generateRandomString(20)
      }));
    }, 1500);

    return () => clearInterval(i)

  }, [])

  return (
    <>
      <div className='border-[0.1rem] rounded-xl bg-slate-50 border-gray-400 w-11/12 h-[370px] py-2 px-4 mx-10 overflow-y-scroll flex flex-col-reverse'>
        {chats.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>

      <form className="border-[0.1rem] border-gray-400 p-2 rounded-xl bg-slate-50 w-11/12 my-2 mx-10"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(addMessage({
            name: 'Garvita Asthana',
            message: liveMessage
          }))

          setLiveMessage('')
        }} >
        <input type="text" className="px-3 py-1 border-[0.1rem] border-gray-400 w-10/12 rounded-xl"
        value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
        <button className="py-1 px-2 bg-blue-200  ml-2 rounded-xl font-semibold">Send</button>
      </form>
    </>
  )
}

export default LiveChat
