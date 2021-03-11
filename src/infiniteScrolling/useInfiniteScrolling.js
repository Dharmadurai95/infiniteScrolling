import axios from 'axios'
import {useEffect,useCallback,useState,useRef} from 'react'

export default function useInfiniteScrolling(pageNumber) {
    const [pageTitle,setPageTitle] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    // useEffect(()=> {
    //     setPageTitle([])
    // },[pageNumber])
    useEffect(()=> {
        setLoading(true);
        setError(false)
        let cancel
        axios({
            method:"GET",
            url:`https://picsum.photos/v2/list?page=${pageNumber}&limit=70`,
            cancelToken:new axios.CancelToken(c=> cancel=c)
        }).then((response)=> {
            console.log(response)
            return setPageTitle(prevState => [...new Set ([...prevState,...response.data.map((title)=>title.download_url)])])
        }).catch((error)=> {
            if(axios.isCancel(error))return
            setError(error)
        })
        return ()=> cancel()
    },[pageNumber])
    return {error,pageTitle,loading}
}
