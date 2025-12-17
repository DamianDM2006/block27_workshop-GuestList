import { useGuest } from "./GuestContext";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";

const App = () => {
  const { guestId } = useGuest();

  return <>{guestId ? <GuestDetails /> : <GuestList />}</>;
};

export default App;
