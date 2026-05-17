import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import {
  Map,
  CardSequence,
  Modal,
  ActionButton,
  InfoCard,
  QuizQuestion,
} from "../../../components";

import schoolboy3 from "@/assets/images/schoolboy3.png";
import schoolboy from "@/assets/images/schoolboy.png";
import hat from "@/assets/icons/hat.svg";
import star from "@/assets/icons/star.svg";
import clipboardList from "@/assets/icons/clipboardList.svg";
import university from "@/assets/icons/university.svg";
import olympicCenter from "@/assets/images/olympicCenter.png";
import аcademy from "@/assets/images/аcademy.png";

const Olympiad = observer(function Olympiad() {
  const [step, setStep] = useState(1);
  const [isSequenceCompleted, setIsSequenceCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Map
        showOlympicCenter={step === 2}
        onOlympicCenterClick={() => setStep(3)}
        showAcademy={step === 4}
        onAcademyClick={() => setStep(5)}
      />

      {step === 1 && (
        <div className="absolute right-0 bottom-0">
          <img src={schoolboy3} alt="Школьник" className="relative z-10" />
          <div className="text-[31px] leading-10 text-white w-172.5 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-95.5 right-57">
            Вижу, что ты выбрал подготовку к Олимпиаде, отличный выбор! Пойдем
            скорее, я расскажу тебе, какие возможности для развития тебя ждут.
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="absolute right-0 bottom-0">
          <img src={schoolboy3} alt="Школьник" className="relative z-10" />
          <div className="text-[31px] leading-10 text-white w-156.25 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-110.25 right-58.75">
            Начинаем с Олимпиадного центра! Жми на здание, не стесняйся
          </div>
        </div>
      )}

      <Modal isOpen={step === 3}>
        <div className="relative">
          <img src={schoolboy} alt="Школьник" />
          <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-75 left-7.75">
            Победители нашей Олимпиады по финансовой безопасности получают баллы
            к ЕГЭ и шанс поступить в крутые вузы. Хочешь проверить, на что
            способен?
          </div>
        </div>

        <InfoCard
          title="Олимпиадный центр"
          backgroundImage={olympicCenter}
          className="grid-cols-[1fr_549px]"
        >
          <div>
            {isSequenceCompleted && (
              <ActionButton onClick={() => setStep(4)} className="w-full">
                Продолжить маршрут
              </ActionButton>
            )}
          </div>

          <CardSequence
            onSuccess={() => setIsSequenceCompleted(true)}
            correctOrder={["clipboardList", "star", "hat", "university"]}
            items={[
              {
                id: "hat",
                icon: hat,
                iconBg: "#DDEDF9",
                title: "Записаться на курс",
              },
              {
                id: "clipboardList",
                icon: clipboardList,
                iconBg: "#E0E6FB",
                title: "Пройти тест",
              },
              {
                id: "university",
                icon: university,
                iconBg: "#F46248",
                title: "Получить преимущества при поступлении в лучшие ВУЗы",
              },
              {
                id: "star",
                icon: star,
                iconBg: "#FEEBBF",
                title: "Получить рекомендации",
              },
            ]}
          />
        </InfoCard>
      </Modal>

      {step === 4 && (
        <div className="absolute left-0 bottom-0">
          <img src={schoolboy} alt="Школьник" className="relative z-10" />
          <div className="text-[24px] leading-[115%] text-white w-79.75 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-135.25 left-46.25">
            Жми на следующую локацию
          </div>
        </div>
      )}

      <Modal isOpen={step === 5}>
        <div className="relative">
          <img src={schoolboy} alt="Школьник" />
          <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-75 left-7.75">
            Победители нашей Олимпиады по финансовой безопасности получают баллы
            к ЕГЭ и шанс поступить в крутые вузы. Хочешь проверить, на что
            способен?
          </div>
        </div>

        <InfoCard
          title="Академия"
          backgroundImage={аcademy}
          className="grid-cols-[1fr_492px]"
        >
          <div></div>
          <QuizQuestion />
        </InfoCard>
      </Modal>
    </div>
  );
});

export default Olympiad;
