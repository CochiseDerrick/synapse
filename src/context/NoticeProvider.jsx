
import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const NoticeContext = createContext()

const NoticeProvider = ({children}) => {

    const [category, setCategory] = useState('general')
    const [notices, setNotices] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect( () => {
        const consultApi = async () => {
            const URL = `https://newsapi.org/v2/everything?q=crime&apiKey=${import.meta.env.VITE_API_KEY}`
            const {data} = await axios(URL)
            setNotices(data.articles)
            setTotalPages(data.totalResults)
            setPage(1)
        }
        consultApi()
    }, [category] )

    useEffect( () => {
        const consultApi = async () => {
            const URL = `https://newsapi.org/v2/everything?q=crime&apiKey=${import.meta.env.VITE_API_KEY}`
            const {data} = await axios(URL)
            setNotices(data.articles)
            setTotalPages(data.totalResults)
        }
        consultApi()
    }, [page] )


    const handleSubmitCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleSubmitPage = (e, value) => {
        setPage(value)
    }

    return (
        <NoticeContext.Provider
        value={{category, handleSubmitCategory, notices, page, totalPages, handleSubmitPage}}>
            {children}
        </NoticeContext.Provider>
    )
}

export {
    NoticeProvider
}
export default NoticeContext