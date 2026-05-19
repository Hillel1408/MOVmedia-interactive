import schoolboy from '@/assets/images/schoolboyTeas3.png';
import incorrectAnswer from '@/assets/images/incorrectAnswer.png';

const TeaserIncorrect = () => {
  return (
    <div className="absolute w-full top-20 flex flex-col px-25 items-center">
      <p className=" font-semibold text-[100px] text-center leading-none">
        <span className="text-[#D32F2F]">Не угадал. </span> Но здесь не ставят двоек, можно
        попробовать еще раз. А может вы хотите испытать себя?
      </p>
      <div className="relative inline-block">
        <img src={schoolboy} alt="" className="relative z-10 w-280 object-cover" />
        <img
          src={incorrectAnswer}
          alt=""
          className="absolute -left-10 top-18 z-9 w-118 object-cover"
        />
      </div>
    </div>
  );
};

export default TeaserIncorrect;
