import { observer } from "mobx-react-lite";
import map from "@/assets/images/map.png";
import olympicCenterFrame from "@/assets/images/olympicCenterFrame.png";

interface MapProps {
  showOlympicCenter?: boolean;
}

const Map = observer(function Map({ showOlympicCenter = false }: MapProps) {
  return (
    <div className="relative">
      <img src={map} alt="Карты" />

      {showOlympicCenter && (
        <button type="button" className="absolute top-94.25 left-0">
          <img src={olympicCenterFrame} alt="Олимпиадный центр" />
        </button>
      )}
    </div>
  );
});

export default Map;
