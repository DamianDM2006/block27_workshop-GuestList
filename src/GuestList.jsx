import { useState, useEffect } from "react";
import { useGuest } from "./GuestContext";

const base = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const cohort = "2510-FTB-CT-WEB-PT/";
const API = base + cohort;

const GuestList = () => {
  const { setGuestId } = useGuest();
  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    const getAllGuests = async () => {
      try {
        const response = await fetch(API + "guests");
        const jsonResponse = await response.json();
        const allGuests = jsonResponse.data;
        setGuestList(allGuests);
      } catch (error) {
        console.log(error);
      }
    };
    getAllGuests();
  }, []);

  return (
    <>
      <h1>Guest List</h1>
      <ol>
        {guestList.map((eachGuest) => {
          return (
            <li
              onClick={() => {
                setGuestId(eachGuest.id);
              }}
              key={eachGuest.id}
            >
              <div>
                <strong>{eachGuest.name}:</strong> {eachGuest.job}
              </div>
              <div>{eachGuest.email}</div>
            </li>
          );
        })}
      </ol>
      <p>Select a guest in order to see more information about the guest.</p>
    </>
  );
};

export default GuestList;
