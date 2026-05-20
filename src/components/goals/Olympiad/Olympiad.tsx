import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import {
  Map,
  CardSequence,
  Modal,
  ActionButton,
  InfoCard,
  QuizQuestion,
} from '../../../components';

import { rootStore } from '../../../stores/rootStore';
import { quizQuestions } from '../../../constans/quizQuestions';

import {
  schoolboy3,
  schoolboy,
  olympicCenter,
  аcademy,
  schoolboy4,
  globalArea,
  qrCode,
  schoolboy5,
  map2,
  globalArea2,
  schoolboy6,
} from '../../../assets/images';
import { hat, star, clipboardList, university } from '../../../assets/icons';

const Olympiad = observer(function Olympiad() {
  const [step, setStep] = useState(1);
  const [isSequenceCompleted, setIsSequenceCompleted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isQuizWrong, setIsQuizWrong] = useState(false);

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    }

    if (step === 5 && isQuizWrong && !isQuizCompleted) {
      setStep(11);
    }

    if (step === 7) {
      setStep(8);
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
      buttonText: 'Олимпиадный центр',
      onClick: () => setStep(3),
    },
    4: {
      buttonText: 'Академия',
      onClick: () => setStep(5),
    },
    6: {
      buttonText: 'Глобальная площадь',
      onClick: () => setStep(7),
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
          <div className="text-[31px] leading-10 text-white w-172.5 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-95.5 right-57">
            Вижу, что ты выбрал подготовку к Олимпиаде, отличный выбор! Пойдем скорее, я расскажу
            тебе, какие возможности для развития тебя ждут.
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="absolute right-0 bottom-0">
          <img src={schoolboy3} width={534} height={571} alt="Школьник" className="relative z-10" />
          <div className="text-[31px] leading-10 text-white w-156.25 py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-110.25 right-58.75">
            Начинаем с Олимпиадного центра! Жми на здание, не стесняйся
          </div>
        </div>
      )}

      <Modal isOpen={step === 3}>
        <div className="grid grid-cols-[391px_1fr] items-end h-full">
          <div className="relative">
            <img src={schoolboy} width={438} height={580} alt="Школьник" />
            <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-75 left-7.75">
              Победители нашей Олимпиады по финансовой безопасности получают баллы к ЕГЭ и шанс
              поступить в крутые вузы. Хочешь проверить, на что способен?
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
              correctOrder={['clipboardList', 'star', 'hat', 'university']}
              items={[
                {
                  id: 'hat',
                  icon: hat,
                  iconBg: '#DDEDF9',
                  title: 'Записаться на курс',
                },
                {
                  id: 'clipboardList',
                  icon: clipboardList,
                  iconBg: '#E0E6FB',
                  title: 'Пройти тест',
                },
                {
                  id: 'university',
                  icon: university,
                  iconBg: '#F46248',
                  title: 'Получить преимущества при поступлении в лучшие ВУЗы',
                },
                {
                  id: 'star',
                  icon: star,
                  iconBg: '#FEEBBF',
                  title: 'Получить рекомендации',
                },
              ]}
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

      <Modal isOpen={step === 5}>
        <div className="grid grid-cols-[391px_1fr] items-end h-full relative">
          {isQuizCompleted ? (
            <div className="relative">
              <img src={schoolboy4} width={391} height={560} alt="Школьник" />
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-35 left-7.75">
                В точку! Я бы так же ответил» Готов двигаться дальше?
              </div>
            </div>
          ) : isQuizWrong ? (
            <div className="relative">
              <div className="absolute bottom-0">
                <img
                  src={schoolboy5}
                  width={506}
                  height={540}
                  alt="Школьник"
                  className="min-w-126.5"
                />
                <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-45 left-7.75">
                  Было бы так просто — я бы уже чемпионом стал. Нет, здесь нужна практика. Давай ещё
                  раз?
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <img src={schoolboy} width={438} height={580} alt="Школьник" />
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-75 left-7.75">
                Победители нашей Олимпиады по финансовой безопасности получают баллы к ЕГЭ и шанс
                поступить в крутые вузы. Хочешь проверить, на что способен?
              </div>
            </div>
          )}

          <InfoCard title="Академия" backgroundImage={аcademy} className="grid-cols-[1fr_492px]">
            <div>
              {isQuizCompleted && (
                <ActionButton onClick={() => setStep(6)} className="w-full">
                  Продолжить маршрут
                </ActionButton>
              )}
            </div>
            <QuizQuestion
              question="Тебе приходит сообщение: «Оплати доступ к олимпиадному заданию — получи бонус. Пришли код из СМС для подтверждения». Твои действия?"
              correctAnswerId="3"
              onCorrect={() => setIsQuizCompleted(true)}
              onWrong={() => {
                setIsQuizWrong(true);
              }}
              options={quizQuestions}
            />
          </InfoCard>
        </div>
      </Modal>

      {step === 6 && (
        <div className="absolute left-0 bottom-0">
          <img src={schoolboy} width={438} height={580} alt="Школьник" className="relative z-10" />
          <div className="text-[24px] leading-[115%] text-white w-[320px] py-6.25 px-10 absolute bg-[#32292280] rounded-4xl backdrop-blur-[60px] bottom-147.25 left-14">
            Жми на следующую локацию
          </div>
        </div>
      )}

      <Modal isOpen={step === 7 || step === 8 || step === 9}>
        <div className="grid grid-cols-[391px_1fr] items-end h-full">
          <div className="relative">
            <img src={schoolboy} width={438} height={580} alt="Школьник" />
            {step === 7 && (
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-100 left-7.75">
                Это наше Международное движение, здесь люди из разных стран объединяются вокруг
                финансовой безопасности. Ты сможешь найти единомышленников, рассказать о себе и
                стать его важной частью.
              </div>
            )}
            {step === 8 && (
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-65 left-7.75">
                Хочешь посмотреть с кем можно подружиться? Нажми кнопку и увидишь, какие классные
                ребята есть на нашей платформе
              </div>
            )}
            {step === 9 && (
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-120 left-7.75">
                Ты можешь выбрать любой трек Международного движения по финансовой безопасности, а
                ещё — вести свой блог и создать сообщество, где вместе с подписчиками будешь
                обсуждать главные события по теме. Здорово, правда?» Готов двигаться дальше?
              </div>
            )}
          </div>
          <InfoCard
            title="Глобальная площадь"
            backgroundImage={step === 9 ? globalArea2 : globalArea}
            className=""
          >
            {step === 7 && <></>}
            {step === 8 && (
              <ActionButton onClick={() => setStep(9)} className="w-111 mx-auto">
                Найти друзей
              </ActionButton>
            )}
            {step === 9 && (
              <ActionButton onClick={() => setStep(10)} className="w-111 mx-auto">
                Завершить маршрут
              </ActionButton>
            )}
          </InfoCard>
        </div>
      </Modal>

      {step === 10 && (
        <div className="absolute right-0 bottom-0">
          <img src={schoolboy4} width={391} height={560} alt="Школьник" className="relative z-10" />
          <div className="text-[31px] font-semibold leading-10 text-[#393C42] w-172.5 p-10 absolute rounded-4xl backdrop-blur-[60px] bottom-75.5 right-35.5 bg-[linear-gradient(180deg,rgba(255,247,241,0.80)_0%,rgba(255,237,224,0.80)_100%)]">
            <p className="mb-10">
              Отличная работа! Ты добрался до конца маршрута и теперь знаешь как много возможностей
              есть на платформе «Содружество»! Переходи по QR-коду и продолжай выполнять задания,
              чтобы получить крутой мерч!
            </p>
            <div className="flex gap-6 items-center">
              <img src={qrCode} alt="QR код" width={283} height={283} />
              <span className="text-[40px] leading-12 font-semibold text-[#393C42]">
                Сканируй <br /> меня
              </span>
            </div>
            <ActionButton
              onClick={() => {
                setStep(1);
                rootStore.setRole(null);
                rootStore.finishIntro(false);
                rootStore.setGoal(null);
              }}
              className="mt-5"
            >
              Вернуться в начало
            </ActionButton>
          </div>
        </div>
      )}

      <Modal isOpen={step === 11}>
        <div
          className={classNames(
            'relative grid grid-cols-[391px_548px] items-end justify-between h-full bg-[#f7eae1]'
          )}
        >
          <img src={map2} alt="Карта" className="absolute inset-0 w-full h-full object-cover" />

          {isQuizCompleted && (
            <div className="relative">
              <img src={schoolboy4} width={391} height={560} alt="Школьник" />
              <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-35 left-7.75">
                В точку! Я бы так же ответил» Готов двигаться дальше?
              </div>
            </div>
          )}

          {isQuizWrong && !isQuizCompleted && (
            <div>
              <div className="absolute bottom-0">
                <img src={schoolboy6} width={524} height={549} alt="Школьник" />
                <div className="text-[24px] leading-[115%] text-white w-63.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-20 left-14">
                  Давай ещё раз
                </div>
              </div>
            </div>
          )}

          <div className="mr-14 mb-39.75">
            <QuizQuestion
              question="Тебе приходит сообщение: «Оплати доступ к олимпиадному заданию — получи бонус. Пришли код из СМС для подтверждения». Твои действия?"
              correctAnswerId="3"
              onCorrect={() => setIsQuizCompleted(true)}
              onWrong={() => {
                setIsQuizWrong(true);
              }}
              options={quizQuestions}
            >
              {isQuizCompleted && (
                <ActionButton onClick={() => setStep(6)} className="w-full mt-6">
                  Продолжить маршрут
                </ActionButton>
              )}
            </QuizQuestion>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default Olympiad;
