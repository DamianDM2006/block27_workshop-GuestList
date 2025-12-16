import { createContext, useContext, useState } from "react";

const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  const [guestDetails, setGuestDetails] = useState([]);

  const value = {
    guestDetails,
    setGuestDetails
  }

  return <GuestContext.Provider value={value}>{ children }</GuestContext.Provider>
}

export const useGuest = () => {
  const context = useContext(GuestContext);
  if(!context) {
    throw Error('useGuest must be used within a GuestProvider');
  }
  return context;
}