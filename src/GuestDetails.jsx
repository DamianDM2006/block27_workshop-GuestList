import { useState, useEffect } from "react";
import { useGuest } from "./GuestContext";

const base = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const cohort = "2510-FTB-CT-WEB-PT/";
const API = base + cohort;

const GuestDetails = () => {
  const { guestId, setGuestId } = useGuest();
  console.log(guestId);
  useEffect (() => {
    const getGuestDetails = async() => {
      try{
        console.log(`ID`, guestId);
        const response = await fetch(API + "guests/" + guestId);
        console.log(response);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      }
      catch(error) {
        console.log(error)
      }
    };
    getGuestDetails();

  },[guestId]);

  return (
    <>
      <h1>Guest Details</h1>
      
    </>
  )
    
};

export default GuestDetails;