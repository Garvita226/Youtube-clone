import { useEffect } from "react"
import { useSelector } from "react-redux"

const useScroll = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    useEffect(() => {

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

    }, [isMenuOpen])
}

export default useScroll;