import { observer } from "mobx-react-lite";
import Map from "../Map/Map";
import schoolboy3 from "@/assets/images/schoolboy3.png";

const Olympiad = observer(function Olympiad() {
  return (
    <div className="relative">
      <Map />

      <div className="absolute right-0 bottom-0">
        <img src={schoolboy3} alt="Школьник" className="relative z-10" />
      </div>
    </div>
  );
});

export default Olympiad;
