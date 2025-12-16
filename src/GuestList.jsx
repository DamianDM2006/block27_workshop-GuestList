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
      try{
        const response = await fetch(API + "guests");
        const jsonResponse = await response.json();
        const allGuests = jsonResponse.data;
        console.log(allGuests);
        setGuestList(allGuests);
      }
      catch(error) {
        console.log(error)
      }
    };
    getAllGuests();
  },[]);

  // useEffect (() => {
  //   const getGuestDetails = async(id) => {
  //     try{
  //       const response = await fetch(API + "guests/" + id);
  //       console.log(response);
  //       const jsonResponse = await response.json();
  //       console.log(jsonResponse);
  //     }
  //     catch(error) {
  //       console.log(error)
  //     }
  //   };
  //   getGuestDetails();

  // },[setGuestDetails]);
    

  return (
    <ol>
      {guestList.map((eachGuest) => {
        return (
          <li
            // onClick={() => {getGuestDetails(eachGuest.id)}}
            key={eachGuest.id}>
            <div>
              <strong>{eachGuest.name}:</strong> {eachGuest.job}
            </div>
            <div>
              {eachGuest.email}
            </div>
          </li>
        )
      })}
    </ol>
  )
}


export default GuestList;