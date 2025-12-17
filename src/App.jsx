import { useGuest } from "./GuestContext";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";


const App = () => {

  return (
    <>
      <h1>Guest List</h1>
      <GuestList/>
      <GuestDetails/>
    </>
  );
};

export default App;
