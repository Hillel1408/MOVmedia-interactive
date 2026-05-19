import schoolboy from '@/assets/images/schoolboyTeas2.png';
import correctAnswer from '@/assets/images/correctAnswer.png';

const TeaserCorrect = () => {
  return (
    <div className="absolute w-full top-20 flex flex-col px-25 items-center">
      <p className=" font-semibold text-[100px] text-center leading-none">
        <span className="text-[#2E7D32]">Ответил правильно!</span> Интересно, <br /> а как бы вы
        справились? <br /> Может тоже попробуете?
      </p>
      <div className="relative inline-block">
        <img src={schoolboy} alt="" className="relative z-10 w-280 object-cover" />
        <img
          src={correctAnswer}
          alt=""
          className="absolute -right-27 top-20 z-9 w-104 object-cover"
        />
      </div>
    </div>
  );
};

export default TeaserCorrect;
