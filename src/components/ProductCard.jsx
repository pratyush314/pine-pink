const ProductCard = ({ imgSrc, text }) => {
  return (
    <div>
      <img src={imgSrc} alt="image" className="w-96 h-96 rounded-[20px]" />
      <h3 className="pl-4 text-black text-3xl font-semibold">{text}</h3>
    </div>
  );
};

export default ProductCard;
