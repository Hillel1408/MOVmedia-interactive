const TeaserStart = () => {
  return (
    <div className="absolute bottom-57 flex flex-col px-40 items-center gap-40">
      <div className="flex justify-center items-center bg-[#EA5614] backdrop-blur-[98.7px] w-82.25 h-82.25 rounded-full">
        <svg
          width="155"
          height="155"
          viewBox="0 0 155 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.4841 30.6348C36.6579 29.1734 37.1703 27.7728 37.9804 26.5442C38.7905 25.3157 39.876 24.293 41.1507 23.5576C42.4253 22.8221 43.854 22.3942 45.3231 22.3078C46.7922 22.2214 48.2611 22.4788 49.6133 23.0598C56.4481 25.9816 71.7654 32.9259 91.2016 44.1436C110.644 55.3677 124.32 65.1695 130.261 69.6166C135.332 73.4202 135.345 80.963 130.267 84.7795C124.385 89.2009 110.876 98.8739 91.2016 110.24C71.508 121.605 56.3709 128.466 49.6004 131.349C43.7695 133.84 37.2436 130.062 36.4841 123.774C35.596 116.424 33.9355 99.7364 33.9355 77.198C33.9355 54.6726 35.5896 37.9909 36.4841 30.6348Z"
            fill="white"
          />
        </svg>
      </div>
      <p className="font-semibold text-[100px] text-center leading-none">
        Кто-то входит в Город Содружества. Сейчас начнётся путешествие!
      </p>
    </div>
  );
};

export default TeaserStart;
