import schoolboy from '@/assets/images/schoolboyTeas2.png';
import questionWhite from '@/assets/images/questionWhite.png';
import questionBlur from '@/assets/images/questionBlur.png';

const TeaserQuestion = ({ role }: { role: string }) => {
  const person = role === 'schoolboy' ? schoolboy : '';

  return (
    <div className="absolute top-20 flex flex-col px-25 items-center gap-10">
      <p className="font-semibold text-[80px] text-center leading-none">
        А вот и вопросы от Артёма. Надеемся, что участник подготовлен.
      </p>
      <div className="relative inline-block">
        <img src={person} alt="" className="relative z-10 w-6xl object-cover" />
        <img src={questionBlur} alt="" className="absolute right-15 top-65 z-9 w-63 object-cover" />
        <img
          src={questionWhite}
          alt=""
          className="absolute left-49 top-134 z-11 w-63 object-cover"
        />
      </div>
    </div>
  );
};

export default TeaserQuestion;
