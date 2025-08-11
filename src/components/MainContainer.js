import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"
import useOpacity from '../utils/useOpacity';
import useScroll from "../utils/useScroll";


const MainContainer = () => {

  useScroll();
  const opacity = useOpacity();

  return (
    <div className={"transition duration-100 ease-in-out p-6 opacity-" + opacity}>
    {/* // <div className={"p-6 opacity-50"}> */}
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
