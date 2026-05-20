import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { rootStore } from '../../stores/rootStore';
import { schoolboy, student, expert, teacher } from '../../assets/images';

const roles = [
  {
    key: 'schoolboy',
    title: 'Школьник',
    name: 'Артём',
    image: schoolboy,
  },
  {
    key: 'student',
    title: 'Студент',
    name: 'Диана',
    image: student,
  },
  {
    key: 'expert',
    title: 'Эксперт',
    name: 'Екатерина',
    image: expert,
  },
  {
    key: 'teacher',
    title: 'Представитель ВУЗа',
    name: 'Алексей',
    image: teacher,
  },
];

const Intro = observer(function Intro() {
  const [step, setStep] = useState(1);

  const handleSelectRole = (role: string) => {
    rootStore.setRole(role);

    setTimeout(() => {
      rootStore.finishIntro();
    }, 2000);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="h-full min-h-screen bg-[url('assets/images/introMap.png')] bg-cover bg-center">
      {step === 1 && (
        <div className="max-w-277.5 mx-auto text-center py-22.5">
          <h1 className="font-semibold text-[120px] leading-33 text-[#0f0f33] mb-3">
            Город <br />
            содружества
          </h1>

          <p className="font-semibold text-[56px] leading-16 text-[#646872] mb-115.5">
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

      {(step === 2 || step === 3 || step === 4) && (
        <div className="pt-18 max-w-445.5 mx-auto cursor-pointer h-screen" onClick={nextStep}>
          <h1 className="font-semibold text-[80px] leading-22 text-[#0F0F33] text-center mb-4">
            Добро пожаловать в Город содружества
          </h1>

          {step === 2 && (
            <p className="font-medium text-[42px] leading-12.5 text-[#646872] text-center">
              Нажмите в любое место, чтобы продолжить
            </p>
          )}

          {step === 3 && (
            <p className="font-medium text-[42px] leading-12.5 text-[#646872] text-center">
              Здесь есть всё для вашего развития и профессионального роста в финансовой безопасности
              и смежных сферах. Мы поможем раскрыть талант, построить карьеру, реализовать
              экспертизу, найти партнёров, единомышленников и наставников.
            </p>
          )}

          {step === 4 && (
            <p className="font-medium text-[42px] leading-12.5 text-[#646872] text-center">
              Но сперва нужно познакомиться ближе. Выберите роль
            </p>
          )}
        </div>
      )}

      {step === 5 && (
        <div className="pt-18 pb-14">
          <h1 className="font-semibold text-[80px] leading-22 text-[#0F0F33] text-center mb-4">
            Добро пожаловать в Город содружества
          </h1>

          <p className="font-medium text-[42px] leading-12.5 text-[#646872] text-center mb-13.25">
            Но сперва нужно познакомиться ближе. Выберите роль
          </p>

          <div className="grid grid-cols-4 max-w-445.5 mx-auto gap-2">
            {roles.map((role) => (
              <button
                key={role.key}
                type="button"
                onClick={() => handleSelectRole(role.key)}
                className={`overflow-hidden rounded-4xl flex flex-col items-center pt-9.5 transition hover:scale-[1.02] backdrop-blur-[60px]
                  ${
                    rootStore.role === role.key
                      ? 'bg-[linear-gradient(180deg,rgba(50,41,34,0.5)_0%,rgba(179,155,137,0.5)_100%),linear-gradient(0deg,#C7470F,#C7470F)]'
                      : 'bg-[linear-gradient(180deg,rgba(50,41,34,0.5)_0%,rgba(179,155,137,0.5)_100%)]'
                  }`}
              >
                <span className="font-semibold text-[36px] leading-11 text-[#FFFFFF80]">
                  {role.title}
                </span>

                <span className="font-bold text-[56px] leading-16 text-white flex-auto">
                  {role.name}
                </span>

                <img src={role.image} alt={role.title} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default Intro;
