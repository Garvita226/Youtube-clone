import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeOpacity } from './appSlice'

const useOpacity = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const opacity = useSelector(store => store.app.opacity)
    const dispatch = useDispatch()

    useEffect(() => {

        if (isMenuOpen) {
            dispatch(changeOpacity(50))
        }
        else {
            dispatch(changeOpacity(100))
        }

    }, [isMenuOpen])

    return opacity;
}

export default useOpacity;