import { observer } from "mobx-react-lite";

import { ActionButton } from "../../components";

import map from "@/assets/images/map.png";

interface MapProps {
  buttonText?: string;
  onButtonClick?: () => void;
}

const Map = observer(function Map({ buttonText, onButtonClick }: MapProps) {
  return (
    <div className="relative">
      <img src={map} alt="Карты" className="w-full object-cover h-full" />

      {buttonText && onButtonClick && (
        <ActionButton
          onClick={onButtonClick}
          className="absolute top-10 left-1/2 -translate-x-1/2"
        >
          {buttonText}
        </ActionButton>
      )}
    </div>
  );
});

export default Map;
