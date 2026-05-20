import { observer } from 'mobx-react-lite';

import { map } from '../../assets/images';

interface MapProps {
  buttonText?: string;
  onButtonClick?: () => void;
}

const Map = observer(function Map({ buttonText, onButtonClick }: MapProps) {
  return (
    <div className="relative">
      <img src={map} alt="Карты" className="w-full object-cover" />

      <div>
        <button
          className="absolute top-[26%] right-[2.5%]"
          onClick={() => buttonText === 'Олимпиадный центр' && onButtonClick?.()}
        >
          <img src="/assets/olympicCenterMap.png" alt="Олимпиадный центр" />
        </button>
      </div>

      <button
        className="absolute top-[17%] right-[27%]"
        onClick={() => buttonText === 'Академия' && onButtonClick?.()}
      >
        <img src="/assets/academyMap.png" alt="Академия" />
      </button>

      <button
        className="absolute top-[30%] right-[38%]"
        onClick={() => buttonText === 'Глобальная площадь' && onButtonClick?.()}
      >
        <img src="/assets/globalAreaMap.png" alt="Глобальная площадь" />
      </button>
    </div>
  );
});

export default Map;
