const TeaserFinal = () => {
  return (
    <div className="fixed inset-0 bg-[url('assets/images/mapTeas3.png')] bg-cover bg-center">
      <div className="h-full flex flex-col justify-between p-16 items-center gap-40">
        <p className="font-semibold text-[100px] text-center leading-none">
          Ура! Он дошел до конца маршрута <br /> и выполнил все задания!
        </p>
        <p className="font-semibold text-[100px] text-center leading-none">
          Осталось только зарегистрироваться <br /> на платформе и получить <br /> мерч в подарок
        </p>
      </div>
    </div>
  );
};

export default TeaserFinal;
