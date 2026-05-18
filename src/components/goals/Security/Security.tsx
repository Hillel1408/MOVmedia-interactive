import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Map } from "../../../components";

import schoolboy3 from "@/assets/images/schoolboy3.png";

const Security = observer(function Security() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const mapStepConfig: Record<
    number,
    {
      buttonText: string;
      onClick: () => void;
    }
  > = {
    2: {
      buttonText: "Глобальная площадь",
      onClick: () => setStep(3),
    },
  };

  const currentMapConfig = mapStepConfig[step];

  return (
    <div className="relative h-screen">
      <Map
        buttonText={currentMapConfig?.buttonText}
        onButtonClick={currentMapConfig?.onClick}
      />

      {step === 1 && (
        <div className="absolute right-0 bottom-0">
          <img src={schoolboy3} alt="Школьник" className="relative z-10" />
          <div className="text-[32px] leading-10 text-white w-172.5 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-95.5 right-57">
            Да, это пожалуй, самая интересная цель! Пойдём скорее, я расскажу
            тебе, какие возможности для развития тебя ждут.
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="absolute right-0 bottom-0">
          <img src={schoolboy3} alt="Школьник" className="relative z-10" />
          <div className="text-[31px] leading-10 text-white w-156.25 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-110.25 right-58.75">
            Начинаем с Глобальной площади! Жми на здание, не стесняйся
          </div>
        </div>
      )}
    </div>
  );
});

export default Security;
