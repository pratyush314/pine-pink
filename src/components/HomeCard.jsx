const HomeCard = ({ imgSrc, text, width }) => {
  return (
    <div className="relative">
      <div className="absolute top-5 left-5 h-14 px-5 py-7 bg-white/10 rounded-[20px] inline-flex justify-center items-center">
        <div className="justify-start text-white text-xl font-semibold uppercase">
          {text}
        </div>
      </div>
      <img
        src={imgSrc}
        alt="image"
        width={width}
        className="h-96 rounded-[20px]"
      />
    </div>
  );
};

export default HomeCard;
