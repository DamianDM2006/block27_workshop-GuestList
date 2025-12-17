import { useState, useEffect } from "react";
import { useGuest } from "./GuestContext";

const base = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const cohort = "2510-FTB-CT-WEB-PT/";
const API = base + cohort;

const GuestDetails = () => {
  const  { guestId, setGuestId }  = useGuest();
  const [ guestInfo, setGuestInfo ] = useState(null);

  useEffect (() => {
    const getGuestDetails = async() => {
      try{
        const response = await fetch(API + "guests/" + guestId);
        const jsonResponse = await response.json();
        setGuestInfo(jsonResponse.data);
      }
      catch(error) {
        console.log(error);
        return null;
      }
    };
    getGuestDetails();

  },[guestId]);

  if (guestInfo === null) return <p>Select a guest for mor information.</p>;

  return (
    <>
      <h1>Guest Details</h1>
        <h2>{guestInfo.name}:  </h2>
        <h3>Title:  {guestInfo.job}</h3>
        <p>{guestInfo.bio}</p>
        <div>Email:  {guestInfo.email}</div>
        <div>Phone: {guestInfo.phone}</div>
         <button onClick={() => setGuestId(null)}>Back</button>

    </>
  )
    
};

export default GuestDetails;