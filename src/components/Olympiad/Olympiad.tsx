import { observer } from "mobx-react-lite";
import Map from "../Map/Map";
import schoolboy3 from "@/assets/images/schoolboy3.png";
import { useEffect, useState } from "react";

const Olympiad = observer(function Olympiad() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Map showOlympicCenter={step === 2} />

      <div className="absolute right-0 bottom-0">
        <img src={schoolboy3} alt="Школьник" className="relative z-10" />

        {step === 1 && (
          <div className="text-[31px] leading-10 text-white w-172.5 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-95.5 right-57">
            Вижу, что ты выбрал подготовку к Олимпиаде, отличный выбор! Пойдем
            скорее, я расскажу тебе, какие возможности для развития тебя ждут.
          </div>
        )}

        {step === 2 && (
          <div className="text-[31px] leading-10 text-white w-156.25 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-110.25 right-58.75">
            Начинаем с Олимпиадного центра! Жми на здание, не стесняйся
          </div>
        )}
      </div>
    </div>
  );
});

export default Olympiad;
