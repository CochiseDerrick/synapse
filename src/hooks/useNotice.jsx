import { useContext } from 'react'
import NoticeProvider from '../context/NoticeProvider'

const useNotice = () => {
    return useContext(NoticeProvider)
}

export default useNotice