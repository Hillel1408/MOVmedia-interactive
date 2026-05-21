import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import {
  Map,
  Modal,
  InfoCard,
  ActionButton,
  QuizQuestion,
  QuizCharacter,
} from '../../../components';

import { quizQuestions } from '../../../constans';

import { schoolboy3, аcademy, schoolboy, globalArea, globalArea2 } from '../../../assets/images';

const Movement = observer(function Movement() {
  const [step, setStep] = useState(1);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isQuizWrong, setIsQuizWrong] = useState(false);

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    }

    if (step === 5) {
      setStep(6);
    }
  };

  const mapStepConfig: Record<
    number,
    {
      buttonText: string;
      onClick: () => void;
    }
  > = {
    2: {
      buttonText: 'Академия',
      onClick: () => setStep(3),
    },
    4: {
      buttonText: 'Глобальная площадь',
      onClick: () => setStep(5),
    },
  };

  const currentMapConfig = mapStepConfig[step];

  return (
    <div
      className="relative"
      onClick={() => {
        handleNextStep();
      }}
    >
      <Map buttonText={currentMapConfig?.buttonText} onButtonClick={currentMapConfig?.onClick} />

      {step === 1 && (
        <div className="absolute right-0 bottom-0">
          <img src={schoolboy3} width={534} height={571} alt="Школьник" className="relative z-10" />
          <div className="text-[32px] leading-10 text-white w-172.5 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-85.5 right-57">
            Вижу, что тебе интересна тема финансовой безопасности, отличный выбор! Пойдём скорее, я
            расскажу тебе, какие возможности для развития тебя ждут.
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="absolute right-0 bottom-0">
          <img src={schoolboy3} width={534} height={571} alt="Школьник" className="relative z-10" />
          <div className="text-[31px] leading-10 text-white w-139.75 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-98.25 right-53">
            Начинаем с Академии! Жми на здание, не стесняйся
          </div>
        </div>
      )}

      <Modal isOpen={step === 3}>
        <div className="grid grid-cols-[391px_1fr] items-end h-full relative">
          <QuizCharacter isQuizCompleted={isQuizCompleted} isQuizWrong={isQuizWrong} />

          <InfoCard title="Академия" backgroundImage={аcademy} className="grid-cols-[1fr_492px]">
            <div>
              {isQuizCompleted && (
                <ActionButton onClick={() => setStep(4)} className="w-full">
                  Продолжить маршрут
                </ActionButton>
              )}
            </div>
            <QuizQuestion
              question="Тебе приходит сообщение: «Оплати доступ к олимпиадному заданию — получи бонус. Пришли код из СМС для подтверждения». Твои действия?"
              correctAnswerId="3"
              onCorrect={() => setIsQuizCompleted(true)}
              singleAttempt
              onWrong={() => {
                setIsQuizWrong(true);
              }}
              options={quizQuestions}
            />
          </InfoCard>
        </div>
      </Modal>

      {step === 4 && (
        <div className="absolute left-0 bottom-0">
          <img src={schoolboy} width={438} height={580} alt="Школьник" className="relative z-10" />
          <div className="text-[24px] leading-[115%] text-white w-79.75 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-135.25 left-46.25">
            Жми на следующую локацию
          </div>
        </div>
      )}

      <Modal isOpen={step === 5 || step === 6 || step === 7}>
        <div className="grid grid-cols-[391px_1fr] items-end h-full">
          <div className="relative">
            <img src={schoolboy} width={438} height={580} alt="Школьник" />
            {step === 5 && (
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-95 left-7.75">
                Это наше Международное движение, здесь люди из разных стран объединяются вокруг
                финансовой безопасности. Ты сможешь найти единомышленников, рассказать о себе и
                стать его важной частью.
              </div>
            )}
            {step === 6 && (
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-65 left-7.75">
                Хочешь посмотреть с кем можно подружиться? Нажми кнопку и увидишь, какие классные
                ребята есть на нашей платформе
              </div>
            )}
            {step === 7 && (
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-120 left-7.75">
                Ты можешь выбрать любой трек Международного движения по финансовой безопасности, а
                ещё — вести свой блог и создать сообщество, где вместе с подписчиками будешь
                обсуждать главные события по теме. Здорово, правда?» Готов двигаться дальше?
              </div>
            )}
          </div>

          <InfoCard
            title="Глобальная площадь"
            backgroundImage={step === 7 ? globalArea2 : globalArea}
            className=""
          >
            {step === 5 && <></>}
            {step === 6 && (
              <ActionButton onClick={() => setStep(7)} className="w-111 mx-auto">
                Найти друзей
              </ActionButton>
            )}
            {step === 7 && (
              <ActionButton onClick={() => setStep(8)} className="w-111 mx-auto">
                Завершить маршрут
              </ActionButton>
            )}
          </InfoCard>
        </div>
      </Modal>

      {step === 8 && (
        <div className="absolute left-0 bottom-0">
          <img src={schoolboy} width={438} height={580} alt="Школьник" className="relative z-10" />
          <div className="text-[24px] leading-[115%] text-white w-79.75 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-135.25 left-46.25">
            Жми на следующую локацию
          </div>
        </div>
      )}
    </div>
  );
});

export default Movement;
