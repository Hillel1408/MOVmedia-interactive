import { observer } from "mobx-react-lite";
import Map from "../Map/Map";
import schoolboy3 from "@/assets/images/schoolboy3.png";
import { useEffect, useState } from "react";
import schoolboy from "@/assets/images/schoolboy.png";
import CardSequence from "../CardSequence/CardSequence";
import hat from "@/assets/icons/hat.svg";
import star from "@/assets/icons/star.svg";
import clipboardList from "@/assets/icons/clipboardList.svg";
import university from "@/assets/icons/university.svg";
import Modal from "../Modal/Modal";

const Olympiad = observer(function Olympiad() {
  const [step, setStep] = useState(3);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setStep(2);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <div className="relative">
      <Map
        showOlympicCenter={step === 2}
        onOlympicCenterClick={() => setStep(3)}
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

        <div className="p-10 border-[6px] border-[#FFE9C0] rounded-4xl bg-[linear-gradient(180deg,rgba(255,247,241,0.6)_0%,rgba(255,237,224,0.6)_100%)] my-14 mr-14">
          <h1 className="font-semibold text-[40px] leading-12 text-[#0F0F33] mb-6">
            Олимпиадный центр
          </h1>

          <div className="bg-[url('assets/images/olympicCenter.png')] bg-cover bg-center min-h-204.5 rounded-3xl px-6 py-7 flex justify-end">
            <CardSequence
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
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default Olympiad;
