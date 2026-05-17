import { observer } from "mobx-react-lite";
import map from "@/assets/images/map.png";

const Map = observer(function Map() {
  return (
    <div>
      <img src={map} alt="Карты" />
    </div>
  );
});

export default Map;
