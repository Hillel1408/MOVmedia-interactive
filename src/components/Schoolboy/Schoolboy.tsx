import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Map, ActionButton } from '../../components';

import { rootStore } from '../../stores/rootStore';

import { schoolboy2 } from '../../assets/images';
import { useBroadcastChannel } from '@/hooks/useBroadcastChannel';

const Schoolboy = observer(function Schoolboy() {
  const [step, setStep] = useState(1);

  const { send } = useBroadcastChannel('app-channel');

  const handleGoal = (goal: string) => {
    rootStore.setGoal(goal);
    send('teaser', {
      screen: 'goal',
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Map />

      <div className="absolute bottom-0 left-0">
        <img src={schoolboy2} width={535} height={692} alt="Школьник" className="relative z-10" />

        <div
          className={classNames(
            'py-6.25 pl-7.25 pr-14 absolute left-100.25 bottom-113 bg-[#32292280] rounded-4xl backdrop-blur-[60px]',
            step === 1 ? 'w-173.75' : 'w-194.5'
          )}
        >
          <div className="text-[31px] leading-10 text-white mb-5">
            Привет, друг! Я Артём, твой проводник по городу. Сегодня я покажу тебе интересные места
            и познакомлю с местными достопримечательностями. А чтобы наше путешествие было
            продуктивным, выбери цель.
          </div>

          {step === 2 && (
            <div className="flex flex-col gap-4.5">
              <ActionButton onClick={() => handleGoal('olympiad')}>
                Подготовиться к Олимпиаде
              </ActionButton>

              <ActionButton onClick={() => handleGoal('security')}>
                Узнать о финансовой безопасности
              </ActionButton>

              <ActionButton
                onClick={() => handleGoal('movement')}
                className="bg-[#EA5614] h-32 rounded-3xl font-semibold text-[32px] leading-10 text-white"
              >
                Познакомиться с Международным движением по финансовой безопасности
              </ActionButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Schoolboy;
