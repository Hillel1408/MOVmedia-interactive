// import TeaserCorrect from '@/components/teaser/TeaserCorrect/TeaserCorrect';
import TeaserFinal from '@/components/teaser/TeaserFinal/TeaserFinal';
// import TeaserGoal from '@/components/teaser/TeaserGoal/TeaserGoal';
// import TeaserIncorrect from '@/components/teaser/TeaserIncorrect/TeaserIncorrect';
// import TeaserIntro from '@/components/teaser/TeaserIntro/TeaserIntro';
// import TeaserQuestion from '@/components/teaser/TeaserQuestion/TeaserQuestion';
// import TeaserRole from '@/components/teaser/TeaserRole/TeaserRole';
// import TeaserRoute from '@/components/teaser/TeaserRoute/TeaserRoute';
// import TeaserStart from '@/components/teaser/TeaserStart/TeaserStart';

const Teaser = () => {
  return (
    <div className="fixed inset-0 bg-[url('assets/images/mapTeas.png')] bg-cover bg-center text-[#0F0F33]">
      {/* <div className="h-full min-h-screen bg-[url('assets/images/clouds.png')] bg-cover bg-center" /> */}
      <TeaserFinal />
    </div>
  );
};

export default Teaser;
