import { observer } from "mobx-react-lite";
import map from "@/assets/images/map.png";
import ActionButton from "../ActionButton/ActionButton";

interface MapProps {
  showOlympicCenter?: boolean;
  onOlympicCenterClick?: () => void;

  showAcademy?: boolean;
  onAcademyClick?: () => void;
}

const Map = observer(function Map({
  showOlympicCenter = false,
  onOlympicCenterClick,

  showAcademy = false,
  onAcademyClick,
}: MapProps) {
  return (
    <div className="relative">
      <img src={map} alt="Карты" className="w-full object-cover h-full" />

      {showOlympicCenter && (
        <ActionButton
          onClick={onOlympicCenterClick}
          className="absolute top-10 left-1/2 -translate-x-1/2"
        >
          Олимпиадный центр
        </ActionButton>
      )}

      {showAcademy && (
        <ActionButton
          onClick={onAcademyClick}
          className="absolute top-10 left-1/2 -translate-x-1/2"
        >
          Академия
        </ActionButton>
      )}
    </div>
  );
});

export default Map;
