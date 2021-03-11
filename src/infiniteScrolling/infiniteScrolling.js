import React, { useState,useRef,useCallback } from 'react'
import useInfiniteScrolling from './useInfiniteScrolling';
import './infinite.css'

const InfiniteScrolling = () => {
    const [pageNumber,setPageNumber]=useState(1)
    let currentElementRef = useRef()

  
    function onChangeHandler(e) {
        setPageNumber(e.target.value)
    }
    let {error,pageTitle,loading}= useInfiniteScrolling(pageNumber)
    console.log(pageTitle)
    let callFunction = useCallback((node)=> {
        if(currentElementRef.current)currentElementRef.current.disconnect()
        currentElementRef.current = new IntersectionObserver(entries=> {
            if(entries[0].isIntersecting){
                setPageNumber(prevNum=> prevNum+1)
            }
        })
        if(node){
            currentElementRef.current.observe(node)
            console.log(node)
        } 
    },[pageTitle])
    return (
        <div className='container'>
            {/* <input type='text' onChange={onChangeHandler}></input> */}
            {pageTitle.map((url,index)=>{
           if(pageTitle.length === index+1) return <div className='parent' key={index} ref={callFunction}><img alt={'loremImage'} src={url}></img></div>
           else return <div className='parent' key={index}><img alt={'loremImage'} src={url}></img></div>
        }
            )}
            <div>
                {error&&error}
            </div>
            <div>
                {loading&& 'loading...'}
            </div>
        </div>
    )
}

export default InfiniteScrolling
