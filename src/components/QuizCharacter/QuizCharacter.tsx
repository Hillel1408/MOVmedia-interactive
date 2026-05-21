import { schoolboy, schoolboy4, schoolboy5 } from '../../assets/images';

type QuizCharacterProps = {
  isQuizCompleted: boolean;
  isQuizWrong: boolean;
};

const QuizCharacter = ({ isQuizCompleted, isQuizWrong }: QuizCharacterProps) => {
  if (isQuizCompleted) {
    return (
      <div className="relative">
        <img src={schoolboy4} width={391} height={560} alt="Школьник" />

        <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-35 left-7.75">
          В точку! Я бы так же ответил» Готов двигаться дальше?
        </div>
      </div>
    );
  }

  if (isQuizWrong) {
    return (
      <div className="relative">
        <div className="absolute bottom-0">
          <img src={schoolboy5} width={506} height={540} alt="Школьник" className="min-w-126.5" />

          <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-45 left-7.75">
            Было бы так просто — я бы уже чемпионом стал. Нет, здесь нужна практика. Давай ещё раз?
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <img src={schoolboy} width={438} height={580} alt="Школьник" />

      <div className="text-[24px] leading-[115%] text-white w-85.5 py-6.25 px-10 bg-[#32292280] rounded-4xl backdrop-blur-[60px] absolute -top-75 left-7.75">
        Победители нашей Олимпиады по финансовой безопасности получают баллы к ЕГЭ и шанс поступить
        в крутые вузы. Хочешь проверить, на что способен?
      </div>
    </div>
  );
};

export default QuizCharacter;
