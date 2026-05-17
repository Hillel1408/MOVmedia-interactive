import { observer } from "mobx-react-lite";
import Map from "../Map/Map";

const Schoolboy = observer(function Schoolboy() {
  return (
    <div>
      <Map />
    </div>
  );
});

export default Schoolboy;
