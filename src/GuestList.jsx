import { useState, useEffect } from "react";
import { useGuest } from "./GuestContext";

const base = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const cohort = "2510-FTB-CT-WEB-PT/";
const API = base + cohort;

const GuestList = () => {
  const { setGuestDetails } = useGuest();
  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    const getAllGuests = async () => {
      const response = await fetch(API + "guests");
      const jsonResponse = await response.json();
      const allGuests = jsonResponse.data;
      console.log(allGuests);
      setGuestList(allGuests);
    }

    getAllGuests();
  },[]);

  return (
    <ol>
      {guestList.map((eachGuest) => {
        return <li key={eachGuest.id}>{eachGuest.name}</li>
      })}
    </ol>
  )
}


export default GuestList;