import tach from "@/assets/icons/tach.svg";
import hat from "@/assets/icons/hat.svg";
import star from "@/assets/icons/star.svg";
import clipboardList from "@/assets/icons/clipboardList.svg";
import university from "@/assets/icons/university.svg";

export default function CardSequence() {
  return (
    <div className="w-137.25 p-6 rounded-3xl bg-[#F7EBE2] backdrop-blur-[60px]">
      <div className="bg-[#E9DACB] p-4 rounded-3xl flex flex-col gap-2">
        <div className="px-6 h-18.25 bg-white rounded-2xl flex items-center gap-4">
          <img src={tach} alt="Иконка" />
          <div className="min-w-14 h-14 bg-[#DDEDF9] rounded-xl flex items-center justify-center">
            <img src={hat} alt="Шапка" />
          </div>
          <p className="font-semibold text-[20px] leading-[115%] text-[#000000] ml-4">
            Записаться на курс
          </p>
        </div>

        <div className="px-6 h-18.25 bg-white rounded-2xl flex items-center gap-4">
          <img src={tach} alt="Иконка" />
          <div className="min-w-14 h-14 bg-[#E0E6FB] rounded-xl flex items-center justify-center">
            <img src={clipboardList} alt="Список" />
          </div>
          <p className="font-semibold text-[20px] leading-[115%] text-[#000000] ml-4">
            Пройти тест
          </p>
        </div>

        <div className="px-6 h-18.25 bg-white rounded-2xl flex items-center gap-4">
          <img src={tach} alt="Иконка" />
          <div className="min-w-14 h-14 bg-[#F46248] rounded-xl flex items-center justify-center">
            <img src={university} alt="Универ" />
          </div>
          <p className="font-semibold text-[20px] leading-[115%] text-[#000000] ml-4">
            Получить преимущества при поступлении в лучшие ВУЗы
          </p>
        </div>

        <div className="px-6 h-18.25 bg-white rounded-2xl flex items-center gap-4">
          <img src={tach} alt="Иконка" />
          <div className="min-w-14 h-14 bg-[#FEEBBF] rounded-xl flex items-center justify-center">
            <img src={star} alt="Звезда" />
          </div>
          <p className="font-semibold text-[20px] leading-[115%] text-[#000000] ml-4">
            Получить рекомендации
          </p>
        </div>
      </div>
    </div>
  );
}
