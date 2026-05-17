import { observer } from "mobx-react-lite";
import map from "@/assets/images/map.png";
import olympicCenterFrame from "@/assets/images/olympicCenterFrame.png";

interface MapProps {
  showOlympicCenter?: boolean;
  onOlympicCenterClick?: () => void;
}

const Map = observer(function Map({
  showOlympicCenter = false,
  onOlympicCenterClick,
}: MapProps) {
  return (
    <div className="relative">
      <img src={map} alt="Карты" />

      {showOlympicCenter && (
        <button
          type="button"
          onClick={onOlympicCenterClick}
          className="absolute top-94.25 left-0"
        >
          <img src={olympicCenterFrame} alt="Олимпиадный центр" />
        </button>
      )}
    </div>
  );
});

export default Map;
