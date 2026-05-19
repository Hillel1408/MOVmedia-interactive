import { observer } from 'mobx-react-lite';

import { Intro, Schoolboy, Olympiad, Security, Movement } from '../components';
import { rootStore } from '../stores/rootStore';

const Home = observer(function Home() {
  if (!rootStore.isIntroFinished) {
    return <Intro />;
  }

  if (rootStore.role === 'schoolboy' && rootStore.goal === 'olympiad') {
    return <Olympiad />;
  }

  if (rootStore.role === 'schoolboy' && rootStore.goal === 'security') {
    return <Security />;
  }

  if (rootStore.role === 'schoolboy' && rootStore.goal === 'movement') {
    return <Movement />;
  }

  if (rootStore.role === 'schoolboy') {
    return <Schoolboy />;
  }

  return null;
});

export default Home;
