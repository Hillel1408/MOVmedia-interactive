import { useState } from "react";
import schoolboy from "@/assets/images/schoolboy.png";
import student from "@/assets/images/student.png";
import expert from "@/assets/images/expert.png";
import teacher from "@/assets/images/teacher.png";

export default function Intro() {
  const [step, setStep] = useState(4);

  return (
    <div className="h-screen bg-[url('assets/images/map.png')] bg-cover bg-center">
      {step === 1 && (
        <div className="max-w-277.5 mx-auto text-center pt-22.5">
          <h1 className="font-semibold text-[120px] leading-33 text-[#0f0f33]">
            Город <br /> содружества
          </h1>
          <p className="font-semibold text-[56px] leading-16 text-[#646872]">
            Пространство для твоего развития
          </p>
          <button
            type="button"
            className="h-24 mx-auto flex items-center justify-center w-95.75 bg-[#EA5614] shadow-[0px_18px_40px_0px_#32292299] rounded-3xl font-semibold text-[40px] leading-12 text-white"
            onClick={() => setStep(2)}
          >
            Начать
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1 className="font-semibold text-[80px] leading-22 text-[#0F0F33] text-center">
            Добро пожаловать в Город содружества
          </h1>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-445.5 mx-auto">
          <h1 className="font-semibold text-[80px] leading-22 text-[#0F0F33] text-center">
            Добро пожаловать в Город содружества
          </h1>
          <p className="font-medium text-[42px] leading-12.5 text-[#646872] text-center">
            Здесь есть всё для вашего развития и профессионального роста в
            финансовой безопасности и смежных сферах. Мы поможем раскрыть
            талант, построить карьеру, реализовать экспертизу, найти партнёров,
            единомышленников и наставников. Курсы, олимпиады, живое общение,
            нетворкинг — всё, чтобы каждый нашёл свой путь. Давайте отправимся в
            путешествие — и узнаем, что вас ждёт
          </p>
        </div>
      )}

      {step === 4 && (
        <div>
          <h1 className="font-semibold text-[80px] leading-22 text-[#0F0F33] text-center">
            Добро пожаловать в Город содружества
          </h1>
          <p className="font-medium text-[42px] leading-12.5 text-[#646872] text-center">
            Но сперва нужно познакомиться ближе. Выберите роль
          </p>
          <div className="grid grid-cols-4">
            <div>
              <span>Школьник</span>
              <span>Артём</span>
              <img src={schoolboy} alt="Школьник" />
            </div>

            <div>
              <span>Студент</span>
              <span>Диана</span>
              <img src={student} alt="Студент" />
            </div>

            <div>
              <span>Эксперт</span>
              <span>Екатерина</span>
              <img src={expert} alt="Эксперт" />
            </div>

            <div>
              <span>Представитель ВУЗа</span>
              <span>Алексей</span>
              <img src={teacher} alt="Представитель ВУЗа" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
