import { useState } from 'react';

import TeaserCorrect from '@/components/teaser/TeaserCorrect/TeaserCorrect';
import TeaserFinal from '@/components/teaser/TeaserFinal/TeaserFinal';
import TeaserGoal from '@/components/teaser/TeaserGoal/TeaserGoal';
import TeaserIncorrect from '@/components/teaser/TeaserIncorrect/TeaserIncorrect';
import TeaserIntro from '@/components/teaser/TeaserIntro/TeaserIntro';
import TeaserQuestion from '@/components/teaser/TeaserQuestion/TeaserQuestion';
import TeaserRole from '@/components/teaser/TeaserRole/TeaserRole';
import TeaserRoute from '@/components/teaser/TeaserRoute/TeaserRoute';
import TeaserStart from '@/components/teaser/TeaserStart/TeaserStart';

import { useBroadcastChannel } from '@/hooks/useBroadcastChannel';

const Teaser = () => {
  const [screen, setScreen] = useState(() => {
    const saved = sessionStorage.getItem('screen');
    return saved ? JSON.parse(saved) : 'intro';
  });
  const [role, setRole] = useState(() => {
    const saved = sessionStorage.getItem('role');
    return saved ? JSON.parse(saved) : '';
  });
  const { useListen, isReady } = useBroadcastChannel(
    'app-channel'
  );

  useListen('teaser', (data) => {
    setScreen(data.screen);
    if (data.role) {
      setRole(data.role);
      sessionStorage.setItem('role', JSON.stringify(data.role));
    }
    sessionStorage.setItem('screen', JSON.stringify(data.screen));
  });

  const renderContent = () => {
    switch (screen) {
      case 'intro':
        return <TeaserIntro />;
      case 'start':
        return <TeaserStart />;
      case 'role':
        return <TeaserRole role={role} />;
      case 'goal':
        return <TeaserGoal />;
      case 'route':
        return <TeaserRoute />;
      case 'question':
        return <TeaserQuestion role={role} />;
      case 'correct':
        return <TeaserCorrect role={role} />;
      case 'incorrect':
        return <TeaserIncorrect role={role} />;
      case 'final':
        return <TeaserFinal />;
      default:
        return <TeaserIntro />;
    }
  };

  return (
    <div className="fixed inset-0 bg-[url('assets/images/mapTeas.png')] bg-cover bg-center text-[#0F0F33]">
      {screen === 'start' && (
        <div className="h-full min-h-screen bg-[url('assets/images/clouds.png')] bg-cover bg-center" />
      )}
      {isReady ? renderContent() : <TeaserIntro />}
    </div>
  );
};

export default Teaser;
