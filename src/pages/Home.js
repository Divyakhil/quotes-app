import React,{useEffect} from "react";
import { NavBar } from "../components";
import { useSelector,useDispatch } from "react-redux";
import {getQuotesDetails} from "../redux/quotesDetailsSlice"

export default function Home() {
const dispatch=useDispatch()
const {quotesData}=useSelector(state=>state.quotesDetailsReducer)

    useEffect(()=>{
        dispatch(getQuotesDetails())
    },[dispatch])

    console.log({quotesData})

    return (
        <div>
            <NavBar/>
            Home page
        </div>
    )
}