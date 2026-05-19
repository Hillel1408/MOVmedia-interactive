import schoolboy from '@/assets/images/schoolboyTeas.png';

const TeaserRole = () => {
  return (
    <div className="absolute top-20 flex flex-col px-25 items-center gap-8">
      <p className="font-semibold text-[80px] text-center leading-none">
        Нашего героя будет сопровождать <span className="text-[#EA5614]">Артём</span>. <br /> Он
        тоже учится в школе и знает, как это круто — разбираться в теме финансовой безопасности.
      </p>
      <div className="relative inline-block">
        <img src={schoolboy} alt="" className="relative z-10 w-218 object-cover" />

        <div className="w-full h-full absolute -bottom-32 left-1/2 -translate-x-1/2 rounded-full bg-[#FBC6A4] blur-[200px]" />
      </div>
    </div>
  );
};

export default TeaserRole;
