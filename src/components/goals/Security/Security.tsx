import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Map, Modal, InfoCard, ActionButton } from "../../../components";

import schoolboy3 from "@/assets/images/schoolboy3.png";
import schoolboy from "@/assets/images/schoolboy.png";
import globalArea from "@/assets/images/globalArea.png";
import globalArea2 from "@/assets/images/globalArea2.png";

const Security = observer(function Security() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (step !== 3) return;

    const timer = setTimeout(() => {
      setStep(4);
    }, 5000);

    return () => clearTimeout(timer);
  }, [step]);

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

      <Modal isOpen={step === 3 || step === 4 || step === 5}>
        <div className="grid grid-cols-[391px_1fr] items-end h-full">
          <div className="relative">
            <img src={schoolboy} alt="Школьник" />
            {step === 3 && (
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-95 left-7.75">
                Это наше Международное движение, здесь люди из разных стран
                объединяются вокруг финансовой безопасности. Ты сможешь найти
                единомышленников, рассказать о себе и стать его важной частью.
              </div>
            )}
            {step === 4 && (
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-65 left-7.75">
                Хочешь посмотреть с кем можно подружиться? Нажми кнопку и
                увидишь, какие классные ребята есть на нашей платформе
              </div>
            )}
            {step === 5 && (
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-120 left-7.75">
                Ты можешь выбрать любой трек Международного движения по
                финансовой безопасности, а ещё — вести свой блог и создать
                сообщество, где вместе с подписчиками будешь обсуждать главные
                события по теме. Здорово, правда?» Готов двигаться дальше?
              </div>
            )}
          </div>
          <InfoCard
            title="Академия"
            backgroundImage={step === 5 ? globalArea2 : globalArea}
            className=""
          >
            {step === 3 && <></>}
            {step === 4 && (
              <ActionButton
                onClick={() => setStep(5)}
                className="w-111 mx-auto"
              >
                Найти друзей
              </ActionButton>
            )}
            {step === 5 && (
              <ActionButton
                onClick={() => setStep(6)}
                className="w-111 mx-auto"
              >
                Завершить маршрут
              </ActionButton>
            )}
          </InfoCard>
        </div>
      </Modal>
    </div>
  );
});

export default Security;
