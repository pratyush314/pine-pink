const ProductCard = ({ imgSrc, text }) => {
  return (
    <div className="flex flex-col gap-3 mb-8">
      <img src={imgSrc} alt="image" className="w-96 h-96 rounded-[20px]" />
      <h3 className="pl-4 text-black text-xl font-semibold wrap-break-word">
        {text}
      </h3>
    </div>
  );
};

export default ProductCard;
