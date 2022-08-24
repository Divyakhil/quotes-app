import React,{useEffect} from "react";
import { NavBar, Card, Button, DropDown} from "../components";
import { useSelector,useDispatch } from "react-redux";
import {getQuotesDetails, getSelectedQuotesDetails} from "../redux/quotesDetailsSlice"
import "./index.css"

export default function Home() {
const dispatch=useDispatch()
const {quotesData}=useSelector(state=>state.quotesDetailsReducer)

    useEffect(()=>{
        dispatch(getQuotesDetails())
    },[dispatch])

    const handleButtonClick=()=>{
        dispatch(getQuotesDetails())
    }

    const onOptionChange = (e) => {
        dispatch(getSelectedQuotesDetails(e.target.value));
      };

    return (
        <div>
            <NavBar/>
            <div className="mainContainer">
                <Card quote={quotesData.content} author={quotesData.author} />
            
            <div className="dropDownContainer">
          <DropDown  onOptionChange={onOptionChange}/>
        </div>
        <div className="buttonContainer">
          <Button handleButtonClick={handleButtonClick} label={"Next Quote"} />
        </div>
        </div>
        </div>
    )
}